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
import Logo from '/LogoNew.jpg'
import Courses from './Courses.jsx'
import FrontData from './FrontData.jsx'
import { MDBRow, MDBCol, MDBCarousel,
  MDBCarouselItem } from 'mdb-react-ui-kit';
  import {Link} from 'react-router-dom'
  import AnchorLink from "react-anchor-link-smooth-scroll";
  import Login from './Login.jsx'

function NavBar(){

  

    return(
        <Navbar fixed="top" style={{backgroundColor:'#001c26',paddingLeft:'5%',paddingRight:'5%',paddingTop:'2%'}} expand="lg">
          {/* <Link to='/Login'>Login</Link> */}
      <Container  fluid>
        <Navbar.Brand href="#" style={{color:'white'}}>A&J's</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:'white'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',width:'60%' }}
            navbarScroll
          >
           <Form className="d-flex" id='input1'>
            {/* <Form.Control 
              type="search"
              placeholder="Search"
              style={{borderRadius:'25px'}}
              aria-label="Search"
            /> */}
            
            
            
          </Form> 
          </Nav>
          
          
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link><Link to='/' id='navElements'>Home</Link></Nav.Link>
            <Nav.Link href="#action1" ><Link id='navElements' to='/CourseList'>Courses</Link></Nav.Link>
            
            <Nav.Link href="#action1" ><Link id='navElements'   to='/AJ' >About</Link></Nav.Link>
            <Nav.Link href="#action1"><Link id='navElements' to='/Contact'>Contact</Link></Nav.Link>
            <Link to='/Login'><Nav.Link href="#action1" style={{color:'gold'}} >Login</Nav.Link></Link>
            
    
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavBar