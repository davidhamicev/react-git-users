import React, { Fragment } from 'react'

export const Repos = ({ repos }) => (
	<Fragment>
		{
			repos.map(({ id, name, html_url, watchers }) => (
				<div className="card mb-3">
					<div className="card-body d-flex justify-content-between">
						<a href={html_url} key={id} target="_blank" rel="noreferrer noopener">
							{name}
						</a>
						<span>
							{watchers}
							<i class="bi bi-star ml-2"></i>
						</span>
					</div>
				</div>
			))
		}
	</Fragment>
)
