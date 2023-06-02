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


import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Courses from './Courses.jsx'
import FrontData from './FrontData.jsx'
import Signin from './Sign-in.jsx'
import Login from './Login.jsx'
import NavBar from './NavBar'
import Home from './Home.jsx'
import Footer from './Footer'
import { FaCheckCircle } from "react-icons/fa";


import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import Goals from '/Goals.png'
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

function WebDev(){

    useEffect(()=>{
      window.scrollTo({
        top:0,
        left:0,
      
      })
    },[])

    const greenDiv = () => {

        setColor("green");
     
      
    }
    const [tickState,setTickState] = useState("hidden")
    const [tickState2,setTickState2] = useState("hidden")
    const [tickState3,setTickState3] = useState("hidden")
    const [tickState4,setTickState4] = useState("hidden")
    const [tickState5,setTickState5] = useState("hidden")
    const [tickState6,setTickState6] = useState("hidden")

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(1)
    const [count3,setCount3] = useState(1)
    const [count4,setCount4] = useState(1)
    const [count5,setCount5] = useState(1)
    const [count6,setCount6] = useState(1)

    const [color1,setColor1] = useState("transparent")
    const [color2,setColor2] = useState("transparent")
    const [color3,setColor3] = useState("transparent")
    const [color4,setColor4] = useState("transparent")
    const [color5,setColor5] = useState("transparent")
    const [color6,setColor6] = useState("transparent")
    const [color7,setColor7] = useState("transparent")
    const [color8,setColor8] = useState("transparent")
    const [color9,setColor9] = useState("transparent")
    const [color10,setColor10] = useState("transparent")
    const [color11,setColor11] = useState("transparent")

    const [colortxt1,setTxtColor1] = useState("white")
    const [colortxt2,setTxtColor2] = useState("white")
    const [colortxt3,setTxtColor3] = useState("white")
    const [colortxt4,setTxtColor4] = useState("white")
    const [colortxt5,setTxtColor5] = useState("white")
    const [colortxt6,setTxtColor6] = useState("white")
    const [colortxt7,setTxtColor7] = useState("white")
    const [colortxt8,setTxtColor8] = useState("white")
    const [colortxt9,setTxtColor9] = useState("white")
    const [colortxt10,setTxtColor10] = useState("white")
    const [colortxt11,setTxtColor11] = useState("white")

    const invoke1= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/xGmIl7QbBiA"
      setColor1("rgb(135, 242, 125)")
      setTxtColor1("rgb(2, 52, 63)")
      setCount(count+1)

    }
    const invoke2= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/WG5ikvJ2TKA"
      setColor2("rgb(135, 242, 125)")
      setTxtColor2("rgb(2, 52, 63)")
      setCount(count+1)
    }
    const invoke3= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/XBu54nfzxAQ"
      setColor3("rgb(135, 242, 125)")
      setTxtColor3("rgb(2, 52, 63)")
      setCount(count+1)
    }
    const invoke4= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/Vblvb_s12zM"
      setColor4("rgb(135, 242, 125)")
      setTxtColor4("rgb(2, 52, 63)")
      setCount(count+1)
    }
    const invoke5= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/5YDVJaItmaY"
      setColor5("rgb(135, 242, 125)")
      setTxtColor5("rgb(2, 52, 63)")
      setCount(count+1)
      
      if(count >= 4){
        setTickState("visible")
      }

        
      
    }
    const invoke6= () =>{
      document.getElementById('video').src = " https://www.youtube.com/embed/ph65TPiNmKo"
      setColor6("rgb(135, 242, 125)")
      setTxtColor6("rgb(2, 52, 63)")
      setCount2(count2 + 1)
      if(count2 >= 1){
        setTickState2("visible")
      }
    }
    const invoke7= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/MDLn5-zSQQI"
      setColor7("rgb(135, 242, 125)")
      setTxtColor7("rgb(2, 52, 63)")
      setCount3(count3 + 1)
    }
    const invoke8= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/qz0aGYrrlhU"
      setColor8("rgb(135, 242, 125)")
      setTxtColor8("rgb(2, 52, 63)")
      setCount3(count3 + 1)
      if(count3 >= 2){
        setTickState3("visible")
      }
    }
    const invoke9= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/yfoY53QXEnI"
      setColor9("rgb(135, 242, 125)")
      setTxtColor9("rgb(2, 52, 63)")
      setCount4(count4 + 1)
      if(count4 >= 1){
        setTickState4("visible")
      }
    }
    const invoke10= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/oNSX21dh6kw"
      setColor10("rgb(135, 242, 125)")
      setTxtColor10("rgb(2, 52, 63)")
      setCount5(count5 + 1)
      if(count5 >= 1){
        setTickState5("visible")
      }
    }
    const invoke11= () =>{
      document.getElementById('video').src = "https://www.youtube.com/embed/JJSoEo8JSnc"
      setColor11("rgb(135, 242, 125)")
      setTxtColor11("rgb(2, 52, 63)")
      setCount6(count6 + 1)
      if(count6 >= 1){
        setTickState6("visible")
      }
    }
    const invoke12= () =>{
      document.getElementById('video').src = "#"
    }
    
   
   

 
 
