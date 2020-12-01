import React,{useState } from "react";


//import images
import Logos from '../../components/images/logoz.png';


//import css
import '../../components/Style/landing.css';

//import component
import {Col, Row} from 'react-bootstrap';
import LandingButton from '../../components/Button/LandingButton'
import LandingTitle from '../../components/Landing/LandingTitle'

function Landing() {

    return(
      <div style={{paddingLeft:'10%'}}>
 
              <img src={Logos} style={{paddingBottom:'20%'}} />
              <LandingTitle
              titles="source"
              span="of"
              titled="intelligence"
              content="
              Sign-up and receive unlimited accesss to all of your literatur - share your literature."
              />
              <LandingButton/>
        
      </div>
      
      
    );
}

export default Landing;

