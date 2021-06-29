import React, { useContext } from "react";
import { Context } from "./../store/appContext";

export const Favorites = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="dropdown dropleft">
			<button
				className="btn btn-primary dropdown-toggle"
				type="button"
				id="dropdownMenu2"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				{`Favorites`}{" "}
				<span className="btn-secondary px-1 my-1">
					{store.favorites[0] !== "" ? `${store.favorites.length}` : "0"}
				</span>
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
				{store.favorites[0] == "" ? (
					<span className="dropdown-item">Empty</span>
				) : (
					store.favorites.map(fav => {
						return (
							<span key={fav.uid} className="dropdown-item-text d-flex justify-content-between">
								{fav.properties.name}
								<i
									className="fas fa-trash"
									onClick={event => {
										actions.deleteFavorite(fav);
									}}
								/>
							</span>
						);
					})
				)}
			</div>
		</div>
	);
};

{
	/* <div className="dropdown">
		<button
			className="btn btn-primary dropdown-toggle"
			type="button"
			id="dropdownMenu2"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false">
			{`Favorites`} <span>{store.favorites[0] !== "" ? store.favorites.length : 0}</span>
		</button>
		<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
			<a className="dropdown-item">Dropdown item text</a>
			<a className="dropdown-item">Dropdown item text</a>
			<a className="dropdown-item">Dropdown item text</a>
			<a className="dropdown-item">Dropdown item text</a>
		</div>
	</div> */
}
