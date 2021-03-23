import React, { Fragment , useContext} from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'
import { GithubContext } from '../context/github/GithubContext'

export const Home = () => {
	const {users, loading} = useContext(GithubContext)

	return (
		<Fragment>
			<Search />
			<div className="row">
				{loading
					? <p className="d-block lead">Загрузка...</p>
					: users.map(user => (
						<div className="col-sm-4 mb-4" key={user.id}>
							<Card user={user} />
						</div>
					))
				}
			</div>
		</Fragment>
	)
}
