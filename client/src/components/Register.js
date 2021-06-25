// import React, { useState } from "react";
// import {
//   Avatar,
//   Button,
//   FormGroup,
//   Grid,
//   makeStyles,
//   Paper,
//   TextField,
//   Typography,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// const useStyles = makeStyles({
//   paper: {
//     height: "60vh",
//     width: 350,
//     padding: 20,
//     margin: "40px auto",
//   },
//   logo: {
//     background: "#5959f7",
//   },
//   gap: {
//     margin: "8px 0px",
//   },
//   gap1: {
//     margin: "4px 20px",
//   },
//   gap3: {
//     margin: "15px 0px",
//   },
//   gap4: {
//     margin: "12px 0px",
//   },
// });
// const Register = () => {
//   const classes = useStyles();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function onSubmit(e) {
//     e.preventDefault();
//     // fetch(`http://localhost:5000/register`, {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify({
//     //     name,
//     //     email,
//     //     password,
//     //   }),
//     // });
//   }
//   return (
//     <div>
//       <Grid>
//         <Paper elevation={10} className={classes.paper}>
//           <Grid align="center" className={classes.gap3}>
//             <Avatar className={classes.logo}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <h2>Sign Up</h2>
//           </Grid>
//           <FormGroup>
//             <TextField
//               onChange={(e) => setName(e.target.value)}
//               className={classes.gap}
//               id="outlined-basic"
//               label="Name"
//               placeholder="Enter name"
//               variant="outlined"
//               required
//             />
//             <TextField
//               onChange={(e) => setEmail(e.target.value)}
//               className={classes.gap}
//               id="outlined-basic"
//               label="email"
//               placeholder="Enter email"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <TextField
//               onChange={(e) => setPassword(e.target.value)}
//               className={classes.gap}
//               id="outlined-basic"
//               label="password"
//               placeholder="Enter password"
//               type="password"
//               variant="outlined"
//               required
//             />

//             <Typography className={classes.gap1}>
//               Already have an account ? <Link to="/login"> Log In</Link>
//             </Typography>
//             <Button
//               onClick={onSubmit}
//               className={classes.gap4}
//               type="submit"
//               variant="contained"
//               color="secondary"
//               fullWidth
//             >
//               Sign Up
//             </Button>
//           </FormGroup>
//         </Paper>
//       </Grid>
//     </div>
//   );
// };
// export default Register;

import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
// import loginIcon from '../../images/user.svg'
// import uiImg from '../../images/login.svg';
import './App.css';

const Register = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                <Col lg={5} md={6} sm={12}>
                    <img className="w-100" src="./assets/images/register.jpg"  />
                        {/* <img className="w-100" src={uiImg} alt=""/> */}
                    </Col>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                            <img className="icon-img" src="./assets/images/login.jpg"  />
                        {/* <img className="icon-img" src={loginIcon} alt="icon"/> */}
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit">Login</Button>

                            <div className="text-left mt-3">
                                <a href="#"><small className="reset">Password Reset</small></a> II
                                <a href="#"><small className="reset ml-2">Quick Recover</small></a>
                            </div>
                        </Form>
                    </Col>

                    
                </Row>
            </Container>
        </>
    );
};

export default Register;
