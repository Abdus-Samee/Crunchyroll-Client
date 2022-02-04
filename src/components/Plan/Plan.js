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
                <h1>Yearly</h1>
            </div>
            <div className="cen">
                <h1>Monthly</h1>
            </div>
            <div className="cen">
                <h1>Weekly</h1>
            </div>
            <div className="cen">
                <h1>Daily</h1>
            </div>
            </Slider>
        </div>
    )
}

export default Plan