import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsfeed = () => {

    const notify = () => toast.success("Thanks For Submit!");

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
                            <h2 className="text-3xl font-bold text-center pt-4">Our Latest Newsfeed</h2>
                            <p className="text-center">Our Executive Team</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-col lg:flex-row container mx-auto">
                <div className="card grid flex-grow place-items-center">
                    <div className="grid grid-cols-2 items-center gap-10">
                        <div className="card bg-base-100 w-80 h-[500px] shadow-xl mt-10">
                            <figure>
                                <img className="h-60"
                                    src="https://www.observerbd.com/2024/06/01/ob_1717167571.jpg" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Situation dire in Feni, Noakhali, Cumilla; many flood shelters overcrowded</h2>
                                <p>Millions of people were still left without electricity and any means of communication, and relief materials had not reached many remote. <a href="3" className="underline">Read More</a> </p>
                                <div className="card-actions justify-end ">
                                    <button><AiFillLike className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                    <button><FaComment className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                    <button><FaShareNodes className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-80 h-[500px] shadow-xl mt-10">
                            <figure>
                                <img className="h-44 w-full"
                                    src="https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2024/08/24/feni-flood1.jpg" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Flood in Sylhet: 5 lakh 33 thousand people become marooned</h2>
                                <p>Flood takes a serious turn in Sylhet due to onrush of upstream water from India and incessant rain. <a href="3" className="underline">Read More</a> </p>
                                <div className="card-actions justify-end">
                                    <button><AiFillLike className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                    <button><FaComment className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                    <button><FaShareNodes className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-80 h-[500px] shadow-xl mt-10">
                            <figure>
                                <img
                                    src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-343522,resizemode-75,msid-112756187/news/india/bangladesh-flash-floods-interim-govt-wants-early-warnings-on-water-release-from-india.jpg" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Bangladesh flash floods: Interim govt wants early warnings on water release from India</h2>
                                <p>We will send the message to India through our ministry of foreign affairs <a href="3" className="underline">Read More</a> </p>
                                <div className="card-actions justify-end">
                                    <button><AiFillLike className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                    <button><FaComment className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                    <button><FaShareNodes className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 w-80 h-[500px] shadow-xl mt-10">
                            <figure>
                                <img
                                    src="https://www.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/farakka_bridge.jpg" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Farakka water release: FFWC says no chance of flood in next 7 days in Bangladesh</h2>
                                <p>The FFWC officials have noticed only seven centimetres water rise in the <a href="3" className="underline">Read More</a> </p>
                                <div className="card-actions justify-end">
                                    <button><AiFillLike className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                    <button><FaComment className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                    <button><FaShareNodes className="hover:text-green-600 duration-200 hover:text-xl" /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="divider lg:divider-horizontal"><RxCross2 className="text-2xl" /></div>

                <div className="card grid flex-grow">
                    <div className="flex flex-col items-center">
                        <div className="mt-10 text-center">
                            <h1 className="text-4xl font-bold">User Contributions</h1>
                            <p>Enabling Real-Time Insights Through User Contributions and Crowdsourcing</p>
                        </div>

                        {/* form */}
                        <div id="user-form" className="w-[450px] flex flex-col gap-5 mt-10">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Name" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" />
                            </label>

                            <textarea className="textarea textarea-bordered w-[450px]" placeholder="Enter Content">
                            </textarea>

                            <input type="file" className="file-input file-input-bordered w-[450px]" />

                            <button onClick={notify} className="btn btn-outline">Submit</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* newsfeed start  */}
            <ToastContainer />
        </div>
    );
};

export default Newsfeed;