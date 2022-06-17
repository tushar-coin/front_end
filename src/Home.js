import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my new web', body: 'bfkjakjdvd', author: 'mario', id: 1 },
        { title: 'my party', body: 'bfkjakjdvd', author: 'yoshi', id: 2 },
        { title: 'my tips', body: 'bfkjakjdvd', author: 'mario', id: 3 }
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => (
            blog.id !== id
        ))
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log("hie");
        console.log(blogs);
    }, [])
    return (
        <div className="home">
            <Bloglist blogs={blogs} title="all blogs" handleDelete={handleDelete} />
        </div>

    );
}

export default Home; 