import React, { useState, useEffect, } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Globalfooter from '../Globals/Footers/globalFooter';
import Globalheaders from '../Globals/Headers/GlobalHeaders';
import "../Resourse/Css/blog.scss";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [filterBlogs, setFilterBlogs] = useState([])
    const [blogPage, setBlogPage] = useState();
    const [searchItem, setSearchItem] = useState("");
    let blogItems = 6;
    useEffect(() => {
        getBlogs();
    }, []);
    const getBlogs = () => {
        fetch(`http://localhost:3001/comments?_page=1&_limit=${blogItems}`).then((res) => {
            res.json().then((data) => {
                let totalBlogs = res.headers.get("x-total-count");
                setBlogPage(Math.ceil(totalBlogs / blogItems));
                setBlogs(data);
                setFilterBlogs(data);
            })
        })
    }
    const filterResult = (blogItem) => {
        const result = filterBlogs.filter((blogcat) => {
            return blogcat.category === blogItem;
        });
        setBlogs(result);
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
    const limitWord = (word) => {
        let limitWord = word.slice(0, 135);
        return limitWord;
    }
    return (
        <>
            <Globalheaders
                title="Blog Page"
                desc="Synergistically maintain client-based data after collaborative e-business. Professionally harness prospective total linkage with B2B synergy."
            />
            <div className="blogArchive">
                <Container>
                    <div className="filterArea">
                    <div className="searchInput">
                        <input 
                        type="text"
                        placeholder='Search hear.....'
                        onChange={(e) => {
                            setSearchItem(e.target.value);
                        }}
                        />
                    </div>
                    <div className="filterButton">
                        <button onClick={() => filterResult("simple")}>Simple</button>
                        <button onClick={() => filterResult("hard")}>Hard</button>
                        <button onClick={() => setBlogs(filterBlogs)}>All</button>
                    </div>
                    </div>
                    <Row>
                        {
                            blogs.filter((blogItem) => {
                                if(searchItem === "") {
                                    return blogItem;
                                }else if(blogItem.name.toLowerCase().includes(searchItem.toLowerCase())) {
                                    return blogItem;
                                }else if (blogItem.phone.toLowerCase().includes(searchItem.toLocaleLowerCase())) {
                                    return blogItem;
                                }else if (blogItem.email.toLowerCase().includes(searchItem.toLocaleLowerCase())) {
                                    return blogItem;
                                }
                            }).map((item) =>
                                <Col xs={4} key={item.id} className="blogCards">
                                    <Card key={item.id}>
                                        <Card.Header as="h5">
                                            {item.name}
                                            <div className="contactInfo">
                                                <span>{item.phone}</span>
                                                <span>{item.email}</span>
                                            </div>
                                            <div className="category">{item.category}</div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                {limitWord(item.desc)}
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

                    <div className="pagination">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=" >"
                        previousLabel="< "
                        onPageChange={pageClickHandler}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={3}
                        pageCount={blogPage}

                    />
                    </div>
                </Container>
            </div>
            <Globalfooter />

        </>
    );
}

export default Blog;
