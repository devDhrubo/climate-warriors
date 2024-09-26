import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import image1 from "../../assets/Image/web-developer.jpg"

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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container lg:mx-20">
                <div className="card bg-base-100 w-72 shadow-xl mt-10">
                    <figure className="px-5 pt-5">
                        <img
                            src={image1}
                            alt="Web Developer"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tanveer Sarker</h2>
                        <p>Team Lead</p>
                        <div className="flex items-center gap-2">
                            <a href="#"><FaFacebook></FaFacebook></a>
                            <a href="#"><FaLinkedin></FaLinkedin></a>
                            <a href="#"><FaGithub></FaGithub></a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-72 shadow-xl mt-10">
                    <figure className="px-5 pt-5">
                        <img
                            src={image1}
                            alt="Web Developer"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Md Momrul Hasan</h2>
                        <p>Script Writer</p>
                        <div className="flex items-center gap-2">
                            <a href="#"><FaFacebook></FaFacebook></a>
                            <a href="#"><FaLinkedin></FaLinkedin></a>
                            <a href="#"><FaGithub></FaGithub></a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-72 shadow-xl mt-10">
                    <figure className="px-5 pt-5">
                        <img
                            src={image1}
                            alt="Web Developer"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Ehteshamul Haque Adit</h2>
                        <p>Video Editor</p>
                        <div className="flex items-center gap-2">
                            <a href="#"><FaFacebook></FaFacebook></a>
                            <a href="#"><FaLinkedin></FaLinkedin></a>
                            <a href="#"><FaGithub></FaGithub></a>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-72 shadow-xl mt-10">
                    <figure className="px-5 pt-5">
                        <img
                            src={image1}
                            alt="Web Developer"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shahriar Alif</h2>
                        <p>Graphic Designer</p>
                        <div className="flex items-center gap-2">
                            <a href="#"><FaFacebook></FaFacebook></a>
                            <a href="#"><FaLinkedin></FaLinkedin></a>
                            <a href="#"><FaGithub></FaGithub></a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-72 shadow-xl mt-10">
                    <figure className="px-5 pt-5">
                        <img
                            src={image1}
                            alt="Web Developer"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dolan Dhrubo Ray</h2>
                        <p>Web Developer</p>
                        <div className="flex items-center gap-2">
                            <a href="#"><FaFacebook></FaFacebook></a>
                            <a href="#"><FaLinkedin></FaLinkedin></a>
                            <a href="#"><FaGithub></FaGithub></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;