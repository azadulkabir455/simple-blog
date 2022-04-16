import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "../Resourse/Css/blogdashbord.scss";
import { AiFillHome,AiOutlineAppstoreAdd,AiFillBook } from "react-icons/ai";

const Blogdashbord = () => {
    return (
        <>
        <div className="topNav">
            <Link to="/"><AiFillHome />Back to Home</Link>
        </div>
        <div className="sideNav">
            <nav>
            <Link to="/blogdashbord/addblog"> <AiOutlineAppstoreAdd />Add Blog</Link>
            <Link to="/blogdashbord/editblog"><AiFillBook />All Blog</Link>
            </nav>
        </div>
        <div className="mainContainer">
            <Outlet />
        </div>
        </>
    );
}

export default Blogdashbord;
