import React from 'react'

function Factscard() {
    return (
        <>
            <div className='w-full m-2 h-90 border overflow-hidden rounded-3xl border-slate-400'>
                <div className='w-full rounded-3xl overflow-hidden'>
                    <img src="https://travila-nextjs.vercel.app/assets/imgs/page/homepage5/activity-big3.png" height='300px' alt="" />
                </div>
                <div className='bg-white rounded-3xl -mt-6 relative z-10'>
                    <div className='absolute right-5 -top-3 text-sm text-slate-500 font-semibold bg-white rounded-3xl p-1 px-5 border border-slate-400'>Fact inf</div>
                    <div className='p-4'>
                        <h4 className='font-semibold text-lg '>Heading of the fact</h4>
                        <p className='text-slate-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit.fugiat totam, dolores ipsam cumque minima, porro nesciunt. Possimus, fugit? Nobis quia maiores excepturi, vero deserunt facilis est quasi quod minus debitis blanditiis totam dicta atque magnam voluptatem illum!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Factscard