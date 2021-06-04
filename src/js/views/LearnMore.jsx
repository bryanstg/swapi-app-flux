import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PlaceHold from "../../img/placeholder-800x600.png"

export function LearnMore() {
	const { store, actions } = useContext(Context);
	const { uid, attribute } = useParams();
	const cardInfo = store[attribute].results.filter(element => {
		element.uid == uid;
	});


	return (
		<div className="container">
			{cardInfo != undefined ? (
				<div className="card mb-3 mx-auto" style={{ maxWidth: "940px" }}>
				<div className="row no-gutters">
					<div className="col-md-6 m-2 p-2 d-flex justify-content-center align-content-center">
						<img
							src={PlaceHold}
							alt="Placeholder 800x600"
							style={{ maxWidth: "600px", width: "100%" }}
						/>
					</div>
					<div className="col-md-5">
						<div className="card-body text-center">
							<h5 className="card-title">{cardInfo.name}</h5>
							<p className="card-text">
								{`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque tempore obcaecati voluptatum! Deserunt, quisquam. Unde nobis ad velit neque, quos iure mollitia nihil voluptate voluptatibus enim fugiat quis perspiciatis!`}
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-m">
						<p className="card-characteristic">{"Name"}</p>
						<p className="card-info">{ "card name"}</p>
					</div>
					<div className="col-m">
						<p className="card-characteristic">
							{resource.attribute == "character" ? "Status" : "Type"}
						</p>
						<p className="card-info">
							{resource.attribute == "character" ? "status" : "type"}
						</p>
					</div>
					<div className="col-m">
						<p className="card-characteristic">
							{resource.attribute == "character" ? "Species" : "Dimension"}
						</p>
						<p className="card-info">
							{resource.attribute == "character" ? "species" : "dimension"}
						</p>
					</div>
					{/* <div className="col-m">
						<p className="card-characteristic">{resource.attribute == "character" ? "Gender" : "Residents"}</p>
						<p className="card-info">
							{resource.attribute == "character" ? cardInfo.gender : cardInfo.residents.length}
						</p>
					</div>
					<div className="col-m">
						<p className="card-characteristic">{resource.attribute == "character" ? "Episodes" : ""}</p>
						<p className="card-info">{resource.attribute == "character" ? cardInfo.episode.length : ""}</p>
					</div> */}
					<div className="col-m">
						<p className="card-characteristic">{resource.attribute == "character" ? "id" : ""}</p>
						<p className="card-info">{resource.attribute == "character" ? "id" : ""}</p>
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
