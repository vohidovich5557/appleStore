import React from "react";
import { MainLayout } from '../../layout/main-layout'
import { Banner } from '../../assets/icons/banner'
import bannerImg from '../../assets/banner_img.png'
import { cardData, cardData2, serviceData } from "../../data/home";
import Ihpone14 from '../../assets/iphone__14.png'
import { Productcard } from "../../components/cards";
import { Button } from "../../components/ui/button";
import { ServiceCard } from "../../components/service-card";

export const Home = () => {


    return (
        <>
            <MainLayout>
                <section className="banner">
                    <div className="container bg-sky-300/50 flex flex-col items-center mt-1 bg-[rgb(208, 234, 252) pt-4] md:overflow-hidden mb-4">
                        <Banner />
                        <h3 className="text-xl text-banner"><span className="text-sm text-banner mr-1">от</span>137 900 ₽</h3>
                        <img src={bannerImg} alt="img-iphone" className="mt-[16px] md:w-[269px] md:h-[324px] md:mt-[40px]" />
                    </div>
                </section>
                <section className="hero">
                    <div className="container flex flex-col items-center">
                        <h2 className="text-black text-2xl md:text-4xl mb-[40px]">купить iPhone в Москве</h2>
                    </div>
                    <div className=" container flex flex-col">
                        <p className="w-[139px] text-primary whitespace-nowrap text-left mb-[16px]">Самое популярное</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {cardData.map((item) => (
                                <Productcard
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                    garant={item.garrant}
                                    oldPrice={item.oldprice}
                                    buttonPrice={item.buttonPrice}
                                />
                            ))}
                        </div>
                    </div>

                </section>
                <section className="info">
                    <div className="container">
                        <h2 className="text-2xl font-bold mt-[40px] mb-[5px] md:text-3xl">Новые модели Айфонов по выгодным ценам</h2>
                        <p className="text-sm font-medium text-gray-500">Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru предлагает:
                            Низкие цены на все виды устройств, недорогие аксессуары;
                            Оригинальные подарки бренда;
                            Новая линейка смартфонов и проверенные старые модели;
                            Лаконичный дизайн, большой выбор цветов и оттенков;
                            Все товары в каталоге есть в наличии и доступны для покупки в кредит и рассрочку;
                            Быстрая доставка по Санкт-Петербургу и области;
                            Гарантия на все модели телефонов;
                            Все способы оплаты!
                            Товары, представленные на официальном сайте Istoreapple.ru, сертифицированы. Мы занимаемся продажей айфонов с 2013 года. Вы всегда можете прочитать отзывы о покупке наших клиентов, позвонить в магазин и получить консультацию по любой модели Apple.</p>
                    </div>
                    <div className="w-full bg-black md:h-[217px]">
                        <div className=" container flex items-center gap-14 md:gap-[72px] lg:gap-[88px] pb-[10px] pt-[10px] mt-[50px]">
                        <img src={Ihpone14} alt="img" className="ml-[10px]" />
                            <div>
                            <h2 className="text-white text-2xl font-bold w-full md:text-4xl mb-[8px]">iPhone 14 Pro Max</h2>
                            <p className="text-white text-sm mb-[16px]">по лучшей цене в Москве</p>
                            <Button variant="primary">подробнее</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2 className="text-2xl font-bold mt-[40px] mb-[5px] md:text-3xl">Новые модели Айфонов по выгодным ценам</h2>
                        <p className="text-sm font-medium text-gray-500">Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru предлагает:
                            Низкие цены на все виды устройств, недорогие аксессуары;
                            Оригинальные подарки бренда;
                            Новая линейка смартфонов и проверенные старые модели;
                            Лаконичный дизайн, большой выбор цветов и оттенков;
                            Все товары в каталоге есть в наличии и доступны для покупки в кредит и рассрочку;
                            Быстрая доставка по Санкт-Петербургу и области;
                            Гарантия на все модели телефонов;
                            Все способы оплаты!
                            Товары, представленные на официальном сайте Istoreapple.ru, сертифицированы. Мы занимаемся продажей айфонов с 2013 года. Вы всегда можете прочитать отзывы о покупке наших клиентов, позвонить в магазин и получить консультацию по любой модели Apple.</p>
                    </div>
                </section>
                <section className="cards">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {cardData2.map((item) => (
                                <Productcard
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                    garant={item.garrant}
                                    oldPrice={item.oldprice}
                                    buttonPrice={item.buttonPrice}
                                />
                            ))}
                        </div>
                </section>
                <section className="services flex items-center flex-col">
                <h2 className="text-3xl font-bold mt-[20px]">Наши преимущества</h2>
                    <div className="container flex flex-col lg:flex-row justify-center items-center gap-[20px]">
                        {serviceData.map((item) => (
                            <ServiceCard 
                             icon={item.img}
                             title={item.title}
                             text={item.text}
                            />
                        ))}
                    </div>
                </section>
            </MainLayout>
        </>
    )
}