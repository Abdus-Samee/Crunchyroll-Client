import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import Button from '@mui/material/Button'

import './styles.css'
import 'react-quill/dist/quill.snow.css'

const Write = ({token}) => {
    const [text, setText] = useState('')

    useEffect(() => {
        if(!token) {
            window.location.href = '/authentication'
        }
    }, [token])

    const handleChange = (value) => {
        setText(value)
    }
    
    const handleSubmit = () => {
        console.log(text)
    }

    return(
        <div>
            <h1>Write a blog...</h1>
            <ReactQuill 
                theme="snow"
                value={text}
                onChange={handleChange}
                className="ql-editor"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Publish Blog!
            </Button>
        </div>
    )
}

export default Write