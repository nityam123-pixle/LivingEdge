'use client';
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";

import { motion } from "framer-motion";
import { titleVariants, tagVariants, desVariants } from "@/utils/animation"

import Image from "next/image";

//Importing Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function CatalogSwiperSection() {
    return (
        <div className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-1">
                <div className="text-left">
                    <motion.h1
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">
                        MODERN CLASSIC
                    </motion.h1>
                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="pb-6 text-xl font-bold tracking-wider mt-5">
                        Luxury decor to create comfort in our home
                    </motion.h2>
                </div>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="grid grid-cols-2 text-gray-500 gap-x-4">
                    <p className="text-xs">
                        Homes designs elegant, personal, and functional spaces with timeless interior solutions.
                    </p>

                    <p className="text-xs mt-2">
                        We blend style and comfort to craft spaces that reflect your unique lifestyle.
                    </p>
                </motion.div>
                <a href="/gallery">
                    <Button className="inline-flex items-center px-8 py-3 mt-4 text-white
                    rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                        View Gallery <TbArrowUpRight className={`w-5 h-5 ml-2`} />
                    </Button>
                </a>
            </div>

            {/* Swiper Section */}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    }
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Image
                        src="/panache/p_14.jpg"
                        alt="swiper"
                        height={520}
                        width={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/panache/p_12.jpg"
                        alt="swiper"
                        height={520}
                        width={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/panache/p_2.jpg"
                        alt="swiper"
                        height={520}
                        width={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/arRecidence/ar_10.jpg"
                        alt="swiper"
                        height={520}
                        width={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/arRecidence/ar_8.jpg"
                        alt="swiper"
                        height={520}
                        width={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/arRecidence/ar_1.jpg"
                        alt="swiper"
                        height={520}
                        width={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/arRecidence/ar_5.jpg"
                        alt="swiper"
                        height={520}
                        width={220}
                        className="w-full"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
