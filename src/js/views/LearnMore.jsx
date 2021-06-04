import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function LearnMore() {
	const { store, actions } = useContext(Context);
	const { uid, attribute } = useParams();
	const characterInfo = actions.getCharacter(uid, attribute);

	return <h1>Hi</h1>;
}
