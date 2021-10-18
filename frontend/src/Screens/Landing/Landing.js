import { Button, Container, Row } from "react-bootstrap";
import {useEffect} from "react";
import "./Landing.css";
import cover from "./img/cover.png";
const Landing = () => {
//   useEffect(() => {
//     const userInfo = localStorage.getItem("userInfo");
//     if(userInfo){
//         history.push("/myprofile");
//     }
// },[history]);
  return (
    <>
     
      <div className="wrap">
        <div className="imagebox">
          <img src={cover}></img>
        </div> 
        <div>
        <div className="textbox">
          <textbox>
            <h1 className="title"> WELCOME!</h1>
            <p className="subtitle">Explore and Discover</p>
          </textbox>
          </div>
          <div className='button'>
          <a href='./login'>
            <Button size='lg' className='login' >
              Login
            </Button>
          </a>
          <a href='./register'>
            <Button size='lg' className='register' variant='outline-primary'>
              SignUp
            </Button>
          </a>
          
        </div>
        </div>
       
      </div>


   

    </>
  );
};
export default Landing;
