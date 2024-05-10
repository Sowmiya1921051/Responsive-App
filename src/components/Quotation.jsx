
const Section = () => {
  return (
    <section className="flex justify-center items-center bg-cover bg-fixed bg-center mt-20 md:h-80 h-screen" style={{backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x900)'}}>
      <div className="text-center text-white">
        <p className="text-4xl">BEST EVER DESIGN</p>
        <p className="text-5xl mt-5 font-bold">Time to enhance your web presence!</p>
        <button className="mt-12 md:mt-16 lg:mt-20 py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75 ">Get Quotation</button>
      </div>
    </section>
  );
}

export default Section;
