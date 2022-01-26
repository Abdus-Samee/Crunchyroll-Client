import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

const AnimeInfo = () => {
    const [info, setInfo] = useState({})
    const [episodes, setEpisodes] = useState([])
    const navigate = useNavigate()
    const { animeId } = useParams()

    useEffect(() => {
        fetch("http://localhost:9000/oracle/anime/"+animeId)
            .then(response => response.json())
            .then(data => setInfo(data))

        fetch("http://localhost:9000/oracle/anime/episodes/"+animeId)
            .then(response => response.json())
            .then(data => setEpisodes(data))
    }, [])

    return(
        <div>
            <h1>{ info.TITLE }</h1>
            <h5>{ info.SYNOPSIS }</h5>
            <p>Released on : { new Date(info['Release Date'] ).toLocaleDateString() }</p>
            <List component="nav" aria-label="mailbox folders">
                {episodes.map((episode, index) => (
                    <>
                        <ListItem button divider onClick={() => navigate('/anime')}>
                            <ListItemText primary={'Episode ' + (index+1) + ', Link: ' + episode.EPISODE} />
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </div>
    )
}

export default AnimeInfo