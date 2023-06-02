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
import Sqlimg from '/Sql.jpg'
import About from '/About.svg'
import About1 from '/About2.jpg'
import About2 from '/About1.jpg'
import Mentor from '/Mentoring.jpg'




import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import Goals from '/Goals.png'
import Contact from './Contact.jsx'
import CourseList from './CourseList.jsx' 

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
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    
    MDBRipple
  } from 'mdb-react-ui-kit';


  
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import Footer from './Footer';



function AJ(){

  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
    
    })
  },[])
    return(
        <>
            <NavBar/>
            <div className="AboutData" style={{width:'90%',display:'flex',margin:'auto',backgroundColor:'white',border:'2px solid white',marginTop:'6%',borderRadius:'20px',padding:'1%'}}>
        <MDBRow>
          <MDBCol md='5'>
        <div className="AboutContent" style={{width:'80%',border:'none',margin:'auto',marginTop:'20%',marginBottom:'4%',textAlign:'left',marginLeft:'15%'}}>
            <h2 style={{color:'rgb(62, 1, 66)',fontWeight:'1000'}}>Come fall in love with Learning,Learn in your comfort zone</h2>
            <Link style={{color:'white'}} to='/CourseList'><button style={{backgroundColor:'blueviolet',color:'white',borderRadius:"10px",paddingLeft:'25%',paddingRight:'25%',marginTop:'3%'}}>Explore</button></Link>
        </div>
        </MDBCol>
        <MDBCol  md='3'>
        <div className="AboutImg1" style={{margin:'auto',marginLeft:'5%',width:'100%',height:'50vh'}}>
            <img style={{width:'80%',height:'100%',borderRadius:'20px'}} src={About1}/>
        </div>
        </MDBCol>
        <MDBCol  md='3'>
        <div className="AboutImg2" style={{width:'100%',height:'60vh',marginTop:'5%'}}>
            <img style={{width:'80%',height:'100%',borderRadius:'20px'}} src={About2}/>
        </div>
        </MDBCol>
        </MDBRow>
      </div>
      <div className="Abtcontent">
            <h2 style={{color:'goldenrod',fontWeight:'300',marginBottom:'3%'}}>Endless Learning</h2>
            <p style={{color:'white'}}>At A&J's, we empower each learner to create a customized development plan based on their unique talents, passions, and goals.We provide best lerning experience at affordable cost with a vision of making this tool available people around every corner of the world.Supported by a curated portfolio of mentoring, on-the-job training, and self-paced learning options — wherever you want to take your career, A&J's can help you get there.</p>
      </div>
      <div className="AbtCards" style={{width:'90%',margin:'auto',marginTop:'5%'}}>
        <MDBRow>
            <MDBCol md='4' >
            <MDBCard id='cardHover'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
       
       <FaChalkboardTeacher style={{color:"pink",fontSize:'200%'}}/>
      
       
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{color:'blueviolet'}}>Mentoring</MDBCardTitle>
        <MDBCardText style={{color:'white'}}>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
            </MDBCol>

            <MDBCol md='4' >
            <MDBCard id='cardHover'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
       
       <FaGraduationCap style={{color:"pink",fontSize:'200%'}}/>
      
       
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{color:'blueviolet'}}>Growth</MDBCardTitle>
        <MDBCardText style={{color:'white'}}>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
            <MDBCard id='cardHover'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
       
       <FaTrophy style={{color:"pink",fontSize:'200%'}}/>
      
       
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{color:'blueviolet'}}>Awards</MDBCardTitle>
        <MDBCardText style={{color:'white'}}>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
            </MDBCol>

            
        </MDBRow>
      </div>
      <Footer/>

        </>
    )
}
export default AJ