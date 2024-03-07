/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { RxCross2 } from "react-icons/rx";
import { RiArrowRightSFill } from "react-icons/ri";
import { useSelector } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 3,
};
const Accounts = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [moneu, setMoneu] = React.useState(0)
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = (e) => {
        e.preventDefault()
        setOpen2(true);

    }
    const handleClose2 = () => setOpen2(false);
    return (
        <div className=' text-black pt-20 flex w-full items-center p-3 justify-center flex-col'>
            {open2 && (
                <Modal

                    keepMounted
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >

                    <Box style={{ width: '45%' }} className='flex abt flex-col gap-2 rounded-xl' sx={style}>
                        <div className='flex items-center w-full justify-between'>
                            <img src="data:image/png;base64,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" alt="" />
                            <RxCross2 onClick={handleClose2} className='cursor-pointer' />
                        </div>
                        <div style={{ width: '80%' }} className="flex abt rounded-lg shadow-xl p-3 justify-between bg-slate-800  flex-col text-white ">
                            <h5 className='flex justify-between'>Pay amount    <h5>ksh{moneu}.00</h5></h5>
                            <h5 className='flex justify-between'>Send to    <h5>peter</h5></h5>
                            <h5 className='flex justify-between'>Phone Number<h5>070000000</h5></h5>

                        </div>
                        <div>
                            <img src="https://web.kineticrango.com/upload/20240207/T20240207091314_16022_thu.jpeg" alt=""/>
                        </div>
                        <ul>
                            <li>● Minimum amount to deposit is Ksh100</li>
                            <li>● If the fund doesn't reflect to your account seek help from support</li>
                        </ul>
                        <form className='flex flex-col gap-2' action="">
                            <input className='h-10 text-black w-full border rounded-lg' type="text" required placeholder="Enter the mpesa code" />
                            <button className="bg-green-400 w-full p-2 rounded-lg">Verify</button>
                        </form>

                        <button>Check transactions</button>
                    </Box>
                </Modal>
            )}
            {open && (
                <Modal

                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >

                    <Box style={{ width: '45%' }} className='flex abt flex-col gap-2 rounded-xl' sx={style}>
                        <div className='flex items-center w-full justify-between'>
                            <h1>Deposit panel</h1>
                            <RxCross2 onClick={handleClose} className='cursor-pointer' />
                        </div>
                        <div style={{ width: '80%' }} className="flex abt rounded-lg shadow-xl p-3 justify-between bg-slate-800  flex-col text-white ">
                            <h5>ksh 00.00</h5>
                            <p>Available balance</p>
                        </div>
                        <ul>
                            <li>● Minimum amount to deposit is Ksh100</li>
                            <li>● If the fund doesn't reflect to your account seek help from support</li>
                        </ul>
                        <form className='flex flex-col gap-2' action="">
                            <input onChange={(e) => setMoneu(e.target.value)} className='h-10 text-black w-full border rounded-lg' type="number" placeholder="Enter amount" />
                            <button onClick={handleOpen2} className="bg-green-400 w-full p-2 rounded-lg">Deposit</button>
                        </form>

                        <button>Check transactions</button>
                    </Box>
                </Modal>
            )}
            {open1 && (
                <Modal

                    keepMounted
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >

                    <Box style={{ width: '45%' }} className='flex abt flex-col gap-2 rounded-xl' sx={style}>
                        <div className='flex items-center w-full justify-between'>
                            <h5>Withdraw  panel</h5>
                            <RxCross2 onClick={handleClose1} className='cursor-pointer' />
                        </div>
                        <div style={{ width: '80%' }} className="flex abt rounded-lg shadow-xl p-3 justify-between bg-slate-800  flex-col text-white ">
                            <h5>ksh 00.00</h5>
                            <p>Available balance</p>
                        </div>
                        <ul>
                            <li>● Processing Time is 15 minutes maximum</li>
                            <li>   ● Daily withdrawal from 10:00am to 6:00pm</li>
                            <li>● Minimum withdrawal: Ksh275</li>
                        </ul>
                        <form className='flex flex-col gap-2' action="">
                            <input className='h-10 text-black w-full border rounded-lg' type="number" placeholder="Enter amount" />
                            <button className="bg-green-400 w-full p-2 rounded-lg">Withdraw</button>
                        </form>

                        <button>Check transactions</button>
                    </Box>
                </Modal>
            )}

            <h6 className="text-2xl mb-2 text-green-500">
                My Accounts
            </h6>
            <div style={{ width: '90%' }} className="flex abt rounded-lg shadow-xl p-3 justify-between bg-slate-800  flex-wrap items-center">
                <div style={{ width: '45%' }} className="flex abt items- pl-4 flex-col text-white gap-2 justify-center w-64 ">
                    <h6>IDENTIFIER: 05856846365</h6>
                    <p>Balance: ksh 30</p>
                    <h6>ksh 30.00</h6>
                    <button onClick={handleOpen} className="bg-green-400 p-2 rounded-lg">Deposit</button>
                </div>
                <div className="flex flex-col abt items-center justify-center pl-1 text-white">
                    <h6>Return on Investment</h6>
                    <div className="flex p-4 text-black items-center justify-center rounded-lg border  w-64 abt bg-slate-100 shadow-2xl">
                        ksh00.00
                    </div>
                    <h6>Referral Revenue</h6>
                    <div className="flex p-4 text-black items-center justify-center rounded-lg border abt w-64 bg-slate-100 shadow-2xl">
                        ksh00.00
                    </div>

                </div>
            </div>
            <div style={{ width: '90%' }} className="flex abt mb-3 gap-7 p-3 justify-between mt-6 flex-wrap items-center">
                <div onClick={handleOpen1} className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>Withdraw Now</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />
                <div onClick={handleOpen} className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>Deposit Now</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />
                <div className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>Transaction History</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />
                <div className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>Referral program</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />
                <div className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>My Whatsapp Group</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />

                <div className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>Claim your  Earning</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />
                <div className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>Support</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />
                <div className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>Subscribe to our Channel</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />
                <div onClick={handleOpen} className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>About us</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />
                <div onClick={handleOpen} className='flex w-full abt items-center border p-1 rounded-xl shadow-2xl cursor-pointer justify-between'>
                    <h6>Log out</h6>
                    <RiArrowRightSFill size={36} />
                </div>
                <hr style={{ height: '' }} className='w-full bg-black' />
            </div>
        </div>
    )
}

export default Accounts