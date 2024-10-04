import { RxCross2 } from "react-icons/rx";

const ImpactCal = () => {
    return (
        <div className="min-h-screen">
            <div className="bg-gray-200 w-full h-40">
                <div
                    className="hero w-full h-40"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/2qKcMnG/bg.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h2 className="text-3xl font-bold text-center pt-4">Impact Calculation</h2>
                            <p className="text-center">Calculate Impact Based on Your Data</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* form start */}
            <div className="container mx-auto mt-20">
                <div className="flex gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-3">Personalized Flood Impact Calculator</h2>
                        <p className="text-justify">Our Flood Impact Calculator provides a customized analysis of how rising sea levels and flooding may impact your location. By inputting your city name, infrastructure type, distance from the nearest river, and a specific year of interest, the calculator offers tailored insights on potential economic, social, and environmental effects. With these personalized results, you can better understand flood risks in your area and take proactive measures to protect your community and assets.</p>
                    </div>
                    <div className="divider lg:divider-horizontal"><RxCross2 className="text-2xl" /></div>
                    <div className="flex-1">
                        <form className="flex flex-col gap-5">
                            <div className="flex gap-5">
                                <input type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />

                                <input type="text" placeholder="City Name" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="flex gap-5">
                                <input type="number" placeholder="Distance From River (Ex: 5km)" className="input input-bordered w-full max-w-xs" />

                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Infrastructure Type</option>
                                    <option>Home</option>
                                    <option>Road</option>
                                    <option>Building</option>
                                </select>
                            </div>

                            <div>
                                <input type="number" placeholder="Year From Interest (Ex: 2024)" className="input input-bordered w-full" />
                            </div>

                            <button className="btn btn-outline">Calculate</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImpactCal;