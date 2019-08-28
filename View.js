import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../../css/bootstrap.min.css';
import '../../css/custom.css';
import '../../css/font-awesome.min.css';
import {
  Redirect
} from "react-router-dom";
import axios from 'axios';

export default class View extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        redirect: false,
        responseData1:[],
    }
    this.SomeMethod = this.SomeMethod.bind(this);
    this.getProjectDetails = this.getProjectDetails.bind(this);
    this.listProjects = this.listProjects.bind(this);

  }

  SomeMethod () {
    const pathname = this.props.location.state.responseData;
    console.log("hittt",this.props);
  }

  componentDidMount(){
      console.log("hiii",this.props,this.props.location.state)
      this.getProjectDetails(this.props.location.state['id']);
  }
    getProjectDetails(userId){
    var url = 'api/projects/user_all_projects/' + userId.toString() + '/'
    console.log(url)
    const conf = {
      method: "get",
      url: url
    };
    axios(conf).then(response => {console.log(response);
    this.setState({
      responseData1:response.data
    })
        console.log("full data",this.state.responseData1)
    }

    );
  }
    listProjects() {
      var projects = [];
      // this.state.projects use this
      var stateProjects = [this.state.responseData1]; //dummy values. replace after populating state with actual values from get.
      for(var it = 0; it<stateProjects.length; it++){
        var project = stateProjects[it];
          projects.push(<li><div className="circle">{it+1}</div>
              <div className="desp">
                  <p>Name:{project.Name}</p>
                  <p>Purpose:{project.Purpose}</p>
                  <p>Industry:{project.Industry}</p>
                  <p>Company:{project.Company}</p>
                  <p>Details:{project.Details}</p>
                  <p>Status:{project.Status}</p>
                  <p>ProjectID:{project.project_id}</p>
                  <p>UserID:{project.user_id}</p></div>
          </li>)
        }
        // replace A with iterator + A to give the right alphabet
        return(
          <div>
          {projects}
          </div>
        )
    }

render(){
  return(
    <div>
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> <a className="navbar-brand" href="#">LIL PROJECTS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"> <a className="nav-link" href="#">Tasks <span className="sr-only">(current)</span></a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">
    manoj+102@edgecase.ai
    </a> </li>
          </ul>
        </div>
      </nav>
    </header>
    <div className="container-fluid" >
      <div className="main_top">
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#home">Projects</a></li>
          <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
          <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
          <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
        </ul>

        <div className="tab-content">
          <div id="home" className="tab-pane fade in active">

            <div className="serach_box">
          <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
            	<div className="list_ticket">
                    <ul>
                    {this.listProjects()}
                    </ul>
              </div>

       <div className="pagenation_texts">
      <ul className="pagination justify-content-center">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
      </ul>
    </div>

          </div>
          <div id="menu1" className="tab-pane fade">
            <h3>Menu 1</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div id="menu2" className="tab-pane fade">
            <h3>Menu 2</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
          <div id="menu3" className="tab-pane fade">
            <h3>Menu 3</h3>
            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
}