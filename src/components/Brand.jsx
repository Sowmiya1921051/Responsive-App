
const BrandComponent = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="mt-16">

                <h3 className="text-2xl">THE LIFE SIZE</h3>
                <h2 className="text-6xl font-bold">BRAND STORY</h2>
                <p className="italic text-2xl mt-2">View multiple content block layouts under features section.</p>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-20">
                    <div className="item">
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaal qua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="text-lg mt-8">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut per spiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ip</p>
                        <button className="mt-12 md:mt-16 lg:mt-20 py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white focus:outline-none focus:ring focus:ring-white focus:ring-opacity-75 ">Get Quotation</button>
                    </div>

                    <div className="item ">
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="md:flex mt-6">
                            <div className="md:w-1/2 mb-4 md:mb-0 ">
                                <div className="text-blue-500 text-lg">
                                    <p>WEB & INTERACTIVE DESIGN</p>
                                    <p>CONTENT MANAGEMENT</p>
                                    <p>WEB APPLICATIONS</p>
                                    <p>SOFTWARE DEVELOPMENT</p>
                                    <p>ECOMMERCE SOLUTIONS</p>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <div className="text-blue-500 text-lg">
                                    <p>DATABASE DESIGN</p>
                                    <p>TECHNICAL DOCUMENTATION</p>
                                    <p>SOFTWARE ARCHITECTURE</p>
                                    <p>SEARCH OPTIMIZATION</p>
                                    <p>WEB PROMOTIONS</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandComponent;
