import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faLaughBeam, faTrophy, faWineGlass } from '@fortawesome/free-solid-svg-icons';

function Project() {
    const content = [
        {
            icon: <FontAwesomeIcon icon={faDiagramProject} />,
            "no": "505",
            "name": "Total Projects"
        },
        {
            icon: <FontAwesomeIcon icon={faLaughBeam} />,
            "no": "220",
            "name": "SATISFIED CLIENTS"
        },
        {
            icon: <FontAwesomeIcon icon={faTrophy} />,
            "no": "720",
            "name": "AWARDS WON"
        },
        {
            icon: <FontAwesomeIcon icon={faWineGlass} />,
            "no": "707",
            "name": "MILESTONES MET"
        }
    ];

    return (
        <div>
            <section className="relative mt-20 md:h-80 h-screen">
                <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x900)' }}></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-4  w-full max-w-screen-xl mx-auto h-full">
                        {content.map((item, index) => (
                            <div key={index} className="hover:bg-violet-500 transition-colors duration-300 rounded-md  h-full flex justify-center items-center">
                                <div className="text-center">
                                    <p className='text-5xl'>{item.icon}</p>
                                    <p className='text-4xl font-bold mt-5'><CountUp start={0} end={parseInt(item.no)} delay={2}></CountUp>%</p>
                                    <p className='text-xl mt-5'>{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;
