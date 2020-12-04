import React from "react";

export default function Colorify(Component){
	
	return function(){
		return (<span style={{color : '#008B8B'}}>
					{Component}
				</span>);
	}
}