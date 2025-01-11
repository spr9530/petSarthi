import React from 'react'

function ButtonCapsule({content, icons}) {
  return (
    <>
    <div className='px-14 py-3 flex items-center justify-center gap-3 rounded-3xl bg-slate-900 text-white'>
        {icons}{content}
    </div>
    </>
  )
}

export default ButtonCapsule