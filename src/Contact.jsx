import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import Footer from './Footer.jsx'
import "react-multi-carousel/lib/styles.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol,
    MDBRow,
    MDBCardText
  } from 'mdb-react-ui-kit';
import { FaDiceD6 } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


function Contact(){

  const [message,setMessage] = useState("")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 
    let name = document.getElementById("inputField1").value
    let email = document.getElementById("inputField2").value
    let review = document.getElementById("inputField3").value
    
   if(name == "" || email == "" || review == ""){
    setMessage("Enter all details")
    setTimeout(()=>{
      setMessage("")
    },2000)
   }
   else{
    emailjs.sendForm('service_f9jsnbn', 'template_3epj9q6', form.current, '9Fmz8wlvtiZUeE9bQ')
      .then((result) => {
       setMessage("Message sent successfully");
       setTimeout(()=>{
        setMessage("");
       },2000)
       document.getElementById("inputField1").value = ""
       document.getElementById("inputField2").value = ""
       document.getElementById("inputField3").value = ""
      }, (error) => {
        setMessage("Oops!!! couldn't send the message");
      });}
  };

    return(
        <>
        <NavBar/>
        <div className="contactSection" style={{height:'max-content',marginTop:'5%'}}>
      <MDBRow>
        <MDBCol md='7' style={{textAlign:'left',margin:'auto',padding:'8%'}}>
            <p style={{color:'#d1033a',marginBottom:'5%'}}><b>A&J's Support center</b></p>
            <h2 style={{marginBottom:'5%',fontWeight:'1000'}}>We would love to hear from you !!!</h2>
            <h5 style={{color:'#0478bb'}}>Your valuable reviews will be reviewed and used to improve the app's features </h5>
        </MDBCol>
        <MDBCol md='5'>
            <img src='./contact2.svg' style={{width:'70%'}}/>
        </MDBCol>
      </MDBRow>

     </div>

     <MDBRow style={{width:"100%",marginTop:"5%",padding:"2%"}}>
      <MDBCol md='6'>
      <div className="img2" style={{height:'100%'}}>
        <img src='./email.svg' style={{height:'100%',width:"50%",borderRadius:"20px"}}></img>
      </div>
      </MDBCol>
      <MDBCol md='6'>
        <form style={{display:"inline-block",width:"100%"}} ref={form} onSubmit={sendEmail}>
        <h3 style={{color:'white',marginBottom:'5%'}}>Let's Get in Touch</h3>
        <input type='text' id='inputField1'  name="user_name" placeholder='name' ></input><br></br>
        <input type='email' id='inputField2' name="user_email"  placeholder='email'></input><br></br>
        <input type='text' id='inputField3'  name="message" placeholder='Add a review'></input><br></br>
        <button style={{backgroundColor:'blueviolet',border:'none'}}>Submit</button>

       <p style={{color:'white',fontStyle:'italic'}}>{message}</p>
        
        </form>
      </MDBCol>
    </MDBRow>
    {/* <hr style={{color:'white'}}></hr> */}
    <div className="contactDetails" style={{margin:'auto',width:'80%',marginTop:'5%'}}>
    <MDBRow >
        <h2 style={{color:'violet'}}>Reach us</h2>
        <MDBCol md='4' >
        <MDBCard style={{backgroundColor:'transparent',border:'none'}}>
      <MDBCardBody style={{textAlign:'center',width:'100%',border:'none'}}>
        <MDBCardTitle style={{color:'white'}}><FaMapMarkerAlt/> Address</MDBCardTitle>
        
        <MDBCardText style={{color:'GrayText'}}>
         ABC private ltd,<br></br>
         near HDFC bank,<br></br>
         Madurai-625 001 
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
        </MDBCol>


        <MDBCol md='4'>
        <MDBCard style={{backgroundColor:'transparent',border:'none'}}>
      <MDBCardBody style={{width:'100%',border:'none',textAlign:'center'}}>
        <MDBCardTitle style={{color:'white'}}><FaPhoneAlt/> Contact info</MDBCardTitle>
       
        <MDBCardText style={{color:'GrayText'}}>
          Mobile : 1234567890<br></br>
          email  : abcjobs@gmail.com<br></br>
          linkedIn :abcJobs.in
        </MDBCardText>

      </MDBCardBody>
    </MDBCard>
        </MDBCol>


        <MDBCol md='4'>
        <MDBCard style={{backgroundColor:'transparent',border:'none'}}>
      <MDBCardBody style={{width:'100%',border:'none',textAlign:'center'}}>
        <MDBCardTitle style={{color:'white'}}><FaDiceD6/> Working hours</MDBCardTitle>
        
        <MDBCardText style={{color:'GrayText'}}>
          Mon-Fri - 9am to 9pm<br></br>
          Weekend off<br></br>
          catch us on Youtube
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
export default Contact