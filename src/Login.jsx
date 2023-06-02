import { useEffect, useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';



function Login(){

    const [name,setName] = useState("")
    const [status,setStatus] = useState("Login")
    
    const [password,setPassword] = useState("")
    const [Data,setData] = useState([]) 
    const [message,setMessage] = useState('') 
    const url = "https://64520d1ebce0b0a0f73b4d15.mockapi.io/Learning"
    
  
    const formHandler = () => {
     console.log("form")
      
      
    }
    const validate = (e) => {
      e.preventDefault();
      axios.get(url)
      .then((res)=>setData(res.data));
      
     for(var i = 0 ; i <= Data.length; i++) {
        if(name == '' || password == ''){
          setMessage("Enter all Details")
          setTimeout(()=>{
            setMessage("")
          },2000)
          
          
          continue
          
        }
        else if(name == Data[i].name &&  password == Data[i].password){
          
           setMessage("User found");
           setTimeout(()=>{
            setMessage("")
            
          },2000)
           document.getElementById("formIns1").value = ''
           document.getElementById("formIns2").value = ''
           setStatus("Logout")
          
           
           setName('')
           setPassword('')
           break;
        }
        else{
          setMessage("User not found")
          setTimeout(()=>{
            setMessage("")
          },2000)
          continue
        }
      }
      
    }
    useEffect(()=>{
      formHandler
    },[])

  return(
        <>
            
            <div className="LoginSection">
            
      <h2 style={{ color: '#e6a71d', marginBottom: '3%' }}>A&J's</h2>
      <div className="loginText2">
          <h2>Login</h2>
        </div>
        <p style={{ color: 'white', marginTop: '2%' }}>Don't have an account?  <Link to='/Signin' style={{color:'gold'}}>Sign-in</Link></p>
        
        
        <form id='loginData' onSubmit={validate}>
          <input type='text' placeholder='username' id='formIns1' onChange={(e) => setName(e.target.value)}></input><br></br>
          <input type='password' placeholder='password' id='formIns2' onChange={(e) => setPassword(e.target.value)}></input><br></br>
        
          <button type='submit'>{status}</button>
          <p id='loginMsg' style={{color:'white'}}>{message}</p>
        </form>
        <Link to='/' style={{color:'white'}}><button style={{margin:'3%',backgroundColor:'transparent',border:'2px solid white'}}>Back</button></Link>
      </div>

        </>
    )
}

export default Login