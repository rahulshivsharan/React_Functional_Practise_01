import React from "react";
import Colorify from "./Colorify";
import Bigger from "./Bigger";
import Greeting from "./Greeting";

export default function FuncEx09(){
	const greetingCompnent = Greeting({"name" : "Timothy Heathers"});
	const biggerComponent = Bigger(greetingCompnent);
	const colorifyComponent = Colorify(biggerComponent);

	return colorifyComponent();
}