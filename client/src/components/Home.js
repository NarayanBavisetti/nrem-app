import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './App.css';

const Home = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                <Col lg={7} md={6} sm={12}>
                    <img className="w-100" src="./assets/images/welcome.jpg"  />

                    </Col>
                   

                    
                </Row>
            </Container>
        </>
    );
};

export default Home;