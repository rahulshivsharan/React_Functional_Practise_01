import React from "react";

export default function View(computation){
	return {
		"fold" : computation,
		"map" : function(callFn){
			var fn = function(props){
				return callFn(computation(props));
			}
			return View(fn);
		}		
	}
}