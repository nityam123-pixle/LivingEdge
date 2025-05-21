'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Button } from '@/components/ui/button';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb';
import Link from 'next/link';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const handleSelect = (index) => setCurrentIndex(index);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="container py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {project.name}
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Carousel + Thumbnails */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          {/* Thumbnails */}
          <div className="relative flex md:flex-col gap-2 overflow-auto md:w-20">
            {project.images.slice(0, 3).map((img, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 ${
                  index === currentIndex ? 'border-primary' : 'border-transparent'
                } rounded overflow-hidden`}
                onClick={() => handleSelect(index)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={60}
                  className="object-cover w-20 h-14"
                />
              </div>
            ))}

            {/* Fourth image preview with overlay count */}
            {project.images.length > 3 && (
              <div
                className={`relative cursor-pointer border-2 ${
                  currentIndex >= 3 ? 'border-primary' : 'border-transparent'
                } rounded overflow-hidden`}
                onClick={() => handleSelect(3)}
              >
                <Image
                  src={project.images[3]}
                  alt="More images"
                  width={80}
                  height={60}
                  className="object-cover w-20 h-14 brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">
                  +{project.images.length - 3}
                </div>
              </div>
            )}

            {/* Mask effect */}
            {project.images.length > 4 && (
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  maskImage:
                    'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                  maskRepeat: 'no-repeat',
                }}
              />
            )}
          </div>

          {/* Carousel */}
          <div className="relative w-full max-w-full">
            <div className="overflow-hidden rounded-lg w-full h-[300px] md:h-[400px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={project.images[currentIndex]}
                  src={project.images[currentIndex]}
                  alt={`Project Image ${currentIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrev}
                className="bg-white dark:bg-black/50 rounded-full"
              >
                <TbArrowLeft />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="bg-white dark:bg-black/50 rounded-full"
              >
                <TbArrowRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Description */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {project.fullDescription}
          </p>
          <Link href="/projects">
            <Button className="rounded-full px-6 py-2">
              Back to Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