// const Video2 = () => {
//   return (

   
//   );
// };



    return(
        <>
        <NavBar/>
        
        <div className="webCourse" >
        
      <MDBRow>
      
        <MDBCol md='7' style={{textAlign:'left',margin:'auto',padding:'8%'}}>
            <p style={{color:'#d1033a',marginBottom:'5%'}}>WEB DEVELOPMENT-BASICS</p>
            <h2 style={{marginBottom:'5%',fontWeight:'1000'}}>Fundamentals of Web Development</h2>
            <h5 style={{color:'#0478bb'}}>This course will help you understand the fundamental blocks of Web developement </h5>
        </MDBCol>
        <MDBCol md='5'>
            <img src='./Course1.svg' style={{width:'70%'}}/>
        </MDBCol>
      </MDBRow>

     </div>
     <div className="videoData" style={{border:'10px solid gold',width:'80%',margin:'auto',marginTop:'5%'}}>
      
     
     <div className="videoDiv">

     <iframe width="100%" id='video' height="400px"  src="https://www.youtube.com/embed/xGmIl7QbBiA" title="YouTube video player" frameborder="0"  allowfullscreen onEnded={greenDiv}></iframe>
     </div>
    
     </div>
     <div className="WebDevcontent" style={{marginTop:'5%'}}>
        <MDBRow>
            <MDBCol md='9'>
        <div className="syllabus" style={{backgroundColor:'red',border:'none'}}>
        <Accordion flush >
      <Accordion.Item eventKey="0" id='accordData' style = {{textAlign:'left'}}>
        <Accordion.Header style={{color:'red',backgroundColor:'blue'}}>1. Getting Started<FaCheckCircle id='tick' style={{color:'gold',marginLeft:'5%',visibility:tickState}}/></Accordion.Header>
        <Accordion.Body style={{cursor:'pointer',backgroundColor:color1,color:colortxt1}} id='complete1'  onClick={invoke1}> 
          1.1 What is Web Developement
         
        </Accordion.Body>
        <Accordion.Body style={{cursor:'pointer',backgroundColor:color2,color:colortxt2}} id='complete2' onClick={invoke2} >
          1.2 What is Front-End
        </Accordion.Body>
        <Accordion.Body onClick={invoke3} id='complete3' style={{cursor:'pointer',backgroundColor:color3,color:colortxt3}}>
          1.3 What is Back-End
        </Accordion.Body>
        <Accordion.Body onClick={invoke4} id='complete4' style={{cursor:'pointer',backgroundColor:color4,color:colortxt4}}>
          1.4 Front-End Tools
        </Accordion.Body>
        <Accordion.Body onClick={invoke5} id='complete' style={{cursor:'pointer',backgroundColor:color5,color:colortxt5}}>
          1.5 Basics for Web Development
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id='accordData' style = {{textAlign:'left'}}>
        <Accordion.Header>2. What's emmet<FaCheckCircle id='tick' style={{color:'gold',marginLeft:'5%',visibility:tickState2}}/></Accordion.Header>
        <Accordion.Body onClick={invoke6} style={{cursor:'pointer',backgroundColor:color6,color:colortxt6}}>
          2.1 Let's learn about Emmet
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" id='accordData' style = {{textAlign:'left'}}>
        <Accordion.Header>3. HTML-the Backbone for web development<FaCheckCircle id='tick' style={{color:'gold',marginLeft:'5%',visibility:tickState3}}/></Accordion.Header>
        <Accordion.Body onClick={invoke7} style={{cursor:'pointer',backgroundColor:color7,color:colortxt7}}>
          3.1 What is HTML
        </Accordion.Body>
        <Accordion.Body onClick={invoke8} style={{cursor:'pointer',backgroundColor:color8,color:colortxt8}}>
          3.2 Getting started with HTML
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="3" id='accordData' style = {{textAlign:'left'}}>
        <Accordion.Header>4. Starting with CSS<FaCheckCircle id='tick' style={{color:'gold',marginLeft:'5%',visibility:tickState4}}/></Accordion.Header>
        <Accordion.Body onClick={invoke9} style={{cursor:'pointer',backgroundColor:color9,color:colortxt9}}>
          4.1 Add styling to your webpage
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" id='accordData' style = {{textAlign:'left'}}>
        <Accordion.Header>5. Mobile Responsive Web pages<FaCheckCircle id='tick' style={{color:'gold',marginLeft:'5%',visibility:tickState5}}/></Accordion.Header>
        <Accordion.Body onClick={invoke10} style={{cursor:'pointer',backgroundColor:color10,color:colortxt10}}>
         5.1  Responsive web design
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" id='accordData' style = {{textAlign:'left'}}>
        <Accordion.Header>6. Flexbox in CSS<FaCheckCircle id='tick' style={{color:'gold',marginLeft:'5%',visibility:tickState6}}/></Accordion.Header>
        <Accordion.Body onClick={invoke11} style={{cursor:'pointer',backgroundColor:color11,color:colortxt11}}>
          6.1 FlexBox concept
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" id='accordData' style = {{textAlign:'left'}}>
        <Accordion.Header style={{backgroundColor:'transparent'}}>7.Exam and Certification</Accordion.Header>
        <Accordion.Body onClick={invoke12} style={{cursor:'pointer'}}>
          7.1 Earn a Certificate !!!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        </MDBCol>
        <MDBCol md='3'>
        <div className="webCard" style={{marginTop:'3%'}}>
        <MDBCard style={{textAlign:'left',backgroundColor:'transparent',border:'1px solid white'}}>
      <MDBCardBody>
      <Link to='/Login'><button style={{width:'100%',backgroundColor:'#03a50e',border:'none'}}><b>Buy Now</b></button></Link>
        <h5 style={{marginTop:'7%',color:'white'}}>Lifetime access</h5>
        <h4 style={{marginTop:'5%',color:'white'}}>Rs.499<h5 style={{textDecoration:'line-through',color:'gray'}}>Rs.799</h5></h4>
        <MDBCardTitle style={{color:'#03a50e'}}>What you'll learn</MDBCardTitle>
        <MDBCardText style={{color:'#bcc7bf'}}>
        <b>-</b> Become a modern and confident HTML and CSS developer, no prior knowledge needed!
        </MDBCardText>
        <MDBCardText  style={{color:'#bcc7bf'}}>
        <b>-</b> How to make websites work on every possible mobile device (responsive design)

        </MDBCardText>
       
        
      </MDBCardBody>
    </MDBCard>
        </div>
        </MDBCol>
        </MDBRow>
     </div>
     
     <Footer/>
        </>
    )
}

export default WebDev