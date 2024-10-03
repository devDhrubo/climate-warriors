import { Link } from "react-router-dom";
import homeVideo from "../../assets/Video/home.mp4";
import Map from "../Map/Map";
import Charts from "../Charts/Charts";
import Emergency from "../Emergency/Emergency";

const Home = () => {
    return (
        <div>
            <div className="relative h-screen w-full overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={homeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Waters on the Rise, A Climate Crisis Unveiled.</h1>
                    <p className="text-lg mb-8 max-w-4xl">
                        Explore the growing impact of climate change as rising waters reshape our world. Stay informed on the latest insights, data, and solutions to address this unfolding crisis.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/newsfeed"
                            className="inline-block bg-[#869555] hover:bg-red-500 duration-300 text-white py-2 px-6 rounded-lg transition-colors"
                        >
                            Get Involved
                        </Link>
                        <a
                            href="#chart-data"
                            className="inline-block bg-transparent hover:bg-white hover:text-black text-white py-2 px-6 rounded-lg border-2 border-white transition-colors duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            {/* Home ENd */}
            <Map />
            <Charts />
            <Emergency />
        </div>
    );
};

export default Home;