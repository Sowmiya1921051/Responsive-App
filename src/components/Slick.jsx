import Butterfly from '../assets/butterfly.png';
import Butter from '../assets/butter.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

function Team() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 2 : 6, // Show 2 images at a time in mobile, 6 images in desktop
        slidesToScroll: 2, // Scroll 2 images at a time
        arrows: false // Add this line to hide arrows
    };

    const data = [
        { img: Butterfly },
        { img: Butter },
        { img: Butterfly },
        { img: Butter },
        { img: Butterfly },
        { img: Butter },
    ];

    return (
        <div className="mt-14">
            <div className='w-3/4 m-auto'>
                <div className='mt-20'>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <img key={index} src={item.img} alt={`Girl ${index}`} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Team;
