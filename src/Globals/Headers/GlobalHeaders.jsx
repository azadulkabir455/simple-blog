import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, Nav} from "react-bootstrap";

const Globalheaders = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/addblog">Add Blog</Link>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Globalheaders;
