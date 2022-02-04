import { useState, useEffect } from 'react'

const Show = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/oracle/blogs")
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    return(
        <div>
            {blogs.map(blog => (
                <div key={blog.BLOGID}>
                    <h1>{blog.TITLE}</h1>
                    <p>{ new Date(blog.TIME).toLocaleDateString() }</p>
                    <div 
                        dangerouslySetInnerHTML={{ __html: blog.TEXT}}
                    />
                </div>
            ))}
        </div>
    )
}

export default Show