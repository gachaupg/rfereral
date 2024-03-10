/* eslint-disable no-unused-vars */
import { IoCopyOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Refferal = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const navigate = useNavigate()
    const [referral, setReferral] = useState('')
    const [textToCopy, setTextToCopy] = useState(`http://localhost:5173/register?id=${user?.result?._id}`);
    const [copyStatus, setCopyStatus] = useState('');
    console.log(user);
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopyStatus('Copied to clipboard!');
            })
            .catch(() => {
                setCopyStatus('Copy failed!');
            });
    };
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [navigate, user])
    return (
        <>
            <div className='abt refer text-black  flex w-full items- p-3 justify-center pt-64 flex-col'>

            </div>
            <h1 className='text-xl font-bold abt text-center'>Make money through Refferals</h1>
            <div className="flex flex-col w-full items-center justify-center">
                <div style={{ width: "80%" }} className="flex flex-col p-3 justify-center border rounded-lg abt bg-slate-500 ">
                    <p className="flex  items- flex-wrap gap-24 text-white">
                        <img src="https://spaceskyx.cloud/uploads/material/b1.png" alt="" />
                        <p>
                            Refer 4 ACTIVE friends and get Ksh400 direct to your account.
                        </p>
                    </p>
                    <p className="flex  items- flex-wrap gap-24 text-white">
                        <img src="https://spaceskyx.cloud/uploads/material/b2.png" alt="" />
                        <p>
                            Refer 9 ACTIVE friends and get Ksh1,000 direct to your account.
                        </p>
                    </p>
                    <p className="flex  items- flex-wrap gap-24 text-white">
                        <img src="https://spaceskyx.cloud/uploads/material/b3.png" alt="" />
                        <p>
                            Refer 30 ACTIVE friends and get Ksh5,000 direct to your account
                        </p>
                    </p>
                    <hr />
                    <h3 className="text-white">Referral link</h3>
                    <p className="flex  items-center flex-wrap justify-between p-2 text-white">

                        <p>
                            {textToCopy}
                        </p>
                        <IoCopyOutline size={30} className="text-white cursor-pointer " onClick={handleCopy} />

                    </p>
                    <p className="text-center text-red-800">{copyStatus}</p>
                    <hr />
                    <div className="flex flex-wrap gap-3 p-3 items-center abt ">
                        <div style={{ width: '45%' }} className="flex abt flex-col items-center justify-center bg-white border shadow-2xl rounded-lg	p-4">
                            <h6>Amount of income</h6>
                            <h5>ksh {user?.result?.refer}</h5>
                        </div>
                        <div style={{ width: '45%' }} className="flex abt flex-col items-center justify-center bg-white border shadow-2xl rounded-lg	p-4">
                            <h6>Toadys income</h6>
                            <h5>ksh 0.00</h5>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Refferal