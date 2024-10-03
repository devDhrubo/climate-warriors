import { GiRingingBell } from "react-icons/gi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/Image/logo.jpg";
const Header = () => {
    const alert = () => {
        Swal.fire({
            title: "Thanks For Contact!",
            text: "Our Team Will Contact with you soon",
            icon: "success"
        });
    }

   const navLink = <>
        <Link><li><a>Home</a></li></Link>
        <Link to="/newsfeed"><li><a>Newsfeed</a></li></Link>
        <Link to="/about"><li><a>About Us</a></li></Link>
        <Link to="/impact"><li><a>Impact Calculator</a></li></Link>
    </>

    return (
        
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            {navLink}
                        </ul>
                    </div>
                    <a href="/"><img src={logo} alt="Climate Warriors" className="h-14" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a onClick={alert} className="px-5 py-3 bg-red-500 text-white rounded-md text-sm cursor-pointer  flex items-center gap-1">Emergency <GiRingingBell /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;