import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import {Link } from 'react-router-dom'

function Signin() {

  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const url = "https://64520d1ebce0b0a0f73b4d15.mockapi.io/Learning"

  const formHandler = async (e) => {

    const validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(name == '' || mail == '' || password == ''){
      e.preventDefault()
      setMessage("Enter all details")
    }
    
    else if(validRegex.test(mail)){
      e.preventDefault()
    await axios.post(url, {
      name: name,
      email: mail,
      password: password
    })
    document.getElementById("formIns1").value = ""
    document.getElementById("formIns2").value = ""
    document.getElementById("formIns3").value = ""
    setName('')
    setPassword('')
    setMessage("account created successfully")
    setTimeout(() => {
      setMessage("")
    }, 2000)}
    else{
      e.preventDefault()
      setMessage("Enter valid Details")
    }
  }

  return (
    <>
      <div className="SigninSection">
        <h2 style={{ color: '#e6a71d', marginBottom: '3%' }}>A&J's</h2>
        <div className="loginText">
          <h2>Sign in to Explore</h2>
         
        </div>
        <p style={{ color: 'white', marginTop: '2%' }}>Already have an account? <Link to='/Login' style={{color:'gold'}}>Login</Link></p>
        <form id='formData' onSubmit={formHandler}>
          <input id='formIns1' type='text' placeholder='username' onChange={(e) => setName(e.target.value)}></input><br></br>
          <input id='formIns2' type='email' placeholder='email' onChange={(e) => setMail(e.target.value)}></input><br></br>
          <input id='formIns3' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input><br></br>
          <p id='msg' style={{ color: "white" }}>{message}</p>
          <button type='submit'>Sign-up</button>
        </form>
        <Link to='/' style={{color:'white'}}><button style={{margin:'3%',backgroundColor:'transparent',border:'2px solid white'}}>Back</button></Link>
      </div>

    </>
  )
}

export default Signin