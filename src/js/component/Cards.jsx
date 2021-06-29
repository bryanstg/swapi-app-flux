import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "./Card.jsx";
import { Context } from "../store/appContext";

export const Cards = ({ attribute }) => {
	const { store, actions } = useContext(Context);

	return (
		/* Map card */
		<div className="row my-5">
			<div className="cards-title my-3">{store[attribute].title}</div>
			<div className="card-deck card-riel d-flex justify-content-between flex-row flex-nowrap">
				{store[attribute].results.length >= 10 ? (
					store[attribute].results.map((element, index) => {
						return <Card key={element.uid + attribute} uid={element.uid} attribute={attribute} />;
					})
				) : (
					<div>{"Loading"}</div>
				)}
			</div>
		</div>
	);
};

Cards.propTypes = {
	attribute: PropTypes.string
};
