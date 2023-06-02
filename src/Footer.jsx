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



import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import Goals from '/Goals.png'

import { Container } from 'react-bootstrap';
  
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
  
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer(){

    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)
  
    const hideShowDiv1 = (e) => {
      setIsActive3(current => !current)
  
    }
    
    const hideShowDiv2 = (e) => {
      setIsActive4(current => !current)
    }
  
    const hideShowDiv3 = (e) => {
      setIsActive5(current => !current)
    }

    return(
        <>
        <MDBFooter className='mydiv text-white' style={{backgroundColor: '#02151c',marginTop:'5%'}}>
        <div className='text-left p-3' style={{ backgroundColor: '#02151c',textAlign:'left' }}>
           Start of your Learning journey with <Link style={{color:'violet'}} to='/'>
              A&J's
           </Link>
         </div>
         <MDBContainer className='p-4 pb-2'>
           <section className='mb-4'>
             

               <FaFacebookF id='fb'/>
             
               
             
   
            
               <FaTwitter id='fb' style={{backgroundColor:'#0e99d0'}}/>
             
   
             
               <FaGoogle id='fb'  style={{backgroundColor:'#ee1031'}}/>
             
            
               <FaInstagram id='fb'  style={{backgroundColor:'#82047a'}}/>
             
             
               <FaLinkedinIn id='fb'  style={{backgroundColor:'#06338e'}}/>
            
   
            
               <FaGithub id='fb'  style={{backgroundColor:'#232730'}}/>
            
           </section>
         </MDBContainer>
   
         
       </MDBFooter>

        

        </>
    )
}
export default Footer