import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Person1 from '../assets/Person1.jpg';
import Person2 from '../assets/Person2.jpg';
import Person3 from '../assets/Person3.jpg';

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

function Testimonials() {
  const data = [
    { img: Person1 ,user :"Natalie Fullick","role":"CEO - Envato INC","des":"Lorem ipsum dolor sit amet" },
    { img: Person2,user :"Natalie Fullick","role":"CEO - Envato INC","des":"Lorem ipsum dolor sit amet"},
    { img: Person3,user :"Natalie Fullick","role":"CEO - Envato INC","des":"Lorem ipsum dolor sit amet" },
    { img: Person1,user :"Natalie Fullick","role":"CEO - Envato INC","des":"Lorem ipsum dolor sit amet" },
    { img: Person2,user :"Natalie Fullick","role":"CEO - Envato INC","des":"Lorem ipsum dolor sit amet" }
  ];


  const settings = {
    
    dots: false,
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
          dots: false,
          arrows: false
        }
      },
    ]
  };

  return (
    <div className="mt-20">
      <div className="content text-center">
        <div>
          <p className='text-3xl mt-20'>HEAR FROM</p>
          <p className='text-4xl font-bold mt-5'>TESTIMONIALS</p>
          <p className='text-2xl italic mt-5'>We always listen to our clients.</p>
        </div>
      </div>

      <div className="mt-14 mx-auto px-4 max-w-screen-lg">
        <div className="mt-8 px-4 bg-pink rounded-lg">
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index} >
                  <img
                    src={item.img}
                    alt={`Person ${index}`}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <p className='mt-10 text-4xl text-blue-600'>{item.user}</p>
                  <p className='mt-8'>{item.role}</p>
                  <p className='mt-20'>{item.des}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Testimonials;



