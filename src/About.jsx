import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Img1 from '/Img1.svg'
import Img2 from '/Logo4.webp'
import Img3 from '/Img2.png'
import Img4 from '/Logo3.jpg'
import Img5 from '/course1.jpg'
import Img6 from '/Course1.svg'
import Carousel from "react-multi-carousel";
import { MDBRow, MDBCol, MDBCarousel,
  MDBCarouselItem } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBCardImage
  } from 'mdb-react-ui-kit';
import {
    MDBCardBody,
    MDBCardHeader
  } from 'mdb-react-ui-kit';


import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Courses from './Courses.jsx'
import FrontData from './FrontData.jsx'
import Signin from './Sign-in.jsx'
import Login from './Login.jsx'
import NavBar from './NavBar'
import Home from './Home.jsx'



import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import Goals from '/Goals.png'


function About(){
    return(
        <div id='About' className='goals' style={{display:'flex',height:'100%',width:'80%',margin:'auto',marginTop:'5%'}}>
     <MDBRow style={{width:'100%',height:'max-content'}}>
      <MDBCol md='7'>
        <div className="GoalPic">

        <img src={Goals} style={{height:'40vh'}}/>
        </div>
      </MDBCol>
      <MDBCol md='5'  >
        <div className="GoalData" style={{color:'white',marginTop:'10%'}}>       
        
         <h4 style={{fontStyle:'italic',color:'gold'}}>"Every Master is once a beginner"</h4>
        <h5>With right guidance and practice anyone can master the art of programming and become a great programmer who make wonders. We believe A&J's would be the right place to start of the learning journey</h5>
        </div>

        </MDBCol>
        </MDBRow>
     </div>
    )
}

export default About