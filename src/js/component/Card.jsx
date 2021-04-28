//React requirements
import React, { useContext } from "react";
import PropTypes from "prop-types";

//Components
import { Context } from "../store/appContext.js";

//Images
import Placeh from "../../img/400x200.png";

export const Card = ({ uid, attribute }) => {
	const { store, actions } = useContext(Context);
	const character = store[attribute].info[uid];

	actions.getCharacter(uid, attribute);

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={Placeh} className="card-img-top" alt="400x200" />
			{attribute === "planets" ? (
				<div className="card-body">
					{console.log(store[attribute].info[uid])}
					<h3 className="card-title">{`${store[attribute].info[uid]}`}</h3>
					<p className="card-text">{`Planets`}</p>
					<p className="card-text">{""}</p>
					<p className="card-text">{""}</p>
				</div>
			) : (
				<div className="card-body">
					{/* <h3 className="card-title">{store[attribute].info[uid].name}</h3> */}
					<p className="card-text">{attribute}</p>
					<p className="card-text">{""}</p>
				</div>
			)}
			<div className="card-footer">
				<button type="button" className="btn btn-primary">
					{"Learn more"}
				</button>
				<button type="button" className="btn btn-outline-warning">
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	uid: PropTypes.string,
	attribute: PropTypes.string
};
