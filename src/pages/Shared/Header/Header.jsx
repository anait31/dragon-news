import moment from 'moment';
import logo from '../../../assets/logo.png'
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <div className='text-center space-y-3 py-5'>
            <div className='flex justify-center'>
                <img className='' src={logo} alt="" />
            </div>
            <h3 className='text-xl text-gray-500'>Journalism Without Fear or Favour</h3>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            <div className='flex bg-slate-200 rounded-r-md'>
                <button className='bg-pink-700 text-white px-4 py-2 rounded-l-md'>Latest</button>
                <Marquee>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ipsa?</Marquee>
            </div>
        </div>
    );
};

export default Header;