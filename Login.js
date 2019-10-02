import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  Redirect
} from "react-router-dom";
import Cookies from 'js-cookie';

var md4 = require('js-md4');
export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      username:'',
      password: '',
      firstName:'',
      lastName:'',
      email: '',
      phoneNumber:'',
      redirect: false,
      showMessage: false,
      responseData:'',
      errors:{},
    }
    this.redirectToView = this.redirectToView.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleForgotPassword = this.handleForgotPassword.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
  }
  handleUserNameChange (event){
    this.setState({username: event.target.value});
  }

  handleEmailChange (event){
    this.setState({email: event.target.value});
  }

  handlePasswordChange (event){
    this.setState({password: event.target.value})
  }

  handleFirstNameChange (event){
    this.setState({firstName: event.target.value})
  }

  handleLastNameChange(event){
    this.setState({lastName: event.target.value})
  }
  handlePhoneNumberChange(event){
    this.setState({phoneNumber: event.target.value})
  }

  handleLoginSubmit(){
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFToken"
   var csrftoken = Cookies.get('csrftoken');
    var data = {
              'username': this.state.username,
              'password':md4(this.state.password)};

    const conf = {
      method: "post",
      url: 'api/users/_login/',
      headers: {"X-CSRFToken":csrftoken},
      data: JSON.stringify(data),
    };
    axios(conf).then(response => {console.log('Response',response)
    if(response.data===undefined || response.data['id']===undefined||response.data['id']===null){

      this.setState({
        showMessage:true
      })
      
    }
    else{
      this.setState({
        email: response.data['email'],
        userId: response.data['id']
      })
      this.redirectToView();
    } 
    }
    );
  }

  handleForgotPassword(){
    const conf = {
      method: "post",
      url: 'api/users/rest-auth/password/change/',
      data: JSON.stringify(),
    };
    axios(conf).then(response => console.log(response));
  }

  handleRegisterSubmit(){
    if(this.handleValidation()){
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFToken"
   var csrftoken = Cookies.get('csrftoken');
    var data = {
    "user": {"username":this.state.username,
    		"password":md4(this.state.password),
    		"first_name":this.state.firstName,
    		"last_name":this.state.lastName,
    		"email":this.state.email
    		}
        ,
      "User_Type": 0,
    "PhoneNumber":this.state.phoneNumber
    };
    const conf = {
      method: "post",
      url: 'api/users/_register/',
      headers: {"X-CSRFToken":csrftoken},
      data: data,
    };
    axios(conf).then((response)=>{console.log('Response',response);
      if(response['status']===201){
        console.log(response['statusText'])
        alert(response['statusText'])
        location.href='/#/'
        
      }
  })
  .catch(error => {var ERROR=error.response['data'];
                  var ERRORuser=ERROR['user'];
                  var usernameERROR=ERRORuser['username'];
                  var emailERROR=ERRORuser['email'];
                  if(usernameERROR && emailERROR){
                    alert(usernameERROR[0]+emailERROR[0])
                    location.href='/#/'
                  }
                  if (usernameERROR && emailERROR===undefined){
                    console.log('nameerroe',usernameERROR[0]);
                    alert(usernameERROR[0])
                    location.href='/#/'
                  }
                  if(emailERROR && usernameERROR===undefined){
                    console.log('nameerroe',emailERROR[0]);
                    alert(emailERROR[0])
                    location.href='/#/'
                  }

  })}
  else{
    alert("Form has errors.")}
}
  

  redirectToView(){
      this.props.history.replace(this.state);
      this.props.history.push({
        pathname: '/view',
        state: this.state
      })
  }
  handleValidation(){
    let state=this.state
    let errors = {};
    let formIsValid = true;
    let lastAtPos = state.email.lastIndexOf('@');
    let lastDotPos = state.email.lastIndexOf('.');
    // username
    if(!state.username.match(/^[a-zA-Z]{4,}$/)){
      formIsValid = false;
      errors["username"] = "Cannot be less than four letters";
    }
    if(!state.username){
      formIsValid = false;
      errors["username"] = "Cannot be empty";
    }
    //email
    if(!state.email){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && state.email.indexOf('@@') == -1 && lastDotPos > 2 && (state.email.length - lastDotPos) > 2)) {
      formIsValid = false;
      errors["email"] = "Email is not valid";}
    //password
    if(!state.password){
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }
    if(!state.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/)){
      formIsValid = false;
      errors["password"] = "Password should contain at least 1 lowercase alphabet,1 uppercase alphabet,1 numeric character"+
      ",1 special character,string must be eight characters ";
    }
    //firstName
    if(!state.firstName){
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    }
    //lastName
    if(!state.lastName){
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    }
    //phonNumber
    if(!state.phoneNumber){
      formIsValid = false;
      errors["phonNumber"] = "Cannot be empty";
    }
    if(!state.phoneNumber.match(/^\d{10}$/)){
      formIsValid = false;
      errors["phoneNumber"] = "phone number is not valid";
    }
    this.setState({errors: errors});
       return formIsValid;
  }
  render () {
    return (
      <div>
        <div className="container login-container">
            <div className="row">
                <div className="col-md-12 login-form-1">
                    <div className="login_logo">
                    <a ><img src="/static/images/logo.png" alt="" /></a>
                    	</div>
                    <ul className="nav nav-tabs">
                      <li ><a data-toggle="tab" href="#home" className="active">Login</a></li>
                      <li><a data-toggle="tab" href="#menu1">Sign Up</a></li>
                    </ul>
                    <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                    <form className="login_boxform" onSubmit={this.handleLoginSubmit}>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="User Name" value={this.state.username} onChange={this.handleUserNameChange} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="password" placeholder="Your Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btnSubmit" value="LOGIN" />
                    </div>
                    <div className="form-group">
                      <div className="ForgetPwd" value="Login">{this.state.showMessage? 'Wrong Details': ''}</div>
                    </div>
                    </form>
                    <form className="forget_pass" onSubmit={this.handleForgotPassword}>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Email" value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btnSubmit" value="Send Email"/>
                    </div>
                  </form>                 
  </div>
  <div id="menu1" className="tab-pane fade">
  <form onSubmit={this.handleRegisterSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="User Name" value={this.state.username} onChange={this.handleUserNameChange}/>
                      <span style={{color: "red"}}>{this.state.errors["username"]}</span>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Email" value={this.state.email} onChange={this.handleEmailChange}/>
                      <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Your Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                      <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="First Name" value={this.state.firstName}
                             onChange={this.handleFirstNameChange} />
                             <span style={{color: "red"}}>{this.state.errors["firstName"]}</span>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName}
                             onChange={this.handleLastNameChange} />
                             <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Phone Number" value={this.state.phoneNumber}
                             onChange={this.handlePhoneNumberChange} />
                             <span style={{color: "red"}}>{this.state.errors["phoneNumber"]}</span>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btnSubmit" value="SIGNUP" />
                    </div>
                  </form>                 
  </div>
  
</div>    
                        
                </div>
                
            </div>
        </div>
      </div>
    )
  }
}