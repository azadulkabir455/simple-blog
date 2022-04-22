import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Globalfooter from '../Globals/Footers/globalFooter';
import Globalheaders from '../Globals/Headers/GlobalHeaders';

const Singelblog = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);
 

    useEffect(() => {
        fetch(`http://localhost:3001/comments/${id}`).then((res) => {
            res.json().then((data) => {
                setBlogs(data);

            })
        })


    })
    return (
        <>
            <Globalheaders
                title="Single Blogs"
                desc="Continually initiate compelling catalysts for change before enabled materials. Monotonectally incubate functionalized content."
            />
            {blogs.name} <br />
            {blogs.desc}
            <Globalfooter />
        </>
    );
}

export default Singelblog;
