import { Outlet } from "react-router-dom";
import DragonNews from "../Shared/DragonNews/DragonNews";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNAv from "../Shared/RightNav/RightNAv";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="md:grid md:grid-cols-4 md:gap-4">
                <div className="">
                    <LeftNav></LeftNav>
                </div>
                <div className="md:col-span-2">
                    <Outlet></Outlet>
                </div>
                <div className="">
                    <RightNAv></RightNAv>
                </div>
            </div>
        </div>
    );
};

export default Home;