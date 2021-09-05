//Import the componants:
import React, { Component, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button} from 'reactstrap';
import { Redirect} from 'react-router-dom';

//Import user created componants:
import { Auth } from '../auth';

//Import page styles:
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

//Create the interface:
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      GLaDOS: false,
      TestSubject: false,
      modal: false,

      toggle: false,
      isOpen: false,

      submitHeader: "",
      submitBody: "",

      email: "",
      password: "",

      emailValid: false,
      passwordValid: false,

      usrID: "",
      usrFirstname: "",
      usrLastname: "",
      usrEmail: "",
      accountType: "",

    };

    //Bind functions for state variable use:
    this.messageToggle = this.messageToggle.bind(this);

  }

  componentDidMount(){
    
    //Set the page title:
    document.title = "Aperture Science Management System";

  }

  messageToggle() {

    //Toggle the modal componant:
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

  }

  facilitatorLogin = () => {
      this.setState(() => ({
        redirectToReferrer: true,
        GLaDOS: true
      }))
  }

  //Get remaining details from user:
  testSubjectLogin = () => {
      this.setState(() => ({
        redirectToReferrer: true,
        TestSubject: true
      }))
  }
  
  render() {

    //Setup Props:
    const { facilitatorLogin } = this.props.location.state || { facilitatorLogin: { pathname: '/facilitatorLogin' } }                                                
    const { testSubjectLogin } = this.props.location.state || { testSubjectLogin: { pathname: '/testSubjectLogin' } }
    
     //Setup referrer:
    const { redirectToReferrer } = this.state

    //If the user is an admin:
    if(this.state.GLaDOS){

      //If the refer is enabled:
      if (redirectToReferrer === true) {

        //Redirect the user to the admin page:
        return <Redirect to={facilitatorLogin} />

      }

    //If the user needs to provide further details:
    }else if(this.state.TestSubject){

      //If the refer is enabled:
      if (redirectToReferrer === true) {

        //Redirect the user to the details page:
        return <Redirect to={testSubjectLogin} />
        
      }
    }

    //Render the interface:
    return (
      <div className='divContent'>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Aperture Science</NavbarBrand>
          <NavbarToggler onClick={this.state.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Facilitator Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Test Subject Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <div className='MainContent'>
          <div className='division'>

          </div>

          <div className='division'>
            <div className='loginDirections'>
              <div className='homePageHeadingCOnt'>
                <h2 className='homeText'>Welcome! Please Log In.</h2>
              </div>
              <div className='homePageButtonsCont'>
                <Button className='homePageButtons' onClick={this.facilitatorLogin.bind(this)}>I am GLaDOS</Button>
                <h4 className='homeText'> - or - </h4>
                <Button className='homePageButtons' onClick={this.testSubjectLogin.bind(this)}>I am a Test Subject</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
