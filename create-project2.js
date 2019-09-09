import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import {Redirect} from 'react-router-dom';
export default class Create_project_2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Industry: '',
            Company:'',
            Purpose:'',
            Details:'',
            redirect:false,
            file:[],
        }
        this.redirectToCreateProject3=this.redirectToCreateProject3.bind(this);
        this.handelFileChange=this.handelFileChange.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    handelFileChange(){
        this.setState({
      file: event.target.value
    })}

    componentDidMount(){
      this.setState({Name: this.props.location.state['Name'],Industry: this.props.location.state['Industry'],
          Company: this.props.location.state['Company'],Purpose:this.props.location.state['Purpose'],
          Details:this.props.location.state['Details']});
  }
  handleProjectSubmit=()=>{
        this.setState({redirect:true});
        console.log('gggg',this.state);
  }
  goBack(){
    this.props.history.goBack();
}

  redirectToCreateProject3(){
        if (this.state.redirect===true){
            return(
                <Redirect
                to={{
                    pathname:'/create-project3',
                    state:this.state
            }}
                />
            )
        }

    }

    render() {
        return(<div>
            {this.redirectToCreateProject3()}
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

    <div className="form_box">
        <div className="main_top">
    <ul className="nav nav-tabs">
      
      <li><a data-toggle="tab" href="#menu2" className="active">Performance</a></li>
      <li><a data-toggle="tab" href="#menu3">Settings</a></li>
    </ul>
    <div className="tab-content over-viewcont">
      <div className="over_view">
        
      </div>
      
      
      <div id="menu2" className="tab-pane fade in active">
        <div className="row">
          <div className="col-sm-12">
            <div className="table_grid">
            
            	<h3>Datasets</h3>
                <hr />
                <p>You have not added a dataset yet. Please select one below or upload a new dataset.</p>
              <table className="table table-bordered bg-dark">
                
                <tbody>
                  <tr>
                    <td>sample</td>
                    <td>1 row</td>
                    <td>4 days ago</td>
                    <td>
                    	
                        	
                            <a href="#" className="btn btn-dark">Attach</a>
                       
                    </td>
                   
                  </tr>
                 <tr>
                    <td>sample</td>
                    <td>1 row</td>
                    <td>4 days ago</td>
                    <td>
                    	
                        	
                            <a href="#" className="btn btn-dark">Attach</a>
                       
                    </td>
                   
                  </tr>
                  
                 <tr>
                    <td>sample</td>
                    <td>1 row</td>
                    <td>4 days ago</td>
                    <td>
                    	
                        	
                            <a href="#" className="btn btn-dark">Attach</a>
                       
                    </td>
                   
                  </tr>
                  
                </tbody>
              </table>
              
              <a className="btn btn-dark white" href="/#/create-project">Back</a>
               <a className="btn btn-dark" onClick={this.handleProjectSubmit}>Next</a>
            </div>
          </div>
        </div>
      </div>
      <div id="menu3" className="tab-pane fade">
        <div className="row">
          <div className="col-sm-6">
                	<div className="browse_box">
                        <form className="uploader" encType="multipart/form-data">
                    	<input type="file" accept="" multiple style={{opacity: '0', width: '100%', height: '100%', position: 'absolute', cursor: 'pointer'}}
                    	value={this.state.file} onChange={this.handelFileChange}/>
                        <div className="browswe_text">
                        		<span><i className="fa fa-download" aria-hidden="true"></i></span>
                                <div className="sc-hwwEjo jkdGtr"><p>Drop files here to upload</p><p><em>- or -</em></p><p>Drop a CSV or JSON file containing URLs to your data</p></div>
                                <button className="btn btn-primary" type="button">choose files to upload</button>
                        </div>
                        </form>
                    </div>
                </div>
                
           <div className="col-sm-6">
                
                		<div className="side_bar">
                        
                        	<div className="adding_data"><h5><i className="fa fa-info-circle" aria-hidden="true"></i> Adding data</h5></div>
                        
                        		<ul className="nav nav-tabs">
                              <li className="active"><a data-toggle="tab" href="#list-add1">Local</a></li>
                              <li><a data-toggle="tab" href="#list-add2">Cloud</a></li>
                              <li><a data-toggle="tab" href="#list-add3">On Primise</a></li>
                            </ul>
                            
                            <div className="tab-content">
                              <div id="list-add1" className="tab-pane fade in active">
                                <h4>Select all the files you would like to upload.</h4>
                                <p>Some content.</p>
                              </div>
                              <div id="list-add2" className="tab-pane fade">
                                <h4>Create a JSON file containing the data URLs. For example, here is a JSON snippet for importing data hosted in Google Storage:</h4>
                                <p>Some content in menu 1.</p>
                              </div>
                              <div id="list-add3" className="tab-pane fade">
                                <h4>Labelbox provides the ability to keep all data on premise. If you opt into this option, data will never be shared or stored with Labelbox servers.</h4>
                                <p>Some content in menu 2.</p>
                              </div>
								</div>
                            
                         
                            
                        </div>
                    
                </div>  
                
                <div className="col-sm-12">     <a className="btn btn-dark white" href="/#/create-project">Back</a>
               <a className="btn btn-dark" onClick={this.handleProjectSubmit}>Next</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
    </div>)
    }
}