import React from "react";
import uppercase from "./uppercase";
import italic from "./italic";
import Greeting from "./Greeting";

export default function FuncEx03(){
	const g = Greeting({ "name" : "Viktor Slovanovic" });
	const b = uppercase(g);
	const c = italic(b);
	return c;
}