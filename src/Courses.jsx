import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
import Img7 from '/Arts.jpg'

import FrontData from './FrontData.jsx'
import NavBar from './NavBar'
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

  import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
  import {Link} from 'react-router-dom'

function Courses(){
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    
    return(
        <>
        <div id='Courses' className="gd-carousel-wrapper" style={{height:'fit-content',width:'80%',margin:'auto',marginTop:'5%'}}>
    <Carousel
      responsive={responsive}
      //autoPlay={true}
      className="gd-carousel"
      
    >

    <div className='course3' >
      <p><b>Web Development</b></p>
      <Link to='/WebDev'><button>Start now</button></Link>
      </div>
    
      <div  className='course1'>
      <p><b>Learn Automation</b></p>
      <button>Start now</button>
      <h5>COMING SOON</h5>
      </div>

      <div  className='course2'>
      <p><b>SQL for Beginners</b></p>
      <button>Start now</button>
      <h5>COMING SOON</h5>
      
      </div>

      <div  className='course4'>
      <p><b>Learn Manual Testing</b></p>
      <button>Start now</button>
      <h5>COMING SOON</h5>
      </div>

      <div  className='course5'>
      <p><b>Shine in Communication</b></p>
      <button >Start now</button>
      <h5>COMING SOON</h5>
      </div>
      
   
    </Carousel>
 </div>

    </>
    )
}

export default Courses