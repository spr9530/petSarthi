import React from 'react';

function Imagebox1({ background }) {
  const bg = 'https://travila-nextjs.vercel.app/_next/static/media/waking-up.dd185fa8.png';

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Adjust the height as needed
          width: '100%', // Adjust the width as needed
        }}
        className='max-h-52 full m-2 rounded-2xl p-7 text-white'
      >
        <div className='h-full w-full flex flex-col justify-between '>
          <div>
            <h3 className='font-bold text-4xl'>subtext</h3>
          </div>
          <div>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
          </div>
          <button>
            view more
          </button>
        </div>
      </div>
    </>
  );
}

export default Imagebox1;
