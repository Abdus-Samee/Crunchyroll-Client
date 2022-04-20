import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

const Anime = ({base}) => {
    const navigate = useNavigate()
    const { animeId, animeName, episode } = useParams()
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/oracle/${base}/episodes/${animeId}`)
            .then(response => response.json())
            .then(data => setEpisodes(data))
        
        document.getElementById('video').src = `http://localhost:9000/oracle/${base}/${animeId}/${episode}`
    }, [episode])

    return (
        <div>
            <h1>{ animeName } - {episode}</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <video width="650" id="video" controls muted>
                    <source src={`http://localhost:9000/oracle/${base}/${animeId}/${episode}`} type="video/mp4"></source>
                </video>
                <List component="nav" aria-label="mailbox folders">
                    {episodes.map((episode, index) => (
                        <>
                            <ListItem button divider onClick={() => navigate(`/${base}/${animeId}/${animeName}/${episode.EPISODE}`)}>
                                <ListItemText primary={'Episode ' + (index+1)} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </div>
        </div>
    )
}

export default Anime
