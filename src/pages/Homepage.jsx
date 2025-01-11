import React from 'react'
import Sidebar from '../components/Sidebar'
import Slider from '../components/Slider'
import data from '../assets/data'
import SearchCard from '../components/SearchCard'
import OvalWindow from '../layout/OvalWindow'
import Infobar from '../components/Infobar'
import Infobar2 from '../components/Infobar2'
import Imagebox1 from '../components/Imagebox1'
import Imagebox2 from '../components/Imagebox2'
import Imagebox3 from '../components/Imagebox3'
import Factscard from '../components/Factscard'
import SepratorCenter from '../components/SepratorCenter'
import Sectionheading from '../components/Sectionheading'
import Newslettersection from '../layout/Newslettersection'
import Why from '../layout/Why'

function Homepage() {
    return (
        <>
            <Sidebar />
            <div className='p-8 bg-slate-900 '></div>
            <section className='relative  h-[850px] bg-slate-900 '>
                <h2 className='text-white font-semibold text-[3.2rem] w-[70%] mx-auto text-center'>Compassionate Guidance for  Your Pet's Health and Well-Being</h2>
                <h4 className='text-white font-semibold text-[1.25rem] w-[80%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit molestias et. Quisquam, tempora dicta.</h4>
                <div className='h-full'>
                <Slider data={data} activeSlide={2}></Slider>
                </div>
                <div className='absolute w-full flex justify-center -bottom-20'>
                    <SearchCard></SearchCard>
                </div>
            </section>

            <section className='pt-20 pb-10'> <Infobar2 /> </section>
            <section className='mx-20 pt-10 pb-10'>
                <Sectionheading />
                <OvalWindow />
                <div className='flex w-full justify-between'>
                    <div className='w-[32%]'>
                        <Factscard />
                    </div>
                    <div className='w-[32%]'>
                        <Factscard />
                    </div>
                    <div className='w-[32%]'>
                        <Factscard />
                    </div>
                </div>
            </section>
            <section className='mx-20 py-10'>
                <Why />
            </section>
            <section className='mx-20 py-10'>


                <div className='w-full grid grid-cols-12 gap-6'>
                    <div className="col-span-5 max-h-96 flex items-center overflow-hidden rounded-3xl">
                        <img src="https://jooinn.com/images/cute-dog-1.jpg" alt="" />
                    </div>
                    <div className="col-span-7 flex items-center flex-col ">
                        <div className='text-left mt-5'>
                            <Sectionheading />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste illum ratione tempore soluta accusantium porro sed rem, ipsum dicta eaque molestiae eos delectus distinctio!</p>
                        </div>
                        <div className='flex gap-4'>

                            <div>
                                <div><Infobar /></div>
                                <div><Infobar /></div>
                            </div>
                            <div>
                                <div><Infobar /></div>
                                <div><Infobar /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SepratorCenter />
            <section className='mx-20 pt-10 pb-10'>
                <Sectionheading />

                <div className='flex justify-between'>
                    <Imagebox1></Imagebox1>
                    <Imagebox1></Imagebox1>
                </div>
                <div className='flex justify-between'>
                    <Imagebox2></Imagebox2>
                    <Imagebox2></Imagebox2>
                    <Imagebox2></Imagebox2>

                </div>
            </section>

            <section className='mx-20 pt-10 pb-10'>
                <Sectionheading />
                <div className='flex justify-between'>
                    <Imagebox3></Imagebox3>
                    <Factscard></Factscard>
                    <Factscard></Factscard>

                </div>
            </section>

            <section className='mx-20 py-10'>
                <div className='flex justify-center'>
                    <Newslettersection />
                </div>
            </section>

            <section className='flex py-10'>
                <div className='max-h-20 flex justify-center items-center'><img src="https://th.bing.com/th/id/OIP.Zp11-gs9LMEfLFqk_cQt2QHaEv?rs=1&pid=ImgDetMain" alt="" /></div>
                <div className='max-h-20 flex justify-center items-center'><img src="https://th.bing.com/th/id/OIP.Zp11-gs9LMEfLFqk_cQt2QHaEv?rs=1&pid=ImgDetMain" alt="" /></div>
                <div className='max-h-20 flex justify-center items-center'><img src="https://th.bing.com/th/id/OIP.Zp11-gs9LMEfLFqk_cQt2QHaEv?rs=1&pid=ImgDetMain" alt="" /></div>
                <div className='max-h-20 flex justify-center items-center'><img src="https://th.bing.com/th/id/OIP.Zp11-gs9LMEfLFqk_cQt2QHaEv?rs=1&pid=ImgDetMain" alt="" /></div>
                <div className='max-h-20 flex justify-center items-center'><img src="https://th.bing.com/th/id/OIP.Zp11-gs9LMEfLFqk_cQt2QHaEv?rs=1&pid=ImgDetMain" alt="" /></div>
                <div className='max-h-20 flex justify-center items-center'><img src="https://th.bing.com/th/id/OIP.Zp11-gs9LMEfLFqk_cQt2QHaEv?rs=1&pid=ImgDetMain" alt="" /></div>

                <div className='max-h-20 flex justify-center items-center'><img src="https://th.bing.com/th/id/OIP.Zp11-gs9LMEfLFqk_cQt2QHaEv?rs=1&pid=ImgDetMain" alt="" /></div>
            </section>
        </>
    )
}

export default Homepage