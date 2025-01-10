import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import ButtonCapsule from './ButtonCapsule';

function SearchCard() {
    const [slectedType, setSelectedType] = useState('onSite')
    return (
        <>
            <div
                className="searchCardContainer border-[1px] bg-white border-slate-300 p-6 w-[88%] mx-auto rounded-lg mb-4 bx-shadow-1">
                <div
                    className="sc-innerOption flex flex-col gap-5 w-full">
                    <div
                        className="sc-in-1 w-full">
                        <ul className='w-full flex'>
                            <li className={`${slectedType == 'onSite' ? 'bg-black text-white' : 'text-black'} rounded-full px-3 py-1`}>On-Site</li>
                            <li className={`${slectedType == 'clinic' ? 'bg-black text-white' : 'text-black'} rounded-full px-3 py-1`}>Clinic</li>
                            <li className={`${slectedType == 'hospital' ? 'bg-black text-white' : 'text-black'} rounded-full px-3 py-1`}>Hospital</li>
                        </ul>
                    </div>
                    <div
                        className="sc-in-2  w-full border-[1px] border-slate-300 rounded-lg p-5">
                        <div className='searchCardInput flex w-full justify-between'>
                            <div className="sc-input relative flex flex-col gap-1 border-r border-slate-400 px-5 justify-center w-[40%]">
                                <label className='text-sm text-gray-600 font-semibold' >
                                    Search

                                </label>
                                <div className='flex w-full items-center outline-none '>
                                    <input className='w-full outline-none' type="text" name="location" placeholder='Search By Name, City Or Hospital' />
                                    <FaSearch></FaSearch>
                                </div>

                            </div>
                            <div className="sc-input relative flex flex-col gap-1 border-r border-slate-400 px-5 w-[20%] justify-center">
                                <label className='text-sm text-gray-600 font-semibold' >
                                    ChechUp Date
                                </label>
                                <input className='outline-none' type="date" name="date" placeholder='' />
                            </div>
                            <div className="sc-input relative flex flex-col gap-1 border-r border-slate-400 px-5 w-[20%] justify-center">
                                <label className='text-sm text-gray-600 font-semibold' htmlFor=""> Pet Type
                                </label>
                                <select className='outline-none' name="petType" id="">
                                    <option value="none" disabled selected >Pet Type</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="Cow">Cow</option>
                                </select>
                            </div>
                            <div className='flex justify-center w-[20%]'>
                            <ButtonCapsule content={'Search'}></ButtonCapsule>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCard