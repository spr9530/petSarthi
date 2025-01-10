import React from 'react'

function Imagebox3() {
    const bg = 'https://travila-nextjs.vercel.app/_next/static/media/bg-activity.6ff18c6c.png'
  return (
    
    <>
    <div
     style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: '#8cd8e9',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // width: '100%', // Adjust the width as needed
      }}
      className='h-90 full m-2 rounded-3xl p-6'
    >
        <div className='w-full h-[40%] flex flex-col gap-5 items-start justify-evenly'>
            <h5 className='font-semibold'>xyz heading here</h5>
            <p className='font-bold text-xl'>Lorem ipsum dolor sit amet consectetur </p>
            <button>know more</button>
        </div>
    </div>
    </>
  )
}

export default Imagebox3