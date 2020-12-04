import React from "react";

export default function Greeting(paramObj = {name}){	
	return <span>Hello {paramObj["name"]} !</span>;
}
