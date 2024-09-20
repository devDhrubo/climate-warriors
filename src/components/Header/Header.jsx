import { Link } from "react-router-dom";

const Header = () => {

   const navLink = <>
        <Link><li><a>Home</a></li></Link>
        <Link><li><a>Flood Risk Analysis</a></li></Link>
        <Link><li><a>About Us</a></li></Link>
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
                    <a className="text-xl font-bold">Climate <span className="italic">Warriors</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="px-5 py-3 bg-black text-white rounded-md text-sm cursor-pointer">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Header;