import React,{useState, useEffect} from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const Editdeleteblog = () => {
    const [blogs, setBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    console.log(blogs)
    let blogItems = 3;

    useEffect(() => {
        getBlogs();
    },[blogItems]);

    const getBlogs = () => {
        fetch(`http://localhost:3001/comments?_page=1&_limit=${blogItems}`).then((res)=> {
            res.json().then((data) => {
                let totalPage = res.headers.get("x-total-count");
                setPageCount(Math.ceil(totalPage/blogItems));
                setBlogs(data);
            })
        })
    }
    const deleteBlog = (id) => {
        fetch(`http://localhost:3001/comments/${id}`,{method: "DELETE"}).then((res) => {
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
                                            <Button variant="info">Edit</Button>
                                            <Button variant="danger" onClick={() => deleteBlog(item.id)}>Delete</Button>
                                        </Card.Footer>
                                    </Card>
                                )
                            }
                            <ReactPaginate 
                                breakLabel ={"..."}
                                nextLabel = {">>"}
                                previousLabel = {"<<"}
                                pageCount={pageCount}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={3}
                                onPageChange={paginateHandler}
                            />
                       </Col>
                   </Row>
               </Container>
           </div>
        </>
    );
}

export default Editdeleteblog;
