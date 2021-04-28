import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo-starw.png";
import { Favorites } from "./Favorites.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={Logo} width="120" alt="Star Wars Logo" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<Favorites />
				</Link>
			</div>
		</nav>
	);
};
