'use client'

import Image from "next/image";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb"
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:flex lg:justify-between">
            {/* Left Section */}
            <div className="lg:w-1/2 xl:py-14 lg:py-8 flex flex-col justify-center gap-y-8">

                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="tracking-widest uppercase"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    We offer the best interior decor services for your high living standards.
                </motion.p>

                <motion.h1
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={desVariants}
                    className="h1 font-serif bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent leading-snug tracking-tight text-center"
                >
                    Follow The Next Wait For The Next <br /> - Living Edge
                </motion.h1>

                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="pb-6 text-muted-foreground xl:pb-10">
                    Transform your living space into a reflection of your personal style with our expert interior design services.
                    At <b>LivingEdge</b>, we specialize in creating beautiful, functional, and personalized interiors that make your home a sanctuary.
                </motion.p>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                >
                    <Link href="/contact" passHref>
                        <Button
                            asChild
                            className="inline-flex items-center px-4 py-2 text-white rounded-full shadow-lg dark:bg-primary
               hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
                        >
                            <span>
                                Contact Us <TbArrowUpRight className="w-4 h-4 ml-2" />
                            </span>
                        </Button>
                    </Link>
                </motion.div>


            </div>

            {/* Right image section */}
            <div className="flex w-1/2 justify-center items-center">
                <Image
                    src="/image/ar_1.png"
                    width={900}
                    height={500}
                    alt=""
                    className="absolute right-20 xl:h-[448px] xl:w-[600px] lg:h-[344px] lg:w-[300px] hidden lg:block"
                />
            </div>
        </div>
    );
};

export default HeroSection;
