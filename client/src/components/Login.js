// import React, { useEffect, useState } from "react";

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
// // import login from "../../public/images/login";

// const useStyles = makeStyles({
//   paper: {
//     height: "60vh",
//     width: 800,
//     padding: 20,
//     margin: "40px auto",
//   },
//   logo: {
//     background: "#5959f7",
//   },
//   gap: {
//     margin: "8px 0px",
//     width: 370,
//   },
//   gap1: {
//     margin: "4px 20px",
//   },
//   gap3: {
//     margin: "15px 0px",
//   },
//   gap4: {
//     margin: "12px 0px",
//     width: 370,
//   },
//   img: {
//     height: "50vh",
//     width: 400,
//   },
// });

// const Login = () => {
//   const [count, setCount] = useState("");
//   const classes = useStyles();

//   return (
//     <div>
//       {/* <Grid>
//         <Paper elevation={10} className={classes.paper}>

//             <Grid align="center" className={classes.gap3}>

//           <h2>Sign In</h2>
//           </Grid>
//           <FormGroup >
//           <TextField className={classes.gap} id="outlined-basic" label="email" placeholder="enter email" variant="outlined" required />
//           <TextField className={classes.gap} id="outlined-basic" label="password" placeholder="enter password" type="password" variant="outlined" required />

//             <Typography className={classes.gap1}>
//               Do not have an account ? <Link to="/register"> Register</Link>
//             </Typography>
//             <Button className={classes.gap4} type="submit" variant="contained" color="secondary" >Log In</Button>
//           </FormGroup>
//           <img className={classes.img} src="./assets/images/login.jpg"  />
//         </Paper>
//       </Grid> */}
//       <section className="signup">
//         <div className="container mt-5">
//           <div className="signup-content">
//             {/* <div className="signin-image">
//               <figure>
//                 <img className={classes.img} src="./assets/images/login.jpg" />
//               </figure>
//             </div>
//             <div className="signin-form">
//               <h2 className="form-title">Sign In</h2>
//               <form className="register-form" id="register-form">
//                 <div className="form-group">
//                   <label htmlFor="name"></label>
//                 </div>
//               </form> */}
//             {/* </div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Login;

  
import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
// import loginIcon from '../../images/user.svg'
// import uiImg from '../../images/login.svg';
import './App.css';

const Login = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                            {/* <img className="icon-img" src="./assets/images/login.jpg"  />
                        <img className="icon-img" src={loginIcon} alt="icon"/> */}
                        <Form>
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

                    <Col lg={5} md={6} sm={12}>
                    <img className="w-100" src="./assets/images/login.jpg"  />
                       
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
