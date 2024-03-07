import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="flex footer w-full items-center bg-slate-900 h-16 p-2 mb-2 pb-2 shadow-lg justify-around">
            <Link to="/">
                <h6 className=" cursor-pointer text-white font-bold flex flex-col items-center ">
                    <AiFillHome color="green" size={30} /> Home
                </h6>
            </Link>
            <Link to="/refferal">
                <h6 className="text-lg cursor-pointer text-white font-bold flex flex-col items-center ">
                    <BsFillPeopleFill color="green" size={30} /> Referral
                </h6>
            </Link>
            <Link to="/account">
                <h6 className="text-lg cursor-pointer text-white font-bold flex flex-col items-center ">
                    <RiAccountCircleFill color="green" size={30} /> Account
                </h6>
            </Link>
          
        </div>
    )
}

export default Footer