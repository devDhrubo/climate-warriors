import { IoMdHand } from "react-icons/io";

const Emergency = () => {
    return (
        <div className="container mx-auto mt-32">
            <div>
                <div
                    className="hero mt-10 min-h-screen rounded-3xl"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/Dk1wkSf/dn-W25bx-SQjep-ZQCv8-VQAx-F.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-80 rounded-3xl"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-5xl font-bold flex gap-2 justify-center">Hello Nasa <span><IoMdHand /></span></h1>
                            <p className="mb-5 text-lg">
                                We expect NASA satellites to review the situation
                                and determine if there is a potential flood risk.
                                If a significant number of people request an emergency
                                assistance through the platform,
                                we will coordinate with local leaders
                                and volunteers to provide support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;