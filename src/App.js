import React from "react";
import DefaultView from "./DefaultView";
import FuncEx01 from "./FuncEx01";
import FuncEx02 from "./ex02/FuncEx02";
import FuncEx03 from "./ex02/FuncEx03";
import FuncEx04 from "./ex03/FuncEx04";
import FuncEx05 from "./ex04/FuncEx05";

import {Link,Route,BrowserRouter} from "react-router-dom";


export default function App () {	
		return (
			<BrowserRouter>		
				<div>
					<nav className="navbar navbar-default navbar-static-top">
						<div className="container-fluid">
							<div className="navbar-header">
						      <a className="navbar-brand" href="javaScript:void(0)">Functional React</a>
						    </div>						    
						</div>
					</nav>
					<div className="container customcontainer">
						<div className="row">
							<div className="col-md-2">
								<div className="row">
									<div className="col-md-12">
										<div className="panel panel-default">
		  									<div className="panel-body">
		    									<Link className="nav-link" to="/reactPractise/ex01">Functional Ex 01</Link>		    									
		  									</div>
										</div>								         						
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="panel panel-default">
		  									<div className="panel-body">
		    									<Link className="nav-link" to="/reactPractise/ex02">Functional Ex 02</Link>		    									
		  									</div>
										</div>								         						
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="panel panel-default">
		  									<div className="panel-body">
		    									<Link className="nav-link" to="/reactPractise/ex03">Functional Ex 03</Link>		    									
		  									</div>
										</div>								         						
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="panel panel-default">
		  									<div className="panel-body">
		    									<Link className="nav-link" to="/reactPractise/ex03/04">Functional Ex 04</Link>		    									
		  									</div>
										</div>								         						
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="panel panel-default">
		  									<div className="panel-body">
		    									<Link className="nav-link" to="/reactPractise/ex04">Functional Ex 05</Link>		    									
		  									</div>
										</div>								         						
									</div>
								</div>								
							</div>
							<div className="col-md-10">
								<Route exact path="/reactPractise" component={DefaultView} />
								<Route exact path="/reactPractise/ex01" component={FuncEx01} />
								<Route exact path="/reactPractise/ex02" component={FuncEx02} />
								<Route exact path="/reactPractise/ex03" component={FuncEx03} />
								<Route exact path="/reactPractise/ex03/04" component={FuncEx04} />
								<Route exact path="/reactPractise/ex04" component={FuncEx05} />

							</div>
						</div>
					</div>							
				</div>			
			</BrowserRouter>	
		)
	
}