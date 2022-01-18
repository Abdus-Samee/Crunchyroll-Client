import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const MangaCard = ({title, synopsis, release}) => {
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
                <Typography variant="body2">
                    {new Date(release).toLocaleDateString()}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate('/manga')} size="small">Read</Button>
            </CardActions>
        </React.Fragment>
    )
}

export default MangaCard
