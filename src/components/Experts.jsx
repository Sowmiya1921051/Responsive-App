import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib ,faVectorSquare, faR,faLayerGroup, faTh} from '@fortawesome/free-solid-svg-icons';


function Features() {
    return (
        <div className="mt-5 text-center mx-auto px-4 lg:px-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div className="col-span-1">
                    <div className="mt-5 text-left">
                        <h3 className="text-2xl">What We Do</h3>
                        <h2 className="text-6xl font-bold">Experts</h2>
                        <p className="italic text-2xl mt-2">We Build Digital Solutions</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="mt-5 p-5 bg-gray-200">
                    <FontAwesomeIcon className="text-4xl" icon={faPenNib} />
                        <h3 className="text-center  mt-5">PIXEL PERFECT</h3>
                        <p className="text-center mt-5">Auersla, consectetur adipiscing lorem ipsum dolor sit amet</p>
                        <p className="text-center font-semibold mt-5">LEARN MORE</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="mt-5 p-5 bg-gray-200">
                    <FontAwesomeIcon className="text-4xl" icon={faVectorSquare} />
                        <h3 className="text-center  mt-5">VECTOR SHAPES</h3>
                        <p className="text-center mt-5">Auersla, consectetur adipiscing lorem ipsum dolor sit amet</p>
                        <p className="text-center font-semibold mt-5">LEARN MORE</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="mt-5 p-5 bg-gray-200">
                    <FontAwesomeIcon className="text-4xl" icon={faR} />
                        <h3 className="text-center mt-5">GOOGLE FONTS</h3>
                        <p className="text-center mt-5">Auersla, consectetur adipiscing lorem ipsum dolor sit amet</p>
                        <p className="text-center font-semibold mt-5">LEARN MORE</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="mt-5 p-5 bg-gray-200">
                    <FontAwesomeIcon className="text-4xl" icon={faLayerGroup} />
                        <h3 className="text-center  mt-5">EASY LAYERS</h3>
                        <p className="text-center mt-5">Auersla, consectetur adipiscing lorem ipsum dolor sit amet</p>
                        <p className="text-center font-semibold mt-5">LEARN MORE</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="mt-5 p-5 bg-gray-200">
                    <FontAwesomeIcon className="text-4xl" icon={ faTh} />
                        <h3 className="text-center  mt-5">BOOTSTRAP GRID</h3>
                        <p className="text-center mt-5">Auersla, consectetur adipiscing lorem ipsum dolor sit amet</p>
                        <p className="text-center font-semibold mt-5">LEARN MORE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
