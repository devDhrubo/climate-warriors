import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Root = () => {
    return (
        <div className="font-inter">
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;