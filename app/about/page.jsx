'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from '@/utils/animation';

const Page = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1]);

  return (
    <div>
      {/* Hero Section with Blurred Background */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/image/index.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
        <h1 className="z-20 text-5xl lg:text-7xl text-white font-extrabold tracking-wider text-center px-4">
            About Us: <br /><br />
          Crafting Exceptional Spaces<br />
          for Extraordinary Living
        </h1>
      </div>

      {/* Content Section */}
      <div className="container py-20 space-y-28">

        {/* 01 - Who We Are */}
        <motion.div initial="offscreen" whileInView="onscreen" variants={titleVariants} className="text-center space-y-6">
          <p className="text-sm font-bold tracking-widest text-primary">01 • WHO WE ARE</p>
          <h2 className="text-3xl md:text-5xl font-semibold">Living Edge</h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="max-w-4xl mx-auto text-lg md:text-xl text-muted-foreground"
          >
            At Living Edge, we believe that your space should be a true reflection of your lifestyle,
            your passions, and your dreams. Our mission is to bring you timeless designs and premium
            quality furnishings that seamlessly blend elegance, comfort, and functionality.
          </motion.p>
        </motion.div>

        {/* 02 - Our Mission */}
        <motion.div initial="offscreen" whileInView="onscreen" variants={titleVariants} className="text-center space-y-6">
          <p className="text-sm font-bold tracking-widest text-primary">02 • OUR MISSION</p>
          <h2 className="text-3xl md:text-5xl font-semibold">Designing With Purpose</h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="max-w-4xl mx-auto text-lg md:text-xl text-muted-foreground"
          >
            We strive to create meaningful and timeless spaces that reflect the essence of our clients.
            Our mission is to blend aesthetic beauty with functional utility, delivering outstanding
            interior designs tailored to individual lifestyles.
          </motion.p>
        </motion.div>

        {/* 03 - Our Values in 3-Column Grid */}
        <motion.div initial="offscreen" whileInView="onscreen" variants={titleVariants} className="text-center space-y-10">
          <p className="text-sm font-bold tracking-widest text-primary">03 • OUR VALUES</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
            <div className="p-6 border rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Creativity</h3>
              <p className="text-muted-foreground">
                Innovation and artistry are at the heart of our designs.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We are honest, transparent, and committed to doing what's best for our clients.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We aim for the highest standards in every project we undertake.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 04 - Our Process */}
        <motion.div initial="offscreen" whileInView="onscreen" variants={titleVariants} className="text-center space-y-6">
          <p className="text-sm font-bold tracking-widest text-primary">04 • OUR PROCESS</p>
          <h2 className="text-3xl md:text-5xl font-semibold">From Vision to Reality</h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="max-w-4xl mx-auto text-lg md:text-xl text-muted-foreground"
          >
            We follow a structured process from consultation, concept design, and material selection to
            execution and final reveal. Each phase is handled with care, transparency, and collaboration.
          </motion.p>
        </motion.div>

        {/* 05 - Why Choose Us */}
        <motion.div initial="offscreen" whileInView="onscreen" variants={titleVariants} className="text-center space-y-6">
          <p className="text-sm font-bold tracking-widest text-primary">05 • WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-5xl font-semibold">Passion Meets Precision</h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="max-w-4xl mx-auto text-lg md:text-xl text-muted-foreground"
          >
            With a keen eye for detail, a deep understanding of trends, and a passion for excellence,
            we deliver designs that speak to your soul. Our work is more than aesthetics — it's personal.
          </motion.p>
        </motion.div>

        {/* 📷 Moved Image Section (below section 5) */}
        <motion.div
          style={{ scale }}
          ref={ref}
          className="mx-auto max-w-6xl rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="/image/gallery1123.jpg"
            alt="Interior Showcase"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
