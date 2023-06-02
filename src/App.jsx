// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Img1 from '/Img1.svg'
// import Img2 from '/Logo4.webp'
// import Img3 from '/Img2.png'
// import Img4 from '/Logo3.jpg'
// import Img5 from '/course1.jpg'
// import Img6 from '/Course1.svg'
// import Carousel from "react-multi-carousel";
// import { MDBRow, MDBCol, MDBCarousel,
//   MDBCarouselItem } from 'mdb-react-ui-kit';
// import {
//     MDBCard,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardOverlay,
//     MDBCardImage
//   } from 'mdb-react-ui-kit';
// import {
//     MDBCardBody,
//     MDBCardHeader
//   } from 'mdb-react-ui-kit';


// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useEffect, useState } from 'react'
// import Courses from './Courses.jsx'
// import FrontData from './FrontData.jsx'
// import NavBar from './NavBar'
// import Sqlimg from '/Sql.jpg'
// import About from '/About.svg'
// import About1 from '/About2.jpg'
// import About2 from '/About1.jpg'
// import axios from 'axios';
// import Goals from '/Goals.png'
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,

// } from 'mdb-react-ui-kit';
// import { Container } from 'react-bootstrap';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signin from './Sign-in.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import WebDev from './WebDevelopment.jsx'
import "react-multi-carousel/lib/styles.css";
import Contact from './Contact.jsx'
import CourseList from './CourseList.jsx'
import AJ from './A&J.jsx' 

function App() {

return (
    <>
     
      {/* <Home/> */}
      <BrowserRouter>
     <Routes>
     <Route path='' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/WebDev' element={<WebDev/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/CourseList' element={<CourseList/>}/>
      <Route path='/AJ' element={<AJ/>}/>
     </Routes>
     </BrowserRouter>
          </>
  )
}

export default App


