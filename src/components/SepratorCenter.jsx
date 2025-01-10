import React from 'react';

function SepratorCenter() {
  const bg = 'https://travila-nextjs.vercel.app/_next/static/media/bg-newyear.b5e60bec.png';

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}
        className="relative h-40 w-full p-6 py-36 flex items-center my-10 justify-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative flex flex-col gap-5 items-center text-white z-10">
          <h3 className="text-3xl font-bold">Headin to be come here as</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur exercitationem unde ipsum.
          </h5>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
            know more
          </button>
        </div>
      </div>
    </>
  );
}

export default SepratorCenter;
