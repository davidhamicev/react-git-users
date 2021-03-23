import React, { useReducer } from 'react'
import axios from 'axios'
import { GithubContext } from './GithubContext';
import { GithubReducer } from './GithubReducer';
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRETS

const withCreds = url => {
	return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({ children }) => {
	const initialState = {
		user: {},
		users: [],
		loading: false,
		repos: []
	}

	const [state, dispatch] = useReducer(GithubReducer, initialState)

	const search = async value => {
		setLoading()
		// request
		const response = await axios.get(
			withCreds(`https://api.github.com/search/users?q=${value}&`)
		)

		dispatch({
			type: SEARCH_USERS,
			payload: response.data.items
		})
	}

	const getUser = async name => {
		setLoading()
		// request
		const response = await axios.get(
			withCreds(`https://api.github.com/users/${name}?`)
		)

		dispatch({
			type: GET_USER,
			payload: response.data
		})
	}

	const getRepos = async name => {
		setLoading()
		// request
		const response = await axios.get(
			withCreds(`https://api.github.com/users/${name}/repos?per_page=10&`)
		)

		dispatch({
			type: GET_REPOS,
			payload: response.data
		})
	}

	const clearUsers = () => dispatch({ type: CLEAR_USERS })
	
	const setLoading = () => dispatch({ type: SET_LOADING })
	
	const { user, users, repos, loading } = state

	return (
		<GithubContext.Provider value={{
			search, getUser, getRepos, clearUsers, setLoading,
			user, users, repos, loading
		}}>
			{children}
		</GithubContext.Provider>
	)
}
