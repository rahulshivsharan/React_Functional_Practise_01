import React from "react";

export default function greeting(paramObj = {name}){
	console.log("Name is "+paramObj["name"]);
	return <span>Hello {paramObj["name"]} !</span>;
}
