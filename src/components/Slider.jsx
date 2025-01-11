import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';


export default (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };

  return (
    <>
      {/* carousel */}
     <div className="h-[40%] flex flex-col items-center  pl-[240px] overflow-hidden">
     <div className="slideC h-full w-[70%]">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide h-[100%] w-[70%] mx-auto"
              style={{

                backgroundColor: `white`,
                background: item.background,
                boxShadow: `0 5px 20px 30`,
                ...getStyles(i)
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i)
              }}
              
            />
          </React.Fragment>
        ))}
      </div>
      
     </div>
     <div className="btns w-full text-white flex justify-center items-center mt-8 mx-auto">
        <FaChevronLeft  onClick={prev}/>
        <FaChevronRight onClick={next} />
      </div>
      <div className="w-full flex p-6 justify-center gap-5">
        <button className="w-52 rounded-full text-2xl font-semibold p-3 bg-yellow-500 flex gap-2 items-center justify-center">Book Now <FaArrowRight></FaArrowRight> </button>
        <button className="w-52 rounded-full text-2xl font-semibold p-3 bg-yellow-500 flex gap-2 items-center justify-center">Book Now <FaArrowRight></FaArrowRight> </button>
      </div>
      {/* carousel */}

      
    </>
  );
};

const SliderContent = (props) => {
  return (
    <div className="sliderContent w-full">
      {/* <h2>{props.title}</h2>
      <p>{props.desc}</p> */}

    </div>
  );
};
