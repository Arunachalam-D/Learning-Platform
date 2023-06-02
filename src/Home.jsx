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
import Motto from './Motto.jsx'
import Footer from './Footer'


import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import About from './About';

function Home(){

    return(
        <>
      <NavBar/>
      <FrontData/>
      <About/>
      <Courses/>
      <Motto/>
      <Footer/>
        </>
    )
}
export default Home