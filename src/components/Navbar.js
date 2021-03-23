import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		<div className="container-fluid">
			<div className="navbar-brand">GitHub поиск</div>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" to="/" exact>Главная</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/about">Информация</NavLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
)
