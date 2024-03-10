/* eslint-disable no-unused-vars */
import { useState } from "react"
import { data } from "../utils/data"
import { toast } from "react-toastify"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Card = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const navigate = useNavigate()

    const [rent, setRent] = useState('')

return (
    <div className="flex w-full abt items- gap-4 pt-4 pb-4 justify-center  flex-col">
        <h6 className="text-2xl text-green-500"> INVEST TO EARN</h6>
        <div className="flex w-full abt flex-wrap gap-12 ">
            {data.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col rounded-lg p-1 items- bg-slate-200 abt card shadow-2xl">
                        <img src={item.img} className="w-full h-52" alt="" />
                        <div className="flex mt-3  justify-between  ">
                            <h6 className="text-xl ">{item.title}</h6>
                            <p>Price: Ksh{item.price}</p>
                        </div>
                        <div className="flex  justify-between  ">
                            <p>Daily ROI: {item.DRoi}%</p>
                            <h6>Duration : {item.duration} days</h6>
                        </div>
                        <div className="flex mt-3  justify-between  ">
                            <h6>Daily Return : Ksh{item.dReturn} </h6>
                            <p>Total Return: Ksh{item.tReturn}</p>
                        </div>
                        <button onClick={() => (
                            item.price > user?.result?.refer
                                ? toast.warning('insufficient funds, deposit to continue')
                                : navigate('/account')
                        )} className="bg-green-300 hover:bg-green-600 text-black font-bold py-2 px-4 rounded">
                            Rent
                        </button>

                    </div>
                )
            }
            )}
        </div>
    </div>
)
}

export default Card