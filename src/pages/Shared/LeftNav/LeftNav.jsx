import { useEffect, useState } from "react";
import Category from "./Category/Category";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-semibold">News Categories</h2>
            <div className="mt-4">
                {
                    categories.map(category => <Category key={category.category_id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default LeftNav;