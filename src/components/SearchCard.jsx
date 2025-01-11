import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import ButtonCapsule from './ButtonCapsule';
import { IoLocation } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

function SearchCard() {
    const [slectedType, setSelectedType] = useState('onSite')
    return (
        <>
            <div
                className="searchCardContainer border-[1px] bg-white border-slate-300 p-8 w-[88%] mx-auto rounded-lg mb-4 bx-shadow-1">
                <div
                    className="sc-innerOption flex flex-col gap-5 w-full">
                    <div
                        className="sc-in-1 w-full">
                        <ul className='w-full flex'>
                            <li className={`${slectedType == 'onSite' ? 'bg-black text-white' : 'text-black'} rounded-full px-6 font-medium py-2 `}>On-Site</li>
                            <li className={`${slectedType == 'clinic' ? 'bg-black text-white' : 'text-black'} rounded-full px-6 font-medium py-2 `}>Clinic</li>
                            <li className={`${slectedType == 'hospital' ? 'bg-black text-white' : 'text-black'} rounded-full px-6 font-medium py-2 `}>Hospital</li>
                        </ul>
                    </div>
                    <div
                        className="sc-in-2  w-full border-[1px] border-slate-300 rounded-2xl p-8">
                        <div className='searchCardInput flex w-full justify-between'>
                            <div className="sc-input relative flex flex-col gap-1 border-r border-slate-400 px-5 justify-center w-[40%]">
                                <label className='text-md text-gray-800 font-semibold' >
                                    Search

                                </label>
                                <div className='flex w-full items-center outline-none '>
                                <IoLocation color={'text-gray-600'} />
                                    <input className='w-full outline-none' type="text" name="location" placeholder='Search By Name, City Or Hospital' />
                                    <FaSearch></FaSearch>
                                </div>

                            </div>
                            <div className="sc-input relative flex flex-col gap-1 border-r border-slate-400 px-5 w-[20%] justify-center">
                                <label className='text-md text-gray-800 font-semibold' >
                                    CheckUp Date
                                </label>
                                <input className='outline-none' type="date" name="date" placeholder='' />
                            </div>
                            <div className="sc-input relative flex flex-col gap-1 border-r border-slate-400 px-5 w-[20%] justify-center">
                                <label className='text-md text-gray-800 font-semibold' htmlFor=""> Pet Type
                                </label>
                                <select className='outline-none' name="petType" id="">
                                    <option value="none" disabled selected >Pet Type</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="Cow">Cow</option>
                                </select>
                            </div>
                            <div className='flex justify-center w-[20%] items-center'>
                            
                            <ButtonCapsule content={'Search'} icons={<IoSearchSharp />}></ButtonCapsule>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCard