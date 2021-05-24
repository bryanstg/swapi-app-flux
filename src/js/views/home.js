import React, { useContext } from "react";
import { Cards } from "../component/Cards.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { Context } from "../store/appContext.js";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container p-4 text-center mt-5">
			<Cards attribute={store.people.attribute} />
			<Cards attribute={store.planets.attribute} />
		</div>
	);
};
