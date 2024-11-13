import { Link } from "react-router-dom";
import userImg from '../../../assets/demo-user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between mb-8">
            <div>

            </div>
            <div className="space-x-4 text-xl">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            <div className="flex items-center gap-2">
                <img src={userImg} alt="" />
                <button className="bg-black text-white py-2 px-4">Login</button>
            </div>
        </div>
    );
};

export default Navbar;