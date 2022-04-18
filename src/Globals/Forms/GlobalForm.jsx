import React from 'react';
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import { useContext } from 'react';
import { InfoContext } from '../../Context/Context';

const Globalform = (props) => {
    const {
        name,
        email,
        phone,
        desc,
        errName,
        errEmail,
        errPhone,
        errDesc,
        nameHandler,
        emailHandler,
        phoneHandler,
        descHandler,
        formHandler,
        saveData,
        updateData
    } = useContext(InfoContext);

    return (
        <>
            <h1>
                {props.type?"Create your Own Blog": "Update your Blog Data"}
            </h1>
            <Form onSubmit={(e) => formHandler(e)}>
                <Row>
                    <Col md={12} className="mb-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control 
                            type="text"
                            value={name}
                            onChange={(e)=> nameHandler(e.target.value)}
                            placeholder="Enter your name" />
                        </Form.Group>
                        <span className="errMsg">{errName}</span>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control 
                            type="email" 
                            value={email}
                            onChange={(e) => emailHandler(e.target.value)}
                            placeholder="Enter your mail" />
                        </Form.Group>
                        <span className="errMsg">{errEmail}</span>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone Number: </Form.Label>
                            <Form.Control 
                            type="tel"
                            value={phone}
                            onChange={(e) => phoneHandler(e.target.value)}
                            placeholder="Enter Your phone number" />
                        </Form.Group>
                        <span className="errMsg">{errPhone}</span>
                    </Col>
                    <Col md={12}>
                        <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                            <Form.Control 
                            as="textarea" 
                            value={desc}
                            onChange={(e) => descHandler(e.target.value)}
                            placeholder="Leave a comment here" />
                        </FloatingLabel>
                        <span className="errMsg">{errDesc}</span>
                    </Col>
                    <Col md={12}>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={props.type?saveData:updateData}
                        >
                            {props.type?"Save":"Update"}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Globalform;
