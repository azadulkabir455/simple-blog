import React, { useState, useEffect,useContext } from 'react';
import GlobalForm from "../Globals/Forms/GlobalForm"
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import {InfoContext} from "../Context/Context" 

const Editdeleteblog = () => {
    const {
        nameHandler,
        emailHandler,
        phoneHandler,
        descHandler,
        idHandler
    } = useContext(InfoContext);
    const [blogs, setBlogs] = useState([]);
    const [show, setShow] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    let blogItems = 3;


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getBlogs();
    }, [blogItems,blogs]);

    const getBlogs = () => {
        fetch(`http://localhost:3001/comments?_page=1&_limit=${blogItems}`).then((res) => {
            res.json().then((data) => {
                let totalPage = res.headers.get("x-total-count");
                setPageCount(Math.ceil(totalPage / blogItems));
                setBlogs(data);
            })
        })
    }
    const editBlog = (id) => {
        let item = blogs[id - 1];
        nameHandler(item.name);
        emailHandler(item.email);
        phoneHandler(item.phone);
        descHandler(item.desc);
        idHandler(item.id);
    }
    const deleteBlog = (id) => {
        fetch(`http://localhost:3001/comments/${id}`, { method: "DELETE" }).then((res) => {
            res.json().then((data) => {
                getBlogs();
            })
        })
    }
    const fetchPageBlogs = async (currentPage) => {
        const res = await fetch(`http://localhost:3001/comments?_page=${currentPage}&_limit=${blogItems}`);
        const data = await res.json();
        return data;
    }

    const paginateHandler = async (current) => {
        let currentPage = current.selected + 1;
        const paginateBlogs = await fetchPageBlogs(currentPage);
        setBlogs(paginateBlogs)
    }
    return (
        <>
            <div className="editDeleteBlog">
                <Container>
                    <Row>
                        <Col>
                            {
                                blogs.map((item) =>
                                    <Card key={item.id}>
                                        <Card.Body>
                                            <Card.Title>
                                                {item.name}
                                            </Card.Title>
                                            <Card.Text>
                                                {item.desc}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="info" onClick={() => {handleShow();editBlog(item.id)}}>Edit</Button>
                                            <Button variant="danger" onClick={() => deleteBlog(item.id)}>Delete</Button>
                                        </Card.Footer>
                                    </Card>
                                )
                            }
                           <div className="pagination">
                           <ReactPaginate
                                breakLabel={"..."}
                                nextLabel={">>"}
                                previousLabel={"<<"}
                                pageCount={pageCount}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={3}
                                onPageChange={paginateHandler}
                            />
                           </div>
                        </Col>
                    </Row>
                </Container>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <GlobalForm type={false} />
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default Editdeleteblog;
