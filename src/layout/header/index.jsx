import React from "react";
import logo from '../../assets/logo.svg'
import { Search } from '../../assets/icons/search'
import { Call } from '../../assets/icons/call'
import { Burger } from '../../assets/icons/burger'



export const Header = () => {


    return (
        <>
            <div className="container flex items-center justify-between md:justify-between md:gap-6 lg:justify-between">
                <img src={logo} alt="img" className="w-[23px] h-[28px]" />
                <div className="flex items-center gap-3 md:justify-between">
                    <div className="flex items-center gap-1">
                        <Search />
                        <input type="text" placeholder="Поиск по каталогу товаров" className="hidden md:block border-none mr-[200px] w-[214px]" />
                    </div>
                    <div className="flex md:gap-2">
                        <div className="flex items-center gap-2">
                            <Call />
                            <p className="hidden md:block md:ml-[44px] whitespace-nowrap ">+7 812 561 96 62</p>
                        </div>
                        <button className="md:hidden lg:hidden">
                            <Burger />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}