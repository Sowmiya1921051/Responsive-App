import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faDribbble, faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-14 mt-14">
      <div className="container mx-auto py-8 px-4 lg:px-0 flex flex-wrap justify-between">
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <p className='text-4xl font-bold'>ROXINE</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center">
      <div className="w-full lg:w-auto mb-8 lg:mb-0 flex flex-wrap justify-center lg:justify-start">
        <p className="mr-4 lg:mr-8 mb-4 lg:mb-0">Home</p>
        <p className="mr-4 lg:mr-8 mb-4 lg:mb-0">About</p>
        <p className="mr-4 lg:mr-8 mb-4 lg:mb-0">Blog</p>
        <p>Contact</p>
      </div>
    </div>
        <div className="w-full lg:w-auto flex  text-2xl">
        <FontAwesomeIcon icon={faFacebookF} className="mx-2  hover:text-blue-700" />
          <FontAwesomeIcon icon={faTwitter} className="mx-2 hover:text-blue-500" />
          <FontAwesomeIcon icon={faGoogle} className="mx-2 hover:text-orange-500" />
          <FontAwesomeIcon icon={faPinterest} className="mx-2 hover:text-red-500" />
          <FontAwesomeIcon icon={faDribbble} className="mx-2 hover:text-pink-500" />
        </div>
        
      </div>
      <div className='text-center mt-10 '>
        <p>Copyright 2024 - Roxine - Multi Purpose Theme by Waituk</p>
    </div>
    
        
    </div>
  )
}

export default Footer;
