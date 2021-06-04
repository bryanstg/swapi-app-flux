import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PlaceHold from "../../img/placeholder-800x600.png";

export function LearnMore() {
	const { store, actions } = useContext(Context);
	const { uid, attribute } = useParams();
	const cardInfo = store[attribute].info[uid];
	console.log(cardInfo);
	return (
		<div className="container p-5">
			{cardInfo != undefined ? (
				<div className="card mb-3 mx-auto" style={{ maxWidth: "1040px" }}>
					<div className="row no-gutters">
						<div className="col-md-6 m-2 p-2 d-flex justify-content-center align-content-center">
							<img
								src={PlaceHold}
								alt="Placeholder 800x600"
								style={{ maxWidth: "800px", width: "100%" }}
							/>
						</div>
						<div className="col-md-5">
							<div className="card-body text-center">
								<h5 className="card-title">{cardInfo.properties.name}</h5>
								<p className="card-text">
									{`${
										cardInfo.description
									} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque tempore obcaecati voluptatum! Deserunt, quisquam. Unde nobis ad velit neque, quos iure mollitia nihil voluptate voluptatibus enim fugiat quis perspiciatis!`}
								</p>
							</div>
						</div>
					</div>
					<div className="row text-danger font-weight-bold text-center">
						<div className="col-2">
							<p className="card-characteristic">{"Name"}</p>
							<p className="card-info">{cardInfo.properties.name}</p>
						</div>
						<div className="col-2">
							<p className="card-characteristic">{attribute == "people" ? "Birth Year" : "Climate"}</p>
							<p className="card-info">
								{attribute == "people" ? cardInfo.properties.birth_year : cardInfo.properties.climate}
							</p>
						</div>
						<div className="col-2">
							<p className="card-characteristic">{attribute == "people" ? "Gender" : "Population"}</p>
							<p className="card-info">
								{attribute == "people" ? cardInfo.properties.gender : cardInfo.properties.population}
							</p>
						</div>
						<div className="col-2">
							<p className="card-characteristic">{attribute == "people" ? "Height" : "Orbital Period"}</p>
							<p className="card-info">
								{attribute == "people"
									? cardInfo.properties.height
									: cardInfo.properties.orbital_period}
							</p>
						</div>
						<div className="col-2">
							<p className="card-characteristic">
								{attribute == "people" ? "Skin Color" : "Rotation Period"}
							</p>
							<p className="card-info">
								{attribute == "people"
									? cardInfo.properties.skin_color
									: cardInfo.properties.rotation_period}
							</p>
						</div>
						<div className="col-2">
							<p className="card-characteristic">{attribute == "people" ? "Eye color" : "Diameter"}</p>
							<p className="card-info">
								{attribute == "people" ? cardInfo.properties.eye_color : cardInfo.properties.diameter}
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className="container d-flex vh-100 vw-100 justify-content-center align-items-center">
					<div className="spinner-border text-success" role="status">
						<span className="visually-hidden" />
					</div>
				</div>
			)}
		</div>
	);
}
