'use client'

import { Paintbrush, Sofa, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "../utils/animation";
import { Button } from "./ui/button";
import Link from "next/link";

const services = [
    {
        id: 1,
        title: "Turnkey Interiors",
        description: "From concept to completion, we handle every detail. Our turnkey solutions deliver fully furnished, move-in-ready spaces that match your style and functionality needs.",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        title: "Creative Furniture Design",
        description: "We create custom furniture that blends aesthetics with comfort. Our designs maximize space while reflecting your personality and lifestyle.",
        icon: Sofa,
    },
    {
        id: 3,
        title: "Space Optimization & Styling",
        description: "Our experts reimagine your spaces with strategic layout planning, decor styling, and lighting design to enhance both form and function.",
        icon: Paintbrush,
    }
]

export default function ServiceSection() {
    return (
        <div className="pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.h2
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={titleVariants}
                    className="text-3xl font-bold tracking-tight sm:text-4xl"
                >
                    Our Services
                </motion.h2>

                <motion.p
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={desVariants}
                    className="mt-2 text-lg leading-8 text-muted-foreground"
                >
                    Explore our range of interior design services crafted to elevate your living spaces.
                </motion.p>

                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={tagVariants}
                    className="mx-auto mt-1 grid lg:grid-cols-3 gap-x-8 lg:max-w-none lg:mx-0
                    sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16"
                >
                    {services.map((service) => (
                        <article
                            key={service.id}
                            className="flex max-w-xl flex-col items-start justify-between"
                        >
                            <div className="mb-4 text-primary">
                                <service.icon className="w-10 h-10" />
                            </div>

                            <div className="group relative">
                                <h3 className="text-lg font-semibold leading-6 group-hover:text-gray-600">
                                    {service.title}
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </motion.div>
                <div className="mt-10 flex justify-center">
                    <Button asChild>
                        <Link href="/services">
                            View All Services
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
