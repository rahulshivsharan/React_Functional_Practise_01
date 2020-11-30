import React from "react";
import View from "./View";
import Greeting from "./Greeting";
import Bigger from "./Bigger";
import Italic from "./Italic";
import Bolder from "./Bolder";
import Colourful from "./Colourful";

export default function FuncEx04(){
	const greetingObj = View(Greeting);
	
	const supperGreetingObj = greetingObj.map(Bigger)
										 .map(Italic)
										 .map(Colourful)
										 .map(Bolder);

	const g = supperGreetingObj.fold({ "name" : "Jack Kimberly Gregor" });	
	return g;
}