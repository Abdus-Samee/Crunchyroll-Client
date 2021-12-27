function Anime() {
    return (
        <div>
            In video
            <video width="650" controls muted>
                <source src="http://localhost:9000/oracle/video" type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Anime
