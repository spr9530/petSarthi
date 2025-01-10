import React from "react";

const OvalWindow = () => {
  const activities = [
    { title: "Machu Picchu", tours: 356, image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage3/MachuPicchu.png" },
    { title: "Great Wall", tours: 356, image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage3/MachuPicchu.png" },
    { title: "Statue of Liberty", tours: 356, image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage3/MachuPicchu.png" },
    { title: "Taj Mahal", tours: 356, image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage3/MachuPicchu.png" },
    { title: "Opera House", tours: 356, image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage3/MachuPicchu.png" },
  ];

  return (
    
      <div className="w-full flex">
        <div className="flex justify-between w-full">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col items-center mb-10">
            <div className="w-28 h-36 rounded-full overflow-hidden shadow-md">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-semibold text-md">{activity.title}</h3>
            <p className="text-gray-500 text-sm">{activity.tours} Tours</p>
          </div>
        ))}
        </div>
      </div>
  );
};

export default OvalWindow;
