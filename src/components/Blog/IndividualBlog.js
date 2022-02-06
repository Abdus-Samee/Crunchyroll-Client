import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const IndividualBlog = () => {
    const { blogId } = useParams()
    const [blog, setBlog] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/oracle/blogs/"+blogId)
            .then(response => response.json())
            .then(data => setBlog(data))
    }, [])

    return(
        <div>
            {blog && 
                <div>
                    <h1>{blog.TITLE}</h1>
                    <p>{ new Date(blog.TIME).toLocaleDateString() }</p>
                    <div 
                        dangerouslySetInnerHTML={{ __html: blog.TEXT }}
                    />
                </div>
            }
            <br />
            <hr style={{ width: '15%'}} />
            <h4>Comments</h4>
            <hr />
            {comments.length > 0 ? comments.map(comment => (
                <div key={comment.COMMENTID}>
                    <p>{comment.TEXT}</p>
                </div>
            )) : <i>No comments yet</i>}
        </div>
    )
}

export default IndividualBlog