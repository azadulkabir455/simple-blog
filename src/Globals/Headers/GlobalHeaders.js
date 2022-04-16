import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Images from '../../Resourse/Images/Images';
import "./globalHeader.scss";

const Globalheaders = (props) => {
    return (
        <>
            <div className="banner">
                <div className="overlay"></div>
                <div className="container headerContent">
                    <div className="content">
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>
                    </div>
                    <Button><Link to="/blogdashbord/addblog">Create A blog</Link>    </Button>
                </div>
            </div>
            <Navbar bg="dark" variant="dark">
                <Container className="container">
                    <Navbar.Brand className="navbar-brand">
                        <Link to="/" className="nav-link"><img src={Images.brandLogo} alt="Brandlogo" />  </Link>
                    </Navbar.Brand>
                    <Nav >
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to="/blogdashbord/addblog">Dashbord</Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Globalheaders;
