import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Category = ({ category }) => {
    const { category_name, category_id } = category;
    return (
        <div>
            <button className="btn w-full mb-2">
                <NavLink to={`/category/${category_id}`}>{category_name}</NavLink>
            </button>
        </div>
    );
};

export default Category;

Category.propTypes = {
    category: PropTypes.object,
}