import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TextField from '@mui/material/TextField'
import Rating from 'react-rating'

const AnimeInfo = ({token}) => {
    const [info, setInfo] = useState({})
    const [episodes, setEpisodes] = useState([])
    const [reviews, setReviews] = useState([])
    const [reviewGiven, setReviewGiven] = useState(false)
    const [rating, setRating] = useState(0)
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

    // async function addReview(credentials) {
    //     return fetch("http://localhost:9000/oracle/blogs/"+blogId, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(credentials)
    //     })
    //       .then(data => data.json())
    // }

    const handleSubmit = async e => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        var reviewText = data.get('review')
        console.log(reviewText, rating)

        // if(comment){
        //     console.log('Commented: ', comment)

            
        //     const response = await addReview({
        //         comment
        //     });
        //     console.log(response.success)

        //     //alert user if response.success is false
        //     if(response.success){
        //         setComments([...comments, comment])
        //         setComment('')
        //     }
        // }
    }

    return(
        <div>
            <h1>{ info.TITLE }</h1>
            <h5>{ info.SYNOPSIS }</h5>
            <p>Released on : { new Date(info['Release Date'] ).toLocaleDateString() }</p>
            <List component="nav" aria-label="mailbox folders">
                {episodes.map((episode, index) => (
                    <>
                        <ListItem button divider onClick={() => navigate(`/anime/${animeId}/${info.TITLE}/${episode.EPISODE}`)}>
                            <ListItemText primary={'Episode ' + (index+1) + ', Link: ' + episode.EPISODE} />
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
            <br/>
            <h1 style={{ textAlign: 'center'}}>REVIEWS</h1>
            {reviews.length > 0? reviews.map(review => (
                <>All the reviews</>
            )) : <p>No reviews yet</p>}
            {token && !reviewGiven && (<Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Give a review</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        sx={{
                            marginTop: 8,
                        }}
                        onSubmit={handleSubmit}
                        component="form"
                    >
                        <Rating
                            onClick={(value) => setRating(value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="review"
                            name="review"
                            autoComplete="review"
                            autoFocus
                            onChange={(e) => (e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Review!
                        </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>)}
        </div>
    )
}

export default AnimeInfo