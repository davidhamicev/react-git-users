import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/GithubContext';

export const Search = () => {
	const alert = useContext(AlertContext)
	const github = useContext(GithubContext)
	const [value, setValue] = useState('')

	const onSubmit = event => {
		if (event.key !== 'Enter') {
			return
		}

		github.clearUsers()

		if (value.trim()) {
			alert.hide()
			github.search(value.trim())
		} else {
			alert.show('Введите имя пользователя!', 'danger')
		}
	}
	
	return (
		<div className="form-controls mb-5">
			<input
				type="text"
				className="form-control"
				placeholder="Введите ник пользователя..."
				value={value}
				onChange={event => setValue(event.target.value)}
				onKeyPress={onSubmit}
			/>
		</div>
	)
}
