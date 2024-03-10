import { useSelector } from "react-redux";
import Card from "../components/Card"
import Hero from "./hero"

const Home = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    return (
        <div className="flex items-center justify-between flex-col">
            <Hero />
            <div className="wrapper flex flex-col items- justify-center">
               <h5 className="text-2xl caret-lime-400 mb-3">My Statistics</h5>
            <div className="abt h-32 flex w-full items-center flex-wrap text-white justify-between p-2 rounded-lg bg-slate-500">
                <div className="flex flex-col p-1 items-start">
                    <h6>INTRODUCTION {user?.result?._id}</h6>

                    <div className="flex items- gap-2 justify-center w-64 ">
                        <p>Balance:</p>
                        <h6 className='pt-1'>ksh {user?.result?.amount + user?.result?.refer}</h6>
                    </div>
                </div>
                <button className="bg-green-300 hover:bg-green-600 text-black font-bold py-2 px-4 rounded">
                    Click to earn
                </button>
            </div>
             <Card/>

            </div>
        </div>
    )
}

export default Home