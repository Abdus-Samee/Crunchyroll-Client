import Slider from "react-slick"

import './styles.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Plan = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <div>
            <Slider {...settings}>
            <div className="cen">
                <h1>1 Year</h1>
                <p>Cost: 100 credits</p>
                <br/><br/>
                <button>Avail Offer</button>
            </div>
            <div className="cen">
                <h1>6 Months</h1>
                <p>Cost: 75 credits</p>
                <br/><br/>
                <button>Avail Offer</button>
            </div>
            <div className="cen">
                <h1>1 Month</h1>
                <p>Cost: 25 credits</p>
                <br/><br/>
                <button>Avail Offer</button>
            </div>
            </Slider>
        </div>
    )
}

export default Plan