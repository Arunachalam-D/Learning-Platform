import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Courses from './Courses.jsx'
import FrontData from './FrontData.jsx'
import Signin from './Sign-in.jsx'
import Login from './Login.jsx'
import NavBar from './NavBar'
import Home from './Home.jsx'
import WebDev from './WebDevelopment.jsx'
import Sqlimg from '/Sql.webp'
import webDev from '/webDev.webp'
import automation from '/automation.png'
import Testing from '/Testing.png'
import Communicate from '/Communication.webp'



import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import Goals from '/Goals.png'
import Contact from './Contact.jsx'

import { Container } from 'react-bootstrap';
  
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,

} from 'mdb-react-ui-kit';
  
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from './Footer';

function CourseList(){

    useEffect(()=>{

      window.scrollTo({
        top:0,
        left:0,

      })
    },[])

    const upComing = () =>{
      alert("we are working on this course and it will be released soon !!!")
    }

    return(
        <>
            <NavBar/>
            <div className="courseList2" >
      <div className="c1">
      <MDBRow style={{marginLeft:'0',borderBottom:'1px solid gray',margin:'2%'}}>

        <MDBCol md='3'>
          <div className="Sqlimg" >

            <img src={webDev} id='img2'/>
          </div>
        </MDBCol>
        
        <MDBCol md='9'>
          <div className="courseContent">
            <h4>Web Development</h4>
            <p>Sql starter kit.This is designed to give you a real world experience of how sql works.</p>
            <p>duration : 8 weeks</p>
            <Link to='/WebDev' style={{color:'white'}}><button>Start</button></Link>
            </div>
        </MDBCol>

      </MDBRow>
      </div>
      <div className="c2">
              <MDBRow style={{marginLeft:'0',borderBottom:'1px solid gray',margin:'2%'}}>

        <MDBCol md='3'>
          <div className="Sqlimg" >

            <img src={automation} id='img2'/>
          </div>
        </MDBCol>
        
        <MDBCol md='9'>
          <div className="courseContent">
            <h4>Learn Automation</h4>
            <p>Sql starter kit.This is designed to give you a real world experience of how sql works.</p>
            <p>duration : 8 weeks</p>
            <button onClick={upComing}>Start</button>
            </div>
        </MDBCol>

      </MDBRow>
      </div>

      <div className="c3">
              <MDBRow style={{marginLeft:'0',borderBottom:'1px solid gray',margin:'2%'}}>

        <MDBCol md='3'>
          <div className="Sqlimg" >

            <img src={Sqlimg} id='img2'/>
          </div>
        </MDBCol>
        
        <MDBCol md='9'>
          <div className="courseContent">
            <h4>SQL for Beginners</h4>
            <p>Sql starter kit.This is designed to give you a real world experience of how sql works.</p>
            <p>duration : 8 weeks</p>
            <button onClick={upComing}>Start</button>
            </div>
        </MDBCol>

      </MDBRow>
      </div>

      <div className="c4">
              <MDBRow style={{marginLeft:'0',borderBottom:'1px solid gray',margin:'2%'}}>

        <MDBCol md='3'>
          <div className="Sqlimg" >

            <img src={Testing} id='img2'/>
          </div>
        </MDBCol>
        
        <MDBCol md='9'>
          <div className="courseContent">
            <h4>Learn Manual Testing</h4>
            <p>Sql starter kit.This is designed to give you a real world experience of how sql works.</p>
            <p>duration : 8 weeks</p>
            <button onClick={upComing}>Start</button>
            </div>
        </MDBCol>

      </MDBRow>
      </div>
      <div className="c5">
              <MDBRow style={{marginLeft:'0',borderBottom:'1px solid gray',margin:'2%'}}>

        <MDBCol md='3'>
          <div className="Sqlimg" >

            <img src={Communicate} id='img2'/>
          </div>
        </MDBCol>
        
        <MDBCol md='9'>
          <div className="courseContent">
            <h4>Shine in Communication</h4>
            <p>Sql starter kit.This is designed to give you a real world experience of how sql works.</p>
            <p>duration : 8 weeks</p>
            <button onClick={upComing}>Start</button>
            </div>
        </MDBCol>

      </MDBRow>
      </div>
      

     </div>
     <Footer/>
        </>
    )
}
export default CourseList