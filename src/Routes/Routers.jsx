import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../Pages/NotFound';
import AddBlog from '../Pages/AddBlog';
import EditDeleteBlog from '../Pages/EditDeleteBlog';
import BlogDashbord from '../Pages/BlogDashbord';
import Blog from '../Pages/Blog';
import Home from "../Pages/Home";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact={true} element={<Home />}/>
                <Route path="/blog"  element={<Blog />}/>
                <Route path="/blogdashbord"  element={<BlogDashbord />}>
                    <Route path="addblog"  element={<AddBlog />}/>
                    <Route path="editblog"  element={<EditDeleteBlog />}/>
                </Route>
                <Route path="*"  element={<NotFound />}/>
            </Routes>
        </>
    );
}

export default Routers;
