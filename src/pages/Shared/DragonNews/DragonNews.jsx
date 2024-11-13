import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const DragonNews = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2 className="text-2xl font-semibold">Dragon News</h2>
            <div className="space-y-4 mt-4">
                {
                    data.data.map((news, idx) =><NewsCard key={idx} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default DragonNews;