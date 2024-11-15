import { Link, useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNAv from "../Shared/RightNav/RightNAv";

const NewsDetails = () => {
    const news = useLoaderData();
    const { title, image_url, details } = news.data[0];
    // console.log(_id, image_url, title, author, rating, total_view, thumbnail_url, details);

    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                    <h2 className="mb-3 text-2xl font-semibold">Dragon News</h2>
                    <div className="border-2 rounded-md p-3">
                        <img src={image_url} alt="" />
                        <h3 className="text-2xl py-3">{title}</h3>
                        <p className="mb-3">{details}</p>
                        <Link className="bg-purple-600 text-white px-3 py-1 rounded-md">All news in this category</Link>
                    </div>
                    <div className="mt-7">
                        <h3 className="text-xl mb-4 font-semibold">Editors Insight</h3>
                        <div className="min-h-[311px] border-2 rounded-md flex items-center justify-center">
                            <p className="text-2xl">No Items Available</p>
                        </div>
                    </div>
                </div>
                <div>
                    <RightNAv></RightNAv>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;