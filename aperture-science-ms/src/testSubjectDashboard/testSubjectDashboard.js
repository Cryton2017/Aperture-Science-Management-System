import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card, 
  CardText, 
  CardBody,
  CardTitle, 
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter} from 'reactstrap';
import global from "../lib/global";

import 'bootstrap/dist/css/bootstrap.min.css';
import './testSubjectDashboard.css';

//Import images:
import ApertureLogo from './images/Aperture.png';

//Import page content:
import TestSubjectPastQuestionares from './TestSubjectPastQuestionares/TestSubjectPastQuestionares';

class facilitatorDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

      redirectToReferrer: false,

      modal: false,
      PAHeading : "",
      PABody: "",

      TestSubjectHistoricData: 'testSubjectActiveNavBTN',
      TestSubjectNewQuestionare: 'testSubjectnavBTN',

      testSubjectDashCont: [<TestSubjectPastQuestionares />]

    };

    this.toggleModal = this.toggleModal.bind(this);
    this.changeDashScreen = this.changeDashScreen.bind(this);

  }

  componentDidMount(){
    document.title = "Aperture Science Management System - Test Subject Dashboard";
  }
  toggleModal(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeDashScreen = (selection) => {
    var tmpTestSubjectDashCont = [];

    if(selection === 'TestSubjectHistoricData'){
      tmpTestSubjectDashCont.pop();
      tmpTestSubjectDashCont.push(
        <TestSubjectPastQuestionares />
      );
      this.setState({
        TestSubjectHistoricData: 'testSubjectActiveNavBTN',
        TestSubjectNewQuestionare: 'testSubjectnavBTN'
      });
    }else if(selection === 'TestSubjectNewQuestionareNavBTN'){
      tmpTestSubjectDashCont.pop();
      tmpTestSubjectDashCont.push(
        // <TestSubjectNewQuestionare />
      );
      this.setState({
        TestSubjectHistoricData: 'testSubjectnavBTN',
        TestSubjectNewQuestionare: 'testSubjectActiveNavBTN',
      });
    }

    this.setState({
      testSubjectDashCont: tmpTestSubjectDashCont
    });
  }

  render() {

    return (
      <div className='testSubjectDashPageContent'>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className='LoginModal'>
          <ModalHeader toggle={this.toggleModal}>{this.state.PAHeading}</ModalHeader>
          <ModalBody>{this.state.PABody}</ModalBody>
          <ModalFooter>
            <Button className='btnModal' color="primary" onClick={this.toggleModal}>OK</Button>
          </ModalFooter>
        </Modal>

        <div className='testSubjectDashNavigation'>
          <div className='testSubjectDashNavLogo'>
            <img src={ApertureLogo} width={250} alt='Aperture Science Logo' />
          </div>
          <NavLink onClick={this.changeDashScreen.bind(this, "TestSubjectHistoricData")} className={this.state.TestSubjectHistoricData}>Past Questionaire</NavLink>
          <NavLink onClick={this.changeDashScreen.bind(this, "TestSubjectNewQuestionareNavBTN")} className={this.state.TestSubjectNewQuestionare}>Submit New Questionaire</NavLink>
        </div>

        <div className='testSubjectDashMainPage'>
          <div className='testSubjectAccountControls'>
            <div className='accountDropdown'>
              Welcome Back!
            </div>
          </div>
  
          <div className='adminDashContent'>
            {this.state.testSubjectDashCont}
          </div>

        </div>

      </div>
    );
  }
}

export default facilitatorDashboard;
