import { useState, useEffect } from "react"
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import AnimeCard from "./Card"

function Preference() {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/oracle")
            .then(response => response.json())
            .then(data => setAnimes(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {animes.map(anime => (
                    <Grid item xs={2} sm={4} md={4} key={anime.ID}>
                        <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined">
                                <AnimeCard title={anime.TITLE} synopsis={anime.SYNOPSIS} premium={anime.ISPREMIUM} />
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Preference
