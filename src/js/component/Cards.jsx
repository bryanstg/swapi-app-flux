import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "./Card.jsx";
import { Context } from "../store/appContext";

export const Cards = ({ group }) => {
	const { store, actions } = useContext(Context);

	return (
		/* Map card */
		<div className="row my-5">
			<div className="cards-title my-3">{store[group].title}</div>
			<div className="card-deck card-riel d-flex justify-content-between flex-row flex-nowrap">
				{store[group].results.length >= 10 ? (
					store[group].results.map((element, index) => {
						return <Card key={element.uid} uid={element.uid} attribute={store[group].attribute} />;
					})
				) : (
					<div>{"Loading"}</div>
				)}
			</div>
		</div>
	);
};

Cards.propTypes = {
	group: PropTypes.string
};
