"use client";
import { useSwiper } from "swiper/react";
import { useEffect } from "react";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"
const WorkSliderBtns=({conatainStyles, btnStyles})=>
{
   const swiper =useSwiper();
   useEffect(() => {
    const interval = setInterval(() => {
        {swiper.isEnd ? swiper.slideTo(0) : swiper.slideNext()}
    }, 10000);
    return () => clearInterval(interval);
}, [swiper]);
return(
    <div className={conatainStyles}>
        <button className={btnStyles} onClick={()=>swiper.slidePrev()}>
            <PiCaretLeftBold />
        </button>
        <button className={btnStyles} onClick={()=> swiper.slideNext()}>
            <PiCaretRightBold />
        </button>
    </div>
)
}
 export default WorkSliderBtns;