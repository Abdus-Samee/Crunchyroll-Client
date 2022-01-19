import { useState, useEffect } from "react"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Genre = () => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/oracle/genres")
            .then(response => response.json())
            .then(data => setGenres(data))
    }, [])

    return (
        <div style={{ marginTop: '25px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Stack spacing={2} direction="row">
                    {genres.map(genre => (
                        <Button variant="outlined" href="#outlined-buttons">
                            {genre.GENRENAME}
                        </Button>
                    ))}
                </Stack>
            </Box>
        </div>
    )
}

export default Genre
