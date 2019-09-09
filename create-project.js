import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import {
  Redirect
} from "react-router-dom";

export default class Create_project_1 extends React.Component {
  constructor (props) {
      super(props)
      this.state ={
          Name: '',
          Industry: '',
          Company:'',
          Purpose:'',
          Details:'',
          redirect:false
      }
      this.handleNameChange= this.handleNameChange.bind(this);
      this.handleIndustryChange= this.handleIndustryChange.bind(this);
      this.handleCompanyChange = this.handleCompanyChange.bind(this);
      this.handlePurposeChange = this.handlePurposeChange.bind(this);
      this.handleDetailsChange = this.handleDetailsChange.bind(this);
      this.redirectToCreateProject2=this. redirectToCreateProject2.bind(this);
  }
  handleNameChange (event){
    this.setState({Name: event.target.value});
  }
  handleIndustryChange (event){
    this.setState({Industry: event.target.value})
  }
  handleCompanyChange (event) {
      this.setState({Company: event.target.value})
  }
  handlePurposeChange (event) {
      this.setState({Purpose: event.target.value})
  }
  handleDetailsChange (event) {
      this.setState({Details: event.target.value})
  }
  handleProjectSubmit=()=>{
    this.setState({
      redirect: true,
    });}
  redirectToCreateProject2(){
      if(this.state.redirect===true){
          return(
              <Redirect
              to={{
                  pathname:'/create-project2',
                  state:this.state
              }}
              />
          )
      }
    }
  render(){
    return (<div>
        {this.redirectToCreateProject2()}
  <header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> <a className="navbar-brand" href="#">Labelbox </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active"> <a className="nav-link" href="#">Tasks <span className="sr-only">(current)</span></a> </li>
        <li className="nav-item dropdown"> <a className="nav-link btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">manoj+102@edgecase.ai </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> <a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a className="dropdown-item" href="#">Something else here</a> </div>
        </li>
      </ul>
    </div>
  </nav>
</header>
        <div className="container-fluid">
  <div className="main_top new_data">
   <h4>Create Project</h4>
      <div className="form_box">
        <div className="main_top">
 <form>
     <legend><h4>Create Project</h4></legend>
  <div className="form-group">
    <input type="text" className="form-control form-control-lg " placeholder="Your Name" value={this.state.Name} onChange={this.handleNameChange} />
  </div>
      <div className="form-group">
    <input type="text" className="form-control form-control-lg " placeholder="Industry" value={this.state.Industry} onChange={this.handleIndustryChange} />
  </div>
     <div className="form-group">
    <input type="text" className="form-control form-control-lg " placeholder="Company" value={this.state.Company} onChange={this.handleCompanyChange}/>
  </div>
      <div className="form-group">
    <input type="text" className="form-control form-control-lg" placeholder="Purpose" value={this.state.Purpose} onChange={this.handlePurposeChange}/>
  </div>
     <div className="form-group">
    <input type="text" className="form-control form-control-lg" placeholder="Detail" value={this.state.Details} onChange={this.handleDetailsChange}/>
  </div>
     <a className="btn btn-dark" onClick={this.handleProjectSubmit}>Next</a>
 </form>
         </div>
    </div>
    </div>
        </div>
        </div>
    
          
    )
  }

}