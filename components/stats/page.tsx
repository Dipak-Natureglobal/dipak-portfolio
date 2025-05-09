"use client";
import CountUp from "react-countup"

const stats=[
    {
        num:2,
        text:"Years of experience"
    },
    {
        num:10,
        text:"Projects Completed"
    },
    {
        num:15,
        text:"Technical Skills"
    },
    {
        num:200,
        text:"LeetCode Solved"
    }

]
const Stats=()=>{
    return(
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 container">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none">
                    {stats.map((Item,index)=>
                    {
                        return(
                            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                <CountUp  end={(Item.num)}  duration={5} delay={2} className="text-lg xl:text-6xl font-extrabold text-[#22c55e] dark:text-white"/>
                                <p className={`${Item.text.length < 15 ? "max-w-[100px]" : "max-w-[120px]"} leading-snug dark:text-white/80  text-black/90`}>{Item.text} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
      
    );
};
export default Stats;