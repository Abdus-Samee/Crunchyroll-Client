import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

const MangaInfo = () => {
    const [info, setInfo] = useState({})
    const [chapters, setChapters] = useState([])
    const navigate = useNavigate()
    const { mangaId } = useParams()

    useEffect(() => {
        fetch("http://localhost:9000/oracle/manga/"+mangaId)
            .then(response => response.json())
            .then(data => setInfo(data))

        fetch("http://localhost:9000/oracle/manga/chapters/"+mangaId)
            .then(response => response.json())
            .then(data => setChapters(data))
    }, [])

    return (
        <div>
            <h1>{ info.TITLE }</h1>
            <h5>{ info.SYNOPSIS }</h5>
            <p>Released on : { new Date(info['Release Date'] ).toLocaleDateString() }</p>
            <List component="nav" aria-label="mailbox folders">
                {chapters.map((chapter, index) => (
                    <>
                        <ListItem button divider onClick={() => navigate('/manga/'+mangaId+'/'+chapter.CHAPTER)}>
                            <ListItemText primary={'Chapter ' + (index+1) } />
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </div>
    )
}

export default MangaInfo