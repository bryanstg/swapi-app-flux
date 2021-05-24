import React from "react";

export const Favorites = () => {
	return (
		<div className="dropdown">
			<a
				className="btn btn-primary dropdown-toggle"
				href="#"
				role="button"
				id="dropdownMenuLink"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				{"Favorites"} <span className="bg-secondary ">{"0"}</span>
			</a>

			<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
				<ul>
					<li>
						<a className="dropdown-item" href="#">
							{"Info"}
						</a>
						<span>{"Delete"}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};
