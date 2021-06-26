

  
import {Link, useHistory } from "react-router-dom"
import React, { useState } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

import './App.css';

const initialValues = {
  email:"",
  password:"",
}
const Login = () => {
const history = useHistory();
const [user,setUser] = useState(initialValues)

const handleChange = (e) => {
  setUser({...user,[e.target.name] : e.target.value})
  // console.log(user)
}
  function handleSubmit(){
    history.push("/")
  }
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" name="email" onChange={(e) => handleChange(e)} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" name="password" onChange={(e) => handleChange(e)} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit">Login</Button>

                            <div className="text-left mt-3">
                              Do not have an account ?<Link to="/register"> Register</Link>
                                {/* <a href="#"><small className="reset">Password Reset</small></a>  */}
                                
                            </div>
                        </Form>
                    </Col>

                    <Col lg={5} md={6} sm={12}>
                    <img className="w-100" src="./assets/images/login.jpg"  />
                       
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
