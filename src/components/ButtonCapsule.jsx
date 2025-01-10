import React from 'react'

function ButtonCapsule({content}) {
  return (
    <>
    <div className='px-16 py-3 rounded-3xl bg-slate-900 text-white'>
        {content}
    </div>
    </>
  )
}

export default ButtonCapsule