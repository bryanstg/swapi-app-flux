//React requirements
import React, { useContext } from "react";
import PropTypes from "prop-types";

//Components
import { Context } from "../store/appContext.js";

//Images
import Placeh from "../../img/400x200.png";
import { useHistory } from "react-router-dom";

export const Card = ({ uid, attribute }) => {
	const { store, actions } = useContext(Context);
	const objInfo = store[attribute].info[uid];
	const history = useHistory();

	return (
		<React.Fragment>
			{objInfo !== undefined ? (
				<div className="card card-style text-left my-2" style={{ width: "20rem" }}>
					<img src={Placeh} className="card-img-top" alt="400x200" />
					{attribute === "people" ? (
						<div className="card-body">
							<h3 className="card-title">{`${objInfo.properties.name}`}</h3>
							<p className="card-text mb-1">{`Gender: ${objInfo.properties.gender}`}</p>
							<p className="card-text mb-1">{`Hair Color: ${objInfo.properties.hair_color}`}</p>
							<p className="card-text mb-1">{`Eyes Color: ${objInfo.properties.eye_color}`}</p>
						</div>
					) : (
						<div className="card-body">
							<h3 className="card-title">{`${objInfo.properties.name}`}</h3>
							<p className="card-text mb-1">{`Population: ${objInfo.properties.population}`}</p>
							<p className="card-text mb-1">{`Terrain: ${objInfo.properties.terrain}`}</p>
						</div>
					)}
					<div className="card-footer d-flex justify-content-between py-2">
						<button
							type="button"
							className="btn btn-outline-primary"
							onClick={event => {
								history.push(`/learn-more/${attribute}/${uid}`);
							}}>
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
