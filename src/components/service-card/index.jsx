import React from "react";
import { Button } from "../ui/button";



export const ServiceCard = ({icon, title, text}) => {


    return (
        <>
         <div className="w-[288px] md:w-[500px] lg:w-[288px] lg:h-[500px] pl-[16px] pr-[23px] pt-[20px] pb-[16px] bg-service mb-[12px] rounded-[16px] mt-[40px] flex flex-col items-center lg:bg-gradient-to-b from-cyan-500 to-white-500">
            <div className="flex items-center justify-between md:gap-[12px] md:justify-normal mb-[12px] lg:flex-col lg:mb-[16px]">
                <img src={icon} alt="icon" className="lg:w-[160px] lg:h-[160px] mb-[16px]" />
                <h2 className="text-xl font-bold lg:w-[212px] lg:text-center">{title}</h2>
            </div>
            <p className="text-left text-base text-card mb-[12px]">{text}</p>
            <Button variant="service">подробнее</Button>
         </div>
        </>
    )
}