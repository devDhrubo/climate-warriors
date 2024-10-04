import bg from "../../assets/Image/bg.jpg";
import { MdFlood, MdNightShelter } from "react-icons/md";
import { FaHandsHelping, FaMapMarked, FaWater } from "react-icons/fa";
import Swal from 'sweetalert2';
import { GiClick } from "react-icons/gi";

const Map = () => {

    const alert = () => {
        Swal.fire({
            title: "Share Your Location?",
            text: "Make Sure You Click on the Allow Button in the Left Corner!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sure!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Thanks For Contact With Us!",
                    text: "Our Team Will Contact With You As Soon as Possible",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="container mx-auto">
            <div className="text-center mt-14">
                <h1 className="text-4xl font-bold">Live Flood Insights</h1>
                <p className="my-4 mx-auto line-clamp-4">Our Live Flood Insights feature provides real-time information to help you stay safe and informed during flood events. With immediate flood alerts and warnings, an interactive map to visualize affected areas, and the ability to request help in emergencies, you can take proactive steps to protect yourself and others. You can also track local water gauge levels to monitor rising waters and find nearby shelters for safe evacuation.</p>
            </div>
            {/* card start */}
            <div className="flex gap-3 justify-around mt-10">
                <div className="tooltip" data-tip="Under Construction">
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
                </div>
                <div className="tooltip" data-tip="Under Construction">
                    <div className="card bg-base-100 image-full w-48 h-64 shadow-xl mt-16">
                        <figure>
                            <img
                                src={bg} />
                        </figure>
                        <div className="card-body">
                            <FaMapMarked className="text-7xl ml-8 mt-10 text-red-500" />
                            <h2 className="text-center font-bold text-2xl">Interactive Map</h2>
                        </div>
                    </div>
                </div>
                <div className="h-80 flex flex-col mt-5 gap-11">
                    <div className="tooltip" data-tip="Demo Map Under Construction">
                        <button>
                            <a href="https://tidesandcurrents.noaa.gov/map/index.html?region=Oregon" className="px-6 py-4 text-white rounded-md text-sm cursor-pointer bg-red-500 duration-200 flex items-center gap-2">Data Visualization <GiClick className="text-xl"/> </a>
                        </button>
                    </div>
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
                <div className="tooltip" data-tip="Under Construction">
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
                </div>
                <div className="tooltip" data-tip="Under Construction">
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
        </div>
    );
};

export default Map;