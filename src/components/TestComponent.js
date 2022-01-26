import './imageStyles.css'

const TestComponent = () => {
    const divs = ['/images/one.jpg', '/images/two.jpg', '/images/four.jpg', '/images/five.jpg', '/images/six.png']

    return(
        <div>
            <h2>Vertical Mode</h2>
            <div>
                <div styles={{ display: 'flex', flexDirection: 'column'}}>
                    {divs.map((div, index) => (
                        <img className="image" src={div} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestComponent