import { useState } from 'react';
import img from '../assets/Mobile.jpg';

// eslint-disable-next-line react/prop-types
function Overlay({ isOpen, onClose }) {
  return (
    <div className={`overlay09 ${isOpen ? 'is-open' : ''}`} onClick={onClose}>
      <div></div>
      <div></div>
    </div>
  );
}

function Work() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <div>
      <p className="mt-28 text-center font-bold text-6xl">THE WORK</p>

      <div className="flex flex-wrap justify-center mt-16">
        <div className="m-2 p-2">ALL</div>
        <div className="m-2 p-2">-</div>
        <div className="m-2 p-2">UI/UX DESIGN</div>
        <div className="m-2 p-2">-</div>
        <div className="m-2 p-2">PROGRAMMING</div>
        <div className="m-2 p-2">-</div>
        <div className="m-2 p-2">PHOTOGRAPHY</div>
        <div className="m-2 p-2">-</div>
        <div className="m-2 p-2">ECOMMERCE</div>
      </div>

      <div className="containerss">
        <div className="grid grid-cols-1 gap-8 mt-20 overflow-hidden sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <img key={index} src={img} alt="" className="max-w-full h-auto hover:filter hover:brightness-90 transition duration-300 ease-in-out" onClick={() => setOverlayOpen(true)} />
          ))}
        </div>
      </div>

      <Overlay isOpen={overlayOpen} onClose={() => setOverlayOpen(false)} />
    </div>
  );
}

export default Work;
