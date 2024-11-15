/* eslint-disable react/prop-types */

import { FaShareAlt, FaRegBookmark, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, title, author, rating, total_view, thumbnail_url, details } = news;

    return (
        <div className="card bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        // eslint-disable-next-line react/prop-types
                        src={author.img}
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-2">
                        <p className="font-semibold">{author.name}</p>
                        <p className="text-gray-500 text-sm">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <FaRegBookmark className="text-gray-500 cursor-pointer" />
                    <FaShareAlt className="text-gray-500 cursor-pointer" />
                </div>
            </div>

            <h2 className="mt-4 font-semibold text-lg">{title}</h2>

            <div className="mt-3">
                <img src={thumbnail_url} alt="Thumbnail" className="w-full h-96 object-cover rounded-lg" />
            </div>

            <p className="mt-3 text-gray-600 text-sm">
                {details.slice(0, 100)}...
                <Link to={`/news/${_id}`} className="text-blue-500 cursor-pointer">Read More</Link>
            </p>

            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                    <div className="flex items-center text-yellow-500">
                        <FaStar />
                        <p className="ml-1 font-semibold">{rating.number}</p>
                    </div>
                    <p className="ml-2 text-gray-500">{rating.badge}</p>
                </div>
                <div className="flex items-center text-gray-500">
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;