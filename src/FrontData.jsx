import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Img1 from '/Img1.svg'
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'


function FrontData(){
  
    return(
        <div className="introContent">
    <MDBRow>
      <MDBCol md='6' >
      <div className="introData">
        
        <Link to='/CourseList'><button id='btn1'>Start</button></Link>
       
        <h2>Get Ready to Learn and Grow</h2>
        <h5 style={{fontSize:'120%',fontWeight:'450'}}>Pay a small fess and access to entire LCO pro library. This includes all the video courses and tests. As of now we are offering this early bird pricing which will eventually change in future.</h5>
        <Link to='/Login' style={{color:'white'}}><button>Enroll for free</button></Link>
      </div>
      </MDBCol>
      <MDBCol md='6'>
      <div className="img" >
    <img src={Img1} id='img1'></img>
    </div>
      </MDBCol>
    </MDBRow>
      
  
    </div>
    )
}
export default FrontData