'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { titleVariants } from '@/utils/animation';
import { projects } from "./data/projects";

export default function Page() {
    return (
        <div>
            {/* Hero */}
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-cover bg-center">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={titleVariants}
                >
                    <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
                        Our Projects
                    </h1>
                </motion.div>
            </div>

            {/* Project Grid */}
            <div className="container grid lg:grid-cols-2 gap-12 py-16">
                {projects.map((project) => (
                    <div key={project.id} className="group">
                        <div className="overflow-hidden rounded-xl">
                            <Link href={`/projects/${project.id}`} passHref>
                                <Image
                                    src={project.image}
                                    width={480}
                                    height={380}
                                    alt={project.name}
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                        </div>
                        <div className="mt-6 flex flex-col items-start">
                            <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
                            <Link href={`/projects/${project.id}`} passHref>
                                <Button
                                    asChild
                                    className="inline-flex items-center px-4 py-2 text-white rounded-full shadow-lg dark:bg-primary
                                        hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
                                >
                                    <span>
                                        View Project <TbArrowUpRight className="w-4 h-4 ml-2" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
