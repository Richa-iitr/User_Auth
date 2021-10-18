import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
// import { login } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./Login.css";
import axios from "axios";
import cover2 from "./img/cover2.png";

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false);
  const [loading,setLoading]  = useState(false);
 
  const submitHandler = async(e) =>{
      e.preventDefault();
      try{
          const config = {
              headers:{
                  "Content-type":"application/json"
              },
          };
          setLoading (true);
          const {data} = await axios.post('/api/users/login',{
            email,
            password,

          },
          config
          );
          console.log(data);
          localStorage.setItem("userInfo", JSON.stringify(data));
          setLoading(false);
      }catch(error){
          setError(error.response.data.message);
          setLoading(false);
      }
  };
  return (
    <MainScreen title="LOGIN">
        <div className="wrap">
        <div className="imagebox">
          <img src={cover2}></img>
        </div>
      <div className="loginContainer">

        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit = {submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
            <br/>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register" className="register" >Register Here</Link>
          </Col>
        </Row>
      </div>
      </div>
    </MainScreen>
    
  );
};

export default Login;