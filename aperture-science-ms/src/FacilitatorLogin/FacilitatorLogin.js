//Import the componants:
import React, { Component } from 'react';
import {
    Button,
    Form,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter} from 'reactstrap';
import { Redirect} from 'react-router-dom';

//Import user created componants:
import { Auth } from '../auth';
import global from "../lib/global";

//Import page styles:
import 'bootstrap/dist/css/bootstrap.min.css';
import './FacilitatorLogin.css';

//Import images:
import ApertureScienceLogo from './images/loginBG.png';

//Create the interface:
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      isFacilitator: false,
      modal: false,

      submitHeader: "",
      submitBody: "",

      username: "",
      password: "",
      usernameValid: false,
      passwordValid: false

    };

    //Bind functions for state variable use:
    this.usernameInputChange = this.usernameInputChange.bind(this);
    this.passwordInputChange = this.passwordInputChange.bind(this);
    this.login = this.login.bind(this);
    this.messageToggle = this.messageToggle.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);

  }

  //Set the page title:
  componentDidMount(){
    document.title = "Aperture Science Management System";
  }

  //Toggle the message:
  messageToggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  //Validate the user's username:
  usernameInputChange(event){

    //Define regex for username verification:
    var pattern = /^[A-Za-z0-9]+$/;

    //Check if the userinput matches the pattern:
    if(pattern.test(event.target.value)){

      //Set state for username:
      this.setState({
        username: event.target.value,
        usernameValid: true
      });

    }else{

      //Set username valid to false:
      this.setState({
        usernameValid: false
      });

    }
  }

  //Validate the user's password:
  passwordInputChange(event){

    //Define pattern for password verification:
    var pattern = /^[A-Za-z0-9,.!?:()'" ]+$/;

    //Check if user input matches pattern:
    if(pattern.test(event.target.value)){

      //Set the state for the user's password:
      this.setState({
        password: event.target.value,
        passwordValid: true
      });

    }else{

      //Set password valid to false:
      this.setState({
        passwordValid: false
      });

    }
  }

  //Log the user in:
  login(){

    //Check if both inputs are valid:
    if(this.state.usernameValid && this.state.passwordValid){
      
      //Create data object:
      var data = new FormData();
      data.append('Username', this.state.username);
      data.append('Password', this.state.password);
      
      //Make the request:
      var requestURL = global.state.backendServerAddress + 'login.php';
      this.serverReq(requestURL, this.isLoggedIn, data);

    }else{

      //Display an error message:
      this.setState({
        submitHeader: "Error!",
        submitBody: "Validation Failed. Please try again."
      });
      this.messageToggle();

    }
  }

  //Make a server requrest:
  serverReq(requestURL, callback, data){

    //Create the request:
    fetch(requestURL, {
      method: 'POST',
      body: data,
    }).then(res => res.json())
    .then(obj =>  {
      callback(obj)
    }).catch(err => {
      alert(err);
    });

  }

  //Log the user in:
  isLoggedIn(response){

    //Check if the response is ok:
    if(response.Status === "OK"){
      
      //Add user data to session:
      global.state.facilitator.id = response.id;
      global.state.facilitator.username = response.username;
      global.state.facilitator.password = response.password;

      //Log the user in as a facilitator:
      this.facilitatorLogin();

    }else if(response.Status === 'NO'){

      if(response.Reason === 'IncorrectLogin'){
        //Display an error message:
        this.setState({
          submitHeader: "Error!",
          submitBody: "Login Details are incorrect. Please try again."
        });
        this.messageToggle();
      }else if(response.Reason === 'UnknownError'){
        //Display an error message:
        this.setState({
          submitHeader: "Error!",
          submitBody: "Unknown error has occured. Please try again."
        });
        this.messageToggle();
      }else{
        //Display an error message:
        this.setState({
          submitHeader: "Error!",
          submitBody: "Unknown error has occured. Please try again."
        });
        this.messageToggle();
      }
    }
  }

  //Facilitator Login:
  facilitatorLogin = () => {

    //Authenticate the user:
    Auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
        isFacilitator: true
      }))
    })
    
  }
  
  render() {

    //Prep for facilitator login:
    const { facilitatorDashboard } = this.props.location.state || { facilitatorDashboard: { pathname: '/facilitator/Dashboard' } }
    
     //Setup referrer:
    const { redirectToReferrer } = this.state

    //If the user is a facilitator:
    if(this.state.isFacilitator){

      //If the refer is enabled:
      if (redirectToReferrer === true) {

        //Redirect the user to the facilitator dashboard:
        return <Redirect to={facilitatorDashboard} />

      }
    }

    //Render the interface:
    return (
      <div>

        <Modal isOpen={this.state.modal} toggle={this.messageToggle} className='GenericModal'>
          <ModalHeader toggle={this.messageToggle}>{this.state.submitHeader}</ModalHeader>
          <ModalBody>{this.state.submitBody}</ModalBody>
          <ModalFooter>
            <Button className='GenericModal_btn' color="primary" onClick={this.messageToggle}>OK</Button>{' '}
          </ModalFooter>
        </Modal>

        <div className='LoginContent'>
          <div className='LoginDivision'>
            <img src={ApertureScienceLogo} alt='Aperture Science Logo' />
          </div>
          <div className='LoginDivision'>
            <div className='LoginFormCont'>
              <h3 className='loginHeading'>Facilitator Login</h3>
              <Form className='LoginForm'>
                <Label for='usrEmail' />
                <Input className='loginInput' id='usrEmail' name='usrEmail' placeholder='Facilitator Username' type='text' onChange={this.usernameInputChange.bind(this)} />

                <Label for='usrPassword' />
                <Input className='loginInput' id='usrPassword' name='usrPassword' placeholder='Password' type='password' onChange={this.passwordInputChange.bind(this)} />

                <Button className= 'login_btn' id='btnLogin' value='Login' onClick={this.login.bind(this)}>Login</Button>
              </Form>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default HomeScreen;
