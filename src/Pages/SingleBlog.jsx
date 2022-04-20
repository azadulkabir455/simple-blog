import React,{useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Globalfooter from '../Globals/Footers/globalFooter';
import Globalheaders from '../Globals/Headers/GlobalHeaders';

const Singelblog = () => {
    const {id} = useParams();
    const [blogs, setBlogs] = useState([]);
    console.log(blogs[id -1])
    useEffect(() => {
        getBlogs();
    }, [])
    const getBlogs = async () => {
        const res = await fetch(`http://localhost:3001/comments`);
        const data = await res.json();
        setBlogs(data);
    }
    return (
        <>
           <Globalheaders 
            title="Single Blogs"
            desc = "Continually initiate compelling catalysts for change before enabled materials. Monotonectally incubate functionalized content."
           />
                {
                }
           <Globalfooter />
        </>
    );
}

export default Singelblog;
