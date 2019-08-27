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
        redirect: false
    }
    // this.SomeMethod = this.SomeMethod.bind(this);
    this.getProjectDetails = this.getProjectDetails.bind(this)

  }

  // SomeMethod () {
  //   const pathname = this.props.location.state.responseData;
  //   console.log("hittt",pathname);
  // }

  componentDidMount(){
      console.log(this.props.location.state.responseData.id)
  }
    getProjectDetails(userId){
    var url = 'api/projects/user_all_projects/';
    url = url + userId.toString()
    const conf = {
      method: "get",
      url: url
    };
    axios(conf).then(response => {console.log(response);
    this.setState({
      redirect: true,
      responseData:response
    })});
  }

  setRedirect = () => {this.setState({redirect: true})}
  renderRedirect(){if (this.state.redirect) {
      console.log("entered")
      return (<Redirect to={{
          pathname: '/create-project',
      }} />)
    }
  }

render(){
  return(
    <div>
        {this.renderRedirect()}
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
            	<div className="list_ticket"onClick={this.setRedirect} >
                	<ul>
                  <li>
                    	<div className="circle">
                        	A
                        </div>
                        <div className="desp">
                        	<h3>wood_metal_material_labeling</h3>
                            <p>Material labeling for underperforming classes</p>
                        </div>
                        <div className="counnt">4,088 labels<span>Active 2 Motnhs Ago</span></div>
                    </li>
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
