import React from "react";

export default function View(computation){
	return {
		"fold" : function(props){
			return computation(props)
		}
	}
}