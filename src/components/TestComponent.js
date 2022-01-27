import { useState, useEffect } from 'react'

import './imageStyles.css'

const TestComponent = () => {
    const [chapters, setChapters] = useState([])
    const divs = ['/images/one.jpg', '/images/two.jpg', '/images/four.jpg', '/images/five.jpg', '/images/six.png']

    useEffect(() => {
        fetch('http://localhost:9000/oracle/manga/chapters/1')
            .then(response => response.json())
            .then(data => {
                setChapters(data)
                console.log(data)
            })
    }, [])

    return(
        <div>
            <h2>Vertical Mode</h2>
            <div>
                <div styles={{ display: 'flex', flexDirection: 'column'}}>
                    {divs.map((div, index) => (
                        <img className="image" src={div} />
                    ))}
                    <h1>Server images...</h1>
                    {chapters.map((chapter, index) => (
                        <img className="image" src={'http://localhost:9000/oracle/manga/image/1/' + chapter.CHAPTER} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestComponent