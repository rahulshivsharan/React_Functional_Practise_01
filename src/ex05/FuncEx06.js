import React from "react";
import Greeting from "./Greeting";
import ColorRed from "./ColorRed";

export default function FuncEx06(){
	let obj = {
		"name" : "John Denver",
		"gender" : "Male"
	};

	let greetingComponent = Greeting(obj);
	console.log("Component");
	return ColorRed(greetingComponent);
}