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
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                        Discover amazing experiences and opportunities with us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/get-started"
                            className="inline-block bg-[#1565C0] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
                        >
                            Get Involved
                        </Link>
                        <Link
                            href="/learn-more"
                            className="inline-block bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded-lg border-2 border-white transition-colors duration-200"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
            {/* Home ENd */}
            <Map />
            <Charts />
            <Emergency/>
        </div>
    );
};

export default Home;