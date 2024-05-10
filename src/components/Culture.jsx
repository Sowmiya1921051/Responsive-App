import Img from '../assets/two.jpg';

const CultureComponent = () => {
  return (
    <div className="relative h-screen mt-20">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Img})`}}></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="content text-white text-center mx-56 sm:mx-18">
          <div>
            <p className='text-3xl mt-20'>WORK PLACE</p>
            <p className='text-6xl font-bold mt-5'>THE CULTURE</p>
            <p className='text-2xl italic mt-5'>Lovely people with a knack for design creativity flourish here.</p>
          </div>
          <div className="mt-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureComponent;
