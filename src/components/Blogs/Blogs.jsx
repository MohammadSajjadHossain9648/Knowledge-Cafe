import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks}) => {
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
            {
                blogs.map(blog => <Blog
                                        key={blog.id}
                                        blog={blog}
                                        handleAddToBookmarks={handleAddToBookmarks}
                                  ></Blog>)
            }
        </div>
    );
};

export default Blogs;