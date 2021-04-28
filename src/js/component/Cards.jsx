import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "./Card.jsx";
import { Context } from "../store/appContext";

export const Cards = ({ group }) => {
	const { store, actions } = useContext(Context);

	return (
		/* Map card */
		<div className="card-deck">
			<div className="">{store[group].title}</div>
			{store[group].results.length >= 10 ? (
				store[group].results.map((element, index) => {
					return <Card key={element.uid} uid={element.uid} attribute={store[group].attribute} />;
				})
			) : (
				<div>{"Loading"}</div>
			)}
		</div>
	);
};

Cards.propTypes = {
	group: PropTypes.string
};
