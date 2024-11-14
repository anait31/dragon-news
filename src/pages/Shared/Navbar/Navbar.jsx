import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(logoutUser => {
                console.log('User logged Out', logoutUser.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="flex justify-between mb-8">
            <div>

            </div>
            <div className="space-x-4 text-xl">
                <Link to={'/'}>Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            <div className="flex items-center gap-2">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                        : <button className="bg-black rounded-md text-white py-2 px-4"><Link to={'/login'}>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;