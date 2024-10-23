import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    // Fetching data from API
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(err => console.error("Data load error: ", err));
    }, []);


    return (
        <div>

        </div>
    );
};

export default Blogs;