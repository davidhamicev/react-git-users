import React, {useContext, useEffect, Fragment} from 'react'
import { GithubContext } from '../context/github/GithubContext'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'

export const Profile = ({ match }) => {
	const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
	const urlName = match.params.name
	
	useEffect(() => {
		getUser(urlName)
		getRepos(urlName)
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <p className="text-center">Загрузка...</p>
	}

	const {
		name, company, avatar_url,
		location, bio, blog,
		login, html_url, followers,
		following, public_repos,
		public_gists
	} = user

	return (
		<Fragment>
			<Link to="/" className="btn btn-link">На главную</Link>
			<div className="card mb-4">
				<div className="card-body">
					<div className="row">
						<div className="col-sm-3">
							<img
								src={avatar_url}
								alt={name}
								style={{ width: '200px' }}
							/>
							<h4 className="mt-2 mb-2">{name}</h4>
							{location && <p>Местоположение: {location}</p>}
						</div>
						<div className="col">
							{
								bio && <Fragment>
									<h3>BIO</h3>
									<p>{bio}</p>
								</Fragment>
							}

							<div className="badge badge-primary mr-2">Подписчики: {followers}</div>
							<div className="badge badge-success mr-2">Подписан: {following}</div>
							<div className="badge badge-warning mr-2">Репозитории: {public_repos}</div>
							<div className="badge badge-danger mb-3">Gists: {public_gists}</div>

							<ul className="list-group">
								{login && <li className="list-group-item">
									<strong>Username: </strong> {login}
								</li>}

								{company && <li className="list-group-item">
									<strong>Компания: </strong> {company}
								</li>}

								{blog && <li className="list-group-item">
									<strong>Website: </strong>
									<a
										href={blog}
										target="_blank"
										rel="noopener noreferrer"
									>{blog}
									</a>
								</li>}
							</ul>

							<a
								href={html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-secondary d-block mt-3"
							>Открыть профиль</a>
						</div>
					</div>
				</div>
			</div>

			<Repos repos={repos}/>
		</Fragment>
	)
}
