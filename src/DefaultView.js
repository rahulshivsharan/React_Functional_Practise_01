import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route} from "react-router-dom";

export default class DefaultView extends React.Component{
	render (){
		return (
			<div className="jumbotron jumbotron-fluid">
				<h1 className="display-4">React Practise</h1>
			</div>	
		)
	}
}; 