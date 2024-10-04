import image1 from "../../assets/Image/web-developer.jpg";
import image2 from "../../assets/Image/2.jpg";
import image3 from "../../assets/Image/3.jpg";
import image4 from "../../assets/Image/4.jpg";
import image5 from "../../assets/Image/5.jpg";
import { RxCross2 } from "react-icons/rx";

const Team = () => {
    return (
        <div>
            <div className="bg-gray-200 w-full h-40">
                <div
                    className="hero w-full h-40"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/2qKcMnG/bg.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h2 className="text-3xl font-bold text-center pt-4">Meet Our Team</h2>
                            <p className="text-center">Our Executive Team</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* card start */}
            <div className="flex gap-5 container mx-auto mt-10">
                <div className="flex-1">
                    <div className="grid lg:grid-cols-3">
                        <div
                            className="w-44 h-[220px] shadow-2xl p-3">
                            <figure className="px-5 pt-5">
                                <img
                                    src={image3}
                                    alt="Web Developer"
                                    className="rounded-full w-28 mx-auto" />
                            </figure>
                            <div className="items-center text-center mt-3">
                                <h2 className="text-[15px] font-bold">Tanveer Sarker</h2>
                                <p className="text-sm">Team Lead</p>
                            </div>

                        </div>
                        <div
                            className="w-44 h-[220px] shadow-2xl p-3">
                            <figure className="px-5 pt-5">
                                <img
                                    src={image4}
                                    alt="Web Developer"
                                    className="rounded-full w-28 mx-auto" />
                            </figure>
                            <div className="items-center text-center mt-3">
                                <h2 className="text-[15px] font-bold">Md Momrul Hasan</h2>
                                <p className="text-sm">Script Writer</p>
                            </div>

                        </div>
                        <div
                            className="w-44 h-[220px] shadow-2xl p-3">
                            <figure className="px-5 pt-5">
                                <img
                                    src={image2}
                                    alt="Web Developer"
                                    className="rounded-full w-28 mx-auto" />
                            </figure>
                            <div className="items-center text-center mt-3">
                                <h2 className="text-[15px] font-bold">Ehteshamul Haque
                                </h2>
                                <p className="text-sm">Video Editor</p>
                            </div>

                        </div>
                        <div
                            className="w-44 h-[220px] shadow-2xl p-3">
                            <figure className="px-5 pt-5">
                                <img
                                    src={image5}
                                    alt="Web Developer"
                                    className="rounded-full w-28 mx-auto" />
                            </figure>
                            <div className="items-center text-center mt-3">
                                <h2 className="text-[15px] font-bold">Shahriar Alif</h2>
                                <p className="text-sm">Graphic Designer</p>
                            </div>

                        </div>
                        <div
                            className="w-44 h-[220px] shadow-2xl p-3">
                            <figure className="px-5 pt-5">
                                <img
                                    src={image1}
                                    alt="Web Developer"
                                    className="rounded-full w-28 mx-auto" />
                            </figure>
                            <div className="items-center text-center mt-3">
                                <h2 className="text-[15px] font-bold">Dolan Dhrubo Ray</h2>
                                <p className="text-sm">Web Developer</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="divider lg:divider-horizontal"><RxCross2 className="text-2xl" /></div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-3">About Climate Warriors_</h2>
                    <p>
                        We are <span className="text-red-500 italic">Climate Warriors</span>, a team committed to unveiling the realities of the climate crisis and empowering communities with the tools to face its challenges. Our project, <span className="font-semibold">Waters on the Rise: A Climate Crisis Unveiled, </span> is a platform designed to visualize the devastating effects of rising sea levels and extreme rainfall in vulnerable regions worldwide. It also provides emergency help for locals and offers a tool where they can update the current situation in their area.
                    </p>

                    <h2 className="text-xl font-bold mt-5 mb-3">Our Key Features_</h2>
                    <p>
                        <span className="font-semibold">Real-time Data Visualization:</span> Explore live visualizations of sea levels and rainfall patterns in regions like Bangladesh, powered by data from NASA and the US GHG Center. Our interactive maps and predictive models provide insights into both current conditions and future projections, helping users understand which areas are at risk. <br /> <br />
                        <span className="font-semibold">Impact Calculator: </span>
                        Discover how climate change will affect your location. Our calculator offers personalized insights into the economic and social consequences of rising sea levels and increased rainfall, along with practical suggestions for mitigation and adaptation.
                        <br /> <br />
                        <span className="font-semibold">Flood Risk Alerts and Newsfeed: </span>
                        Receive real-time alerts on flood risks and stay informed with the latest updates on climate-related events through our integrated newsfeed.
                        <br /> <br />
                        <span className="font-semibold">Community Data Contribution: </span>
                        Be part of the solution by contributing local data or reporting flooding events in your area. Our platform supports crowdsourced data sharing, empowering communities to take action together.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Team;