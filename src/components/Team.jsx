import Girl from '../assets/Girl.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "pink" }}
        onClick={onClick}
      />
    );
}

function Team() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: false, // Hide dots in mobile view
              arrows: false // Hide arrows in mobile view
            }
          },
        ]
      };
    
    const data = [
        { img: Girl },
        { img: Girl },
        { img: Girl },
        { img: Girl },
        { img: Girl }
    ];

    return (
        <div className="mt-14 mx-auto px-4 max-w-screen-lg"> 
            <div className="ml-4 md:ml-auto md:mr-auto text-center md:text-left"> 
                <h3 className="text-2xl">What We Do</h3>
                <h2 className="text-6xl font-bold">Experts</h2>
                <p className="italic text-2xl mt-2">We Build Digital Solutions</p>
            </div>
        
            <div className="mt-8 px-4 bg-pink rounded-lg">
                <div className="mt-20">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <img key={index} src={item.img} alt={`Girl ${index}`} style={{ opacity: '0.6', borderRadius: '8px' }} /> 
                        ))}
                    </Slider>
                </div>
            </div>
        
            <div className="mt-8 px-4">
                <p>Martin loves gossiping code on his iPhone. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    );
}

export default Team;
