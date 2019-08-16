import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Page2 from './project2.js';
export default class Page1 extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
          email: '',
          password: '',
      }
  }
  handleEmailChange (event){
    this.setState({email: event.target.value});
  }
  handlePasswordChange (event){
    this.setState({password: event.target.value})
  }
  render(){
    return (
        <div className="Project1">
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"><a className="navbar-brand"
                                                                                          href="#">LIL PROJECTS </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a className="nav-link" href="#">Tasks <span
                                className="sr-only">(current)</span></a></li>
                            <li className="nav-item dropdown"><a
                                className="nav-link btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">manoj+102@edgecase.ai </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"><a
                                    className="dropdown-item" href="#">Action</a> <a className="dropdown-item"
                                                                                     href="#">Another action</a> <a
                                    className="dropdown-item" href="#">Something else here</a></div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="container-fluid">
                <div className="main_top new_data">

                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Create Project
                                <a href="#"><i className="fa fa-times" aria-hidden="true"></i></a>
                            </h2>
                        </div>
                        <div className="list_count">

                            <ul>
                                <li>
                                    <h4><span>1</span>Name your project</h4>
                                    <div className="form_box">
                                        <form action="#">
                                            <div className="form-group">

                                                <input type="email" className="form-control" placeholder="Email"
                                                       id="email" value={this.state.email} onChange={this.handleEmailChange}/>
                                            </div>
                                            <div className="form-group">

                                                <input type="password" className="form-control"
                                                       placeholder="Password" id="pwd" value={this.state.password}
                                                       onChange={this.handlePasswordChange}/>
                                            </div>
                                            <a href="<Page2 />" className="btn btn-dark">Next</a>
                                        </form>
                                    </div>
                                </li>
                                <li>
                                    <h4><span>2</span>Attach a dataset</h4>
                                    <div className="form_box">
                                    </div>
                                </li>
                                <li>
                                    <h4><span>3</span>Customize your label editor</h4>
                                    <div className="form_box">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}