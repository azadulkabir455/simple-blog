import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Globalfooter from '../Globals/Footers/globalFooter';
import Globalheaders from '../Globals/Headers/GlobalHeaders';
import "../Resourse/Css/singlblog.scss"

const Singelblog = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);
 

    useEffect(() => {
        fetch(`http://localhost:3001/comments/${id}`).then((res) => {
            res.json().then((data) => {
                setBlogs(data);

            })
        })
    },[blogs])

    return (
        <>
            <Globalheaders
                title="Single Blogs"
                desc="Continually initiate compelling catalysts for change before enabled materials. Monotonectally incubate functionalized content."
            />
            <div className="singleBlog">
                <div className="container">
                    <Row>
                        <Col xs={4}>
                            <Card>
                                <Card.Body>
                                    {/* <h2>{blogs.name.charAt(0)}</h2> */}
                                    <div className="contact">
                                        <h3>{blogs.name}</h3>
                                        <span>{blogs.email}</span>
                                        <span>{blogs.phone}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={8}>
                            <p>{blogs.desc}</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <Globalfooter />
        </>
    );
}

export default Singelblog;