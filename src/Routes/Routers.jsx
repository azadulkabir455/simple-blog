import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../Pages/NotFound';
import AddBlog from '../Pages/AddBlog';
import Blog from '../Pages/Blog';
import Home from "../Pages/Home";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact={true} element={<Home />}/>
                <Route path="/blog"  element={<Blog />}/>
                <Route path="/addblog"  element={<AddBlog />}/>
                <Route path="*"  element={<NotFound />}/>
            </Routes>
        </>
    );
}

export default Routers;
