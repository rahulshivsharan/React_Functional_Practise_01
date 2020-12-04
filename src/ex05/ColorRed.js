import React from "react";

export default function ColourRed(Component){
	console.log(Component);	
	return (<span style={{color : 'red'}}>{Component}</span>);
}