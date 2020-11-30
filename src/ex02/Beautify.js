import React from "react";

import uppercase from "./uppercase";
import italic from "./italic";
import Greeting from "./Greeting";

export default function Beautify({ name }){
	console.log("Name is "+JSON.stringify(name));
	const a = Greeting({ name });
	const b = uppercase(a);
	const c = italic(b);
	return c;
}