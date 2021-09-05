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


//Import page styles:
import 'bootstrap/dist/css/bootstrap.min.css';
import './TestSubjectDetails.css';

//Create the interface:
class TestSubjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      

    };

    //Bind functions for state variable use:
    

  }
  
  render() {

    //Render the interface:
    return (
      <div>

        <div className='article'>
          1
        </div>
        <div className='article'>
          2
        </div>
        <div className='article'>
          3
        </div>
        <div className='article'>
          4
        </div>
        <div className='article'>
          5
        </div>

      </div>
    );
  }
}

export default TestSubjectDetails;
