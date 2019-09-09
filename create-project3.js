import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
export default class Create_project_4 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Industry: '',
            Company:'',
            Purpose:'',
            Details:'',
            file:[],
            redirect:false

        }
    }
    componentDidMount(){
      this.setState({Name: this.props.location.state['Name'],Industry: this.props.location.state['Industry'],
          Company: this.props.location.state['Company'],Purpose:this.props.location.state['Purpose'],
          Details:this.props.location.state['Details'],file:this.props.location.state['file']});}

    render() {
        return(
            <div>
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
            <h4>Customize your label editor</h4>
            <div className="form_box">
              <div className="main_top">

                <div className="col-sm-12">
                        <div className="side_bar">
                          <div className="adding_data">
                            <h5><i className="fa fa-info-circle" aria-hidden="true"></i> Adding data</h5>
                          </div>
                          <ul className="nav nav-tabs">
                            <li><a data-toggle="tab"  className="active" href="#list-add1">Local</a></li>
                            <li><a data-toggle="tab" href="#list-add2">Cloud</a></li>

                          </ul>
                          <div className="tab-content">
                            <div id="list-add1" className="tab-pane fade in active">
                              <h4>You have not selected a label editor yet.
								Please select one below or create a custom editor.</h4>
								<div className="list_lines">
                              <p>Images (object detection) <a href="" className="btn btn-dark" style={{float:'right'}}>Select</a>
                                <strong>Bounding boxes and other vector tools for object detection</strong>
                                </p>

                                 <p>Images (object detection) <a href="" className="btn btn-dark" style={{float:'right'}}>Select</a>
                                <strong>Bounding boxes and other vector tools for object detection</strong>
                                </p>

                                 <a className="btn btn-dark white" href="/#/create-project">Back</a>
               <a className="btn btn-dark" href="#">Complete Setup</a>

                                </div>
                            </div>
                            <div id="list-add2" className="tab-pane fade">

                                <div className="alert alert-warning" role="alert">
                              Your account tier does not include this option. Upgrade
                                                </div>
                           	<div className="row">
                            <div className="col-sm-6">
                            	<form action="#" style={{marginBottom:"30px"}}>
                                      <div className="form-group">

                                        <input type="email" className="form-control" placeholder="Email" id="email"/>
                                      </div>
                                      <div className="form-group">

                                        <input type="text" className="form-control" placeholder="Description" id="pwd"/>
                                      </div>

                                        <div className="form-group">

                                        <input type="text" className="form-control" placeholder="URL to label editor" id="pwd1"/>
                                      </div>

                                      <a href="create-project-2.html" className="btn btn-success">Save</a>
                                    </form>

                                      <a className="btn btn-dark white" href="/#/create-project">Back</a>
               <a className="btn btn-dark" href="#">Complete Setup</a>
                            </div>
                            <div className="col-sm-6">
                            	<div className="adding_data"><h5><i className="fa fa-info-circle" aria-hidden="true"></i> Adding data</h5></div>
                                	<p>If the example templates aren't sufficient for your needs, you can simply build your own custom template with just HTML and javascript.</p>
                                    <p>Read more <a href="#">here.</a></p>
                            </div>
                            </div>

                            </div>

                          </div>
                        </div>
                      </div>
                <div className="col-sm-12">    </div>
        </div>
              </div>

  </div>
</div>
            </div>
        )
    }
}