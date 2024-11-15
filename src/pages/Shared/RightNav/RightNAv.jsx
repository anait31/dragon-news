import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import swimming from '../../../assets/swimming.png';
import classroom from '../../../assets/class.png';
import playground from '../../../assets/playground.png';
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const RightNAv = () => {
    const { loginByGoogle, loginByGithub, user } = useContext(AuthContext);

    return (
        <div>
            {
                user ? '' :
                    <div className="flex flex-col gap-2 mt-4">
                        <h2 className="text-2xl font-semibold">Login Wiht</h2>
                        <div className="">
                            <button onClick={loginByGoogle} className="flex items-center gap-1 btn w-full"><FaGoogle></FaGoogle> Login wiht Google</button>
                        </div>
                        <div className="">
                            <button onClick={loginByGithub} className="flex items-center gap-1 btn w-full"><FaGithub></FaGithub> Login with Github</button>
                        </div>
                    </div>
            }
            <h2 className="text-xl my-4">Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item bg-slate-50 w-full justify-start"><FaFacebookF></FaFacebookF> Facebook</button>
                <button className="btn join-item bg-slate-50 w-full justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item bg-slate-50 w-full justify-start"><FaInstagramSquare></FaInstagramSquare> Instagram</button>
            </div>
            <div className="bg-gray-200 mt-4 rounded-md">
                <h2 className="text-xl font-bold p-3">Q-Zone</h2>
                <div className="space-y-3">
                    <div className="flex justify-center">
                        <img src={swimming} alt="" />
                    </div>
                    <div className="flex justify-center">
                        <img src={classroom} alt="" />
                    </div>
                    <div className="flex justify-center">
                        <img src={playground} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNAv;