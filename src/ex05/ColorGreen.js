import React from "react";

export default function ColourGreen(Component){		
	return (<span style={{color : 'green'}}>{Component.children}</span>);
}