import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button'

const AnimeInfo = () => {
    const [info, setInfo] = useState({})
    const navigate = useNavigate()
    const { animeId } = useParams()

    useEffect(() => {
        fetch("http://localhost:9000/oracle/anime/"+animeId)
            .then(response => response.json())
            .then(data => setInfo(data))
    }, [])

    return(
        <div>
            <h1>{ info.TITLE }</h1>
            <h5>{ info.SYNOPSIS }</h5>
            <p>Released on : { new Date(info['Release Date'] ).toLocaleDateString() }</p>
            <Button onClick={() => navigate('/anime')} size="small">Watch</Button>
        </div>
    )
}

export default AnimeInfo