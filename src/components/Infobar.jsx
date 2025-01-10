import React from 'react'

function Infobar() {
  return (
    <>
    <div className='border-slate-400 p-2 w-full justify-center items-center'>
        <div className='flex gap-2 '>
            <div>
                <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9214366.jpg" width='100px' alt="" />
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
                <div className='w-full'><h5 className='text-left text-md w-full'>Temporary text</h5></div>
                <div><p className='text-sm'>Lorem ipsum dolor sit, amet consectetur </p></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Infobar