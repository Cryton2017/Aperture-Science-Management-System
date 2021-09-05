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
import './facilitatorDashboard.css';

//Import images:
import ApertureLogo from './images/Aperture.png';

//Import page content:
import TestSubjectDetails from './TestSubjectDetails/TestSubjectDetails';

class facilitatorDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

      redirectToReferrer: false,

      modal: false,
      PAHeading : "",
      PABody: "",

      TestSubjectDetailsActive: 'facilitatorDashActiveNavBTN',
      editQuestionnaireActive: 'facilitatorDashNavBTN',

      facilitatorDashCont: [<TestSubjectDetails />]

    };

    this.toggleModal = this.toggleModal.bind(this);
    this.changeDashScreen = this.changeDashScreen.bind(this);

  }

  componentDidMount(){
    document.title = "Kashy Internal Operations - Dashboard";
  }
  toggleModal(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeDashScreen = (selection) => {
    var tmpFacilitatorDashCont = [];

    if(selection === 'TestSubjectDetails'){
      tmpFacilitatorDashCont.pop();
      tmpFacilitatorDashCont.push(
        <TestSubjectDetails />
      );
      this.setState({
        TestSubjectDetailsActive: 'facilitatorDashActiveNavBTN',
        editQuestionnaireActive: 'facilitatorDashNavBTN'
      });
    }else if(selection === 'editQuestionnaire'){
      tmpFacilitatorDashCont.pop();
      tmpFacilitatorDashCont.push(
        // <editQuestionnaire />
      );
      this.setState({
        TestSubjectDetailsActive: 'facilitatorDashNavBTN',
        editQuestionnaireActive: 'facilitatorDashActiveNavBTN',
      });
    }

    this.setState({
      facilitatorDashCont: tmpFacilitatorDashCont
    });
  }

  render() {

    return (
      <div className='facilitatorDashPageContent'>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className='LoginModal'>
          <ModalHeader toggle={this.toggleModal}>{this.state.PAHeading}</ModalHeader>
          <ModalBody>{this.state.PABody}</ModalBody>
          <ModalFooter>
            <Button className='btnModal' color="primary" onClick={this.toggleModal}>OK</Button>
          </ModalFooter>
        </Modal>

        <div className='facilitatorDashNavigation'>
          <div className='facilitatorDashNavLogo'>
            <img src={ApertureLogo} width={250} alt='Aperture Science Logo' />
          </div>
          <NavLink onClick={this.changeDashScreen.bind(this, "TestSubjectDetails")} className={this.state.TestSubjectDetailsActive}>Test Subject Details</NavLink>
          <NavLink onClick={this.changeDashScreen.bind(this, "editQuestionnaire")} className={this.state.editQuestionnaireActive}>Edit Questionaire</NavLink>
        </div>

        <div className='facilitatorDashMainPage'>
          <div className='facilitatorAccountControls'>
            <div className='accountDropdown'>
              Welcome Back <strong>{global.state.facilitator.username}</strong>
            </div>
          </div>
  
          <div className='adminDashContent'>
            {this.state.dashCont}
          </div>

        </div>

      </div>
    );
  }
}

export default facilitatorDashboard;
