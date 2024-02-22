import React from "react";
import clsx from "clsx";



export const Button = ({variant, children, icon: Icon}) => {
    return (
        <button className={clsx("w-[140px] px-[9px] flex items-center gap-[10px] justify-center py-[9px] rounded-[8px]", {
            "bg-primary text-white":variant == "primary",
            " bg-secondary":variant == "secondary",
            "bg-primary w-[266px] h-[56px] text-white":variant == "third",
            "border-2 border-primary/50 text-primary bg-transparent w-[212px]":variant == "service",
        })}>
            {Icon ? Icon : ""}
            <span>
                {children}
            </span>
        </button>
    )
}