import React from "react";
import View from "./View";
import Greeting from "./Greeting";
import Bigger from "./Bigger";

export default function FuncEx04(){
	const greeting = View(Greeting);
	const g = greeting.fold({ "name" : "Laim Nelson" });
	const b = Bigger(g);
	return b;
}