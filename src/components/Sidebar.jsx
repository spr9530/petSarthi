import React, { useState } from 'react'
// import logo from '../logo.png';

// icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSun, FaMoon } from 'react-icons/fa';

const menuItems = [
    {
        icons: <IoHomeOutline size={22} />,
        label: 'Home'
    },
    {
        icons: <FaProductHunt size={22} />,
        label: 'Products'
    },
    {
        icons: <MdOutlineDashboard size={22} />,
        label: 'Dashboard'
    },
    {
        icons: <CiSettings size={22} />,
        label: 'Setting'
    },
    {
        icons: <CiSettings size={22} />,
        label: 'Setting'
    },
    {
        icons: <CiSettings size={22} />,
        label: 'Setting'
    },
    {
        icons: <IoLogoBuffer size={22} />,
        label: 'Log'
    },
    {
        icons: <TbReportSearch size={22} />,
        label: 'Report'
    }
]

export default function Sidebar() {

    const [open, setOpen] = useState(true)
    const [view, setView] = useState('light')

    return (
        <div className='h-screen p-2 fixed z-20'>
            <nav className={`shadow-md h-full p-2 flex flex-col duration-500 ${view == "dark" ? 'bg-slate-900' : 'bg-white text-slate-900'} text-white ${open ? 'w-60' : 'w-16'}  rounded-lg`}>

                {/* Header */}
                <div className=' px-3 py-2 h-20 flex justify-between items-center'>
                    {/* <img src={logo} alt="Logo" className={`${open ? 'w-10' : 'w-0'} rounded-md`} /> */}
                    <div><MdMenuOpen size={34} className={` duration-500 cursor-pointer ${!open && ' rotate-180'}`} onClick={() => setOpen(!open)} /></div>
                </div>

                {/* Body */}

                <ul className='flex-1 h-[75%] overflow-scroll scrollBarNone'>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li key={index} className={`px-3 py-2 my-1 hover:bg-blue-800 ${view == 'light' ? 'hover:text-white' : ''} rounded-md duration-50 cursor-pointer flex gap-2 items-center relative group`}>
                                    <div className='text-sx'>{item.icons}</div>
                                    <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden text-sm`}>{item.label}</p>
                                    <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
     w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
    `}>{item.label}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* footer */}
                <div className='flex items-center gap-2 px-3 py-2'>
                    <div><FaUserCircle size={30} /></div>
                    <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
                        <p>Saheb</p>
                        <span className='text-xs'>saheb@gmail.com</span>

                    </div>
                </div>
                {open ?
                    <div className='bg-slate-800 p-2 rounded-full flex justify-evenly transform duration-200 transition-all'>
                        <div
                            onClick={() => setView('dark')}
                            className={`${view == 'dark' ? 'bg-slate-700' : 'text-slate-500'} cursor-pointer transform duration-200 transition-all w-[48%] text-center rounded-full p-1 px-5 flex text-md gap-1 items-center`}><FaMoon /> Dark</div>
                        <div
                            onClick={() => setView('light')}
                            className={`${view == 'light' ? 'bg-white text-slate-700' : ''} cursor-pointer transform duration-200 transition-all w-[48%] text-center rounded-full p-1 px-5 flex text-md gap-1 items-center`}><FaSun className='text-yellow-500' /> Light</div>
                    </div>
                    :

                    <div className='w-12 h-12 rounded-full p-2'>
                        <div className='rounded-full flex justify-center items-center'>
                            {view == 'dark' ? <div className='bg-slate-700 p-2 rounded-full'><FaMoon size={24} /></div> : <div className='bg-white text-slate-700 p-2 rounded-full'><FaSun className='text-yellow-500' size={24} /></div>}
                        </div>
                    </div>

                }

            </nav>
        </div>
    )
}
