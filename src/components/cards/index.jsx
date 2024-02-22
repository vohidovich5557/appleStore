import React from "react";
import {Star} from '../../assets/icons/star'
import {Like} from '../../assets/icons/like'
import {Vector} from '../../assets/icons/vector'
import { Button } from "../ui/button";
import {Iconkor} from '../../assets/icons/korzina'



export const Productcard = ({img, name, price, garant, oldPrice, buttonPrice }) => {


    return (
        <>
       <div className="pl-[18px] pr-[15px] pt-[18px] pb-[16px] rounded-[8px] shadow-md flex flex-col items-center mb-[8px]">
        <div className="flex items-center gap-6 mb-[18px]">
        <div className="flex items-center gap-1">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
        <p className="text-sm text-primary">14</p>
        <div className="flex items-center gap-2">
            <Like />
            <Vector />
        </div>
        </div>
        <img src={img} alt="img_pohone"/>
        <h2 className="text-center text-lg font-bold mb-[12px]">{name}</h2>
        <div className="flex items-center gap-3 mb-[5px]">
            <p className="text-sm text-card">{price}</p>
            <p className="text-sm text-card">{garant}</p>
        </div>
        <div className="flex items-center gap-7 mb-[5px] lg:hidden">
            <p>{oldPrice}</p>
            <Button variant="primary">{buttonPrice}</Button>
        </div>
        <div className="hidden md:hidden lg:block">
        <Button variant="third" icon={<Iconkor />}>в корзину</Button>
        </div>
        <div className="flex items-center gap-6">
            <p>Хочу дешевле</p>
            <p>Купить в 1 клик</p>
        </div>
       </div>
        </>
    )
}