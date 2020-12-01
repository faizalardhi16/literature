import React from 'react'
import { Col, Row } from 'react-bootstrap'

import '../../components/Style/landing.css';

import Left from './Left'
import Right from './Right'

function Landing() {

  
    return (
        <div >
            <div class="contain">
                <Row >
                    <Col sm={6}>
                        <Left/>
                    </Col>

                    <Col sm={6}>
                        <Right/>
                    </Col>
                </Row>
            </div>

        </div>    
    );
  }
  
  export default Landing;
  