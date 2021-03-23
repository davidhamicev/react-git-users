import { GET_USER, GET_REPOS, SET_LOADING, SEARCH_USERS, CLEAR_USERS } from '../types';

const handlers = {
	[SEARCH_USERS]: (state, { payload }) => ({ ...state, users: payload, loading: false }),
	[GET_REPOS]: (state, { payload }) => ({ ...state, repos: payload, loading: false }),
	[GET_USER]: (state, { payload }) => ({ ...state, user: payload, loading: false }),
	[SET_LOADING]: (state) => ({ ...state, loading: true }),
	[CLEAR_USERS]: (state) => ({ ...state, users: [] }),
	DEFAULT: state => state
}

export const GithubReducer = (state, action) => {
	const handler = handlers[action.type] || action.DEFAULT

	return handler(state, action)
}
