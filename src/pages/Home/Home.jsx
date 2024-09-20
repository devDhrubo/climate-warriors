import flood from "../../assets/Video/flood.mp4";
import Stats from "../Stats/Stats";

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="relative w-full h-screen overflow-hidden rounded-xl">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={flood}
                    autoPlay
                    loop
                    muted
                />

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <h1 className="text-5xl font-bold text-white text-center leading-tight">Waters on the Rise, <br /> A Climate Crisis Unveiled</h1>
                    <p className="text-white text-center w-1/2 mx-auto mt-5">We are a team committed to tackling climate change through data-driven solutions. Our project, Waters on the Rise, visualizes the increasing flood risks caused by rising greenhouse gas emissions. By using real-time data, we aim to help communities understand and prepare for climate impacts, driving action toward a more resilient future.</p>
                    <div className="flex space-x-4 mt-5 items-center justify-center">
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition">
                            Learn More
                        </button>
                        <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition">
                        Explore Flood Risks
                        </button>
                    </div>
                </div>
            </div>
            <Stats/>
        </div>
    );
};

export default Home;