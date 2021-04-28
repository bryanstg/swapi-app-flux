//React requirements
import React, { useContext } from "react";
import PropTypes from "prop-types";

//Components
import { Context } from "../store/appContext.js";

//Images
import Placeh from "../../img/400x200.png";

export const Card = ({ uid, attribute }) => {
	const { store, actions } = useContext(Context);
	const objInfo = store[attribute].info[uid];

	return (
		<React.Fragment>
			{objInfo !== undefined ? (
				<div className="card" style={{ minWidth: "10rem", width: "12rem" }}>
					<img src={Placeh} className="card-img-top" alt="400x200" />
					{attribute === "people" ? (
						<div className="card-body">
							<h3 className="card-title">{`${objInfo.properties.name}`}</h3>
							<p className="card-text">{`Gender: ${objInfo.properties.gender}`}</p>
							<p className="card-text">{`Hair Color: ${objInfo.properties.hair_color}`}</p>
							<p className="card-text">{`Eyes Color: ${objInfo.properties.eye_color}`}</p>
						</div>
					) : (
						<div className="card-body">
							<h3 className="card-title">{`${objInfo.properties.name}`}</h3>
							<p className="card-text">{`Population: ${objInfo.properties.population}`}</p>
							<p className="card-text">{`Terrain: ${objInfo.properties.terrain}`}</p>
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
			) : (
				<div>{""}</div>
			)}
		</React.Fragment>
	);
};

Card.propTypes = {
	uid: PropTypes.string,
	attribute: PropTypes.string
};
