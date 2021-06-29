const getState = ({ getStore, getActions, setStore }) => {
	const API_URI = "https://www.swapi.tech/api";

	return {
		store: {
			people: {
				attribute: "people",
				title: "Characters",
				results: [],
				info: {}
			},
			planets: {
				attribute: "planets",
				title: "Planets",
				results: [],
				info: {}
			},
			favorites: [""]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			//Get all the info from a pointer in the API
			getSwapi: pointer => {
				fetch(`${API_URI}/${pointer}`)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
					})
					.then(data => {
						const store = getStore();

						setStore({
							[pointer]: {
								...store[pointer],
								results: data.results
							}
						});
					})
					.then(data => {
						const store = getStore();
						const actions = getActions();
						store.planets.results.map((element, index) => {
							const uid = element.uid;
							actions.getCharacter(uid, "planets");
						});
						store.people.results.map((element, index) => {
							const uid = element.uid;
							actions.getCharacter(uid, "people");
						});
					})
					.catch(error => {
						console.log(error);
					});
			},
			getCharacter: (uid, attribute) => {
				fetch(`${API_URI}/${attribute}/${uid}`)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
					})
					.then(data => {
						const store = getStore();

						setStore({
							[attribute]: {
								...store[attribute],
								info: {
									...store[attribute].info,
									[uid]: {
										...data.result
									}
								}
							}
						});
					})
					.catch(error => {
						console.log(error);
					});
			},
			setInfo: attribute => {
				const store = getStore();
				store[attribute].results.map((element, index) => {
					const uid = element.uid;
					getCharacter(uid, attribute);
				});
			},
			addFavorite: objInfo => {
				const store = getStore();

				if (store.favorites[0] == "") {
					setStore({
						favorites: [objInfo]
					});
				} else {
					setStore({
						favorites: [...store.favorites, objInfo]
					});
				}
			},
			deleteFavorite: objInfo => {
				const store = getStore();

				const newFavorites = store.favorites.filter(obj => {
					return objInfo.uid !== obj.uid;
				});

				setStore({
					favorites: newFavorites
				});
			}
		}
	};
};

export default getState;
