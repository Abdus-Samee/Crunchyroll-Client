import { useState, useEffect } from "react"

function Preference() {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/oracle")
            .then(response => response.json())
            .then(data => setAnimes(data))
    }, [])

    return (
        animes.map(anime => (
            <div key={anime.ID}>
                <div>
                    <h3>{anime.TITLE}</h3>
                    <h3>{anime.SYNOPSIS}</h3>
                    <h3>{anime.ISPREMIUM}</h3>
                </div>
            </div>
        ))
    )
}

export default Preference
