import bg from "../../assets/Image/bg.jpg";
import { MdFlood, MdNightShelter } from "react-icons/md";
import { FaHandsHelping, FaMapMarked, FaWater } from "react-icons/fa";
import Swal from 'sweetalert2';

const Map = () => {

    const alert = () => {
        Swal.fire({
            title: "Thanks For Contact!",
            text: "Our Team Will Contact with you soon",
            icon: "success"
        });
    }

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
                        <MdFlood className="text-7xl ml-8 mt-16 text-red-500" />
                        <h2 className="text-center font-bold text-2xl">Flood Alerts and Warnings</h2>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-48 h-64 shadow-xl mt-16">
                    <figure>
                        <img
                            src={bg} />
                    </figure>
                    <div className="card-body">
                        <FaMapMarked className="text-7xl ml-8 mt-10 text-red-500"  />
                        <h2 className="text-center font-bold text-2xl">Interactive Map</h2>
                    </div>
                </div>
                <div className="h-80 flex flex-col mt-12 gap-11">
                    <button>
                        <a href="https://tidesandcurrents.noaa.gov/map/index.html?region=Oregon" className="px-5 py-3 bg-[#869555] text-white rounded-md text-sm cursor-pointer hover:bg-red-500 duration-200">View Map</a>
                    </button>
                    <div className="card bg-base-100 image-full w-48 h-36 shadow-xl">
                        <figure>
                            <img
                                src={bg} />
                        </figure>
                        <div className="card-body">
                            <FaHandsHelping onClick={alert} className="text-7xl ml-8 hover:text-green-500 cursor-pointer duration-200 text-red-500" />
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
                        <FaWater className="text-7xl ml-8 mt-5 text-red-500" />
                        <h2 className="text-center font-bold text-2xl">Water Gauge Status</h2>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-48 h-80 shadow-xl">
                    <figure>
                        <img
                            src={bg} />
                    </figure>
                    <div className="card-body">
                        <MdNightShelter className="text-7xl ml-8 mt-24 text-red-500" />
                        <h2 className="text-center font-bold text-2xl">Shelter Locations</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;