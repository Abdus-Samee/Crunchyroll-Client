import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Manga = () => {
    const [info, setInfo] = useState({})
    const { mangaId, chapter } = useParams()

    useEffect(() => {
        fetch("http://localhost:9000/oracle/manga/"+mangaId)
            .then(response => response.json())
            .then(data => setInfo(data))
    }, [])

    return (
        <div>
            <h1>{ info.TITLE }</h1>
            <h5>{ info.SYNOPSIS }</h5>
            <p>Released on : { new Date(info['Release Date'] ).toLocaleDateString() }</p>
            <iframe 
                width="100%" 
                height="800" 
                frameBorder="0" 
                src={"http://localhost:9000/oracle/manga/"+mangaId+"/"+chapter}
            >
            </iframe>
        </div>
    )
}

export default Manga