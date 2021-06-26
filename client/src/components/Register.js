import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./App.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Avatar } from "@material-ui/core";

const initialValues = {
  name: "",
  email: "",
  work: "",
  phone: "",
  password: "",
  confirmpassword: "",
};
const Register = () => {
  const [user, setUser] = useState(initialValues);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, work, phone, password, confirmpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        work,
        phone,
        password,
        confirmpassword,
      }),
    });
    const data = await res.json();

    if (data.status == 400 || !data) {
      window.alert("Invalid registration");
    } else {
      window.alert("Registration Successful");
      history.push("/login");
    }
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={5} md={6} sm={12}>
            <img className="w-100" src="./assets/images/register.jpg" />
            {/* <img className="w-100" src={uiImg} alt=""/> */}
          </Col>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
            <Avatar className="icon-img">
              <LockOutlinedIcon />
            </Avatar>
            {/* <img className="icon-img" src="./assets/images/login.jpg"  /> */}
            {/* <img className="icon-img" src={loginIcon} alt="icon"/> */}
            <Form method="POST">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="work"
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter work"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="number"
                  name="number"
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Number"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="password"
                  name="confirmpassword"
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter confirm password"
                />
              </Form.Group>
              <Button
                onClick={handleSubmit}
                variant="primary btn-block"
                type="submit"
              >
                Register
              </Button>

              <div className="text-left mt-3">
                Already have an account ?<Link to="/login">Login </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
