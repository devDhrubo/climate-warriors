import { Link } from "react-router-dom";
import bg from "../../assets/Image/bg.jpg";
import { MdFlood, MdNightShelter } from "react-icons/md";
import { FaHandsHelping, FaMapMarked, FaWater } from "react-icons/fa";

const Map = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center mt-14">
                <h1 className="text-4xl font-bold">Live Flood Insights</h1>
                <p>Understanding Flood Patterns as They Happen</p>
            </div>
            {/* card start */}
            <div className="flex gap-3 justify-around mt-10">
                <div className="card bg-base-100 image-full w-48 h-80 shadow-xl">
                    <figure>
                        <img
                            src={bg} />
                    </figure>
                    <div className="card-body">
                        <MdFlood className="text-7xl ml-8 mt-16" />
                        <h2 className="text-center font-bold text-2xl">Flood Alerts and Warnings</h2>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-48 h-64 shadow-xl mt-16">
                    <figure>
                        <img
                            src={bg} />
                    </figure>
                    <div className="card-body">
                        <FaMapMarked className="text-7xl ml-8 mt-10" />
                        <h2 className="text-center font-bold text-2xl">Interactive Map</h2>
                    </div>
                </div>
                <div className="h-80 flex flex-col mt-12 gap-11">
                    <button>
                        <a href="https://stn.wim.usgs.gov/FEV/" className="px-5 py-3 bg-[#1565C0] text-white rounded-md text-sm cursor-pointer font-bold">View Map</a>
                    </button>
                    <div className="card bg-base-100 image-full w-48 h-36 shadow-xl">
                        <figure>
                            <img
                                src={bg} />
                        </figure>
                        <div className="card-body">
                            <FaHandsHelping className="text-7xl ml-8" />
                            <h2 className="text-center font-bold text-2xl">Help Request</h2>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-48 h-64 shadow-xl mt-16">
                    <figure>
                        <img
                            src={bg} />
                    </figure>
                    <div className="card-body">
                        <FaWater className="text-7xl ml-8 mt-5" />
                        <h2 className="text-center font-bold text-2xl">Water Gauge Status</h2>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-48 h-80 shadow-xl">
                    <figure>
                        <img
                            src={bg} />
                    </figure>
                    <div className="card-body">
                        <MdNightShelter className="text-7xl ml-8 mt-24" />
                        <h2 className="text-center font-bold text-2xl">Shelter Locations</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;