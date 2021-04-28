const getState = ({ getStore, getActions, setStore }) => {
	const API_URI = "https://www.swapi.tech/api";

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
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
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
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
							...store,
							[pointer]: {
								...store[pointer],
								results: data.results
							}
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
							...store,
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
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
