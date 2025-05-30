'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation"
import { Button } from "./ui/button";

const AboutComponents = () => {
    return (
        <div className='container py-12 xl:py-24 h-[auto]'>
            <div className="grid lg:grid-cols-2 place-items-center">
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="px-4 py-2"
                >
                    <Image
                        src="/arRecidence/ar_10.jpg"
                        width={600}
                        height={500}
                        alt="About"
                        className="max-md:hidden"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </motion.div>

                <div className="items-center">
                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">
                        One of the best companies in this business.
                    </motion.h2>

                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="px-12 text-2xl tracking-wider uppercase bg-gradient-to-r from-[#6D6975] to bg-gray-200 bg-clip-text text-transparent font-semibold mt-3">
                        27 years of experience
                    </motion.p>

                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="px-12 pb-4 mt-4">
                        With 27+ years of experience in the industry, we specialize in both residential and commercial interior design,
                        offering a full range of services from concept development to final installation.
                    </motion.p>

                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="px-12 pb-4 mt-4">
                        Our award-winning team combines creativity and expertise to deliver outstanding results, transforming houses into dream homes.
                        We are honored to have received numerous accolades for our dedication to excellence and our impact on the home design industry.
                    </motion.p>
                    <motion.div initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}>
                        <Button asChild>
                            <a href="/about" className="ml-8 mt-4">Know More...</a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponents;
