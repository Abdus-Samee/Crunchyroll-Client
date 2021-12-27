import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const AnimeCard = ({title, synopsis, premium}) => {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {synopsis}
                </Typography>
                {premium==='Y' && <Typography variant="body2">Buy now!</Typography>}
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate('/anime')} size="small">Watch</Button>
            </CardActions>
        </React.Fragment>
    )
}

export default AnimeCard
