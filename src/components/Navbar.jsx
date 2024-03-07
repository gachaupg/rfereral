import { IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from '../redux/features/authSlice';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex fixed w-full items-center bg-slate-900 h-14 shadow-lg justify-around">
        <h4 className="text-3xl text-white font-bold ">
            Profit Place
        </h4>
        {/* <h4 className="text-white">
            07000000000
        </h4> */}
<p>
  {user ? (
    <h4 className="text-white flex mt-4 gap-2 items-center">
      {user?.result?.name} <IoLogOut 
      onClick={() => {
        dispatch(setLogout(null));
        toast.danger('Logged out!', { position: 'top-left' });
        navigate('/');
      }}
      className="cursor-pointer"/>
    </h4>
  ) : (
    <Link to='/login'>
      <h4 className="text-white cursor-pointer mt-4">
      Login
    </h4>
    </Link>
    
  )}
</p>
    </div>
  )
}

export default Navbar