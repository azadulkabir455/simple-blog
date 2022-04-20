import React, { useState, useEffect, } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Globalfooter from '../Globals/Footers/globalFooter';
import Globalheaders from '../Globals/Headers/GlobalHeaders';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogPage, setBlogPage] = useState();
    let blogItems = 6
    useEffect(() => {
        getBlogs();
    }, [])
    const getBlogs = () => {
        fetch(`http://localhost:3001/comments?_page=1&_limit=${blogItems}`).then((res) => {
            res.json().then((data) => {
                let totalBlogs = res.headers.get("x-total-count");
                setBlogPage(Math.ceil(totalBlogs/blogItems));
                setBlogs(data)
            })
        })
    }
    const fetchBlogs = async (currentPage) => {
     const res = await fetch(`http://localhost:3001/comments?_page=${currentPage}&_limit=${blogItems}`);
     const data = await res.json();
     return data;
    }
    const pageClickHandler = async (data) => {
        let currentPage = data.selected + 1;
        const pagePerBlogs = await fetchBlogs(currentPage)
        setBlogs(pagePerBlogs)
    }

    return (
        <>
            <Globalheaders
                title="Blog Page"
                desc="Synergistically maintain client-based data after collaborative e-business. Professionally harness prospective total linkage with B2B synergy."
            />
            <div className="blogArchive">
                <Container>
                    <Row>
                        {
                            blogs.map((item) =>
                                <Col xs={4} key={item.id}>
                                    <Card key={item.id}>
                                        <Card.Header as="h5">
                                            {item.name}
                                            <div className="contactInfo">
                                                {item.phone}
                                                {item.email}
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                               {item.desc}
                                            </Card.Text>
                                            <Button variant="primary">
                                                <Link to={`/blog/${item.id}`}>Read more</Link>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
            
                    <ReactPaginate 
                         breakLabel="..."
                         nextLabel=" >"
                         previousLabel="< "
                         onPageChange={pageClickHandler}
                         pageRangeDisplayed={3}
                         marginPagesDisplayed={3}
                         pageCount={blogPage}
                         
                    /> 
                </Container>
            </div>
            <Globalfooter />

        </>
    );
}

export default Blog;
