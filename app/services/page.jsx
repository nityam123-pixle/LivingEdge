 'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { title: '2D & 3D Designing', description: 'Detailed floor plans and 3D visualizations for clear conceptualization.' },
  { title: 'Key to Key Turnkey Projects', description: 'End-to-end project delivery, ready for immediate use.' },
  { title: 'Interior Designing', description: 'Aesthetic and functional designs tailored to your lifestyle.' },
  { title: 'Modular Furniture', description: 'Space-saving, stylish, and customizable modular solutions.' },
  { title: 'Consultancy (B2B)', description: 'Expert advice for commercial and retail space planning.' },
  { title: 'Architectural Designing', description: 'Structural and aesthetic planning for residential and commercial buildings.' },
  { title: '3D Visualization', description: 'Photorealistic renders to preview designs before execution.' },
  { title: 'Korean & Stone Work', description: 'Durable and elegant surface solutions for kitchens and bathrooms.' },
  { title: 'Ply & Hardware Solutions', description: 'High-quality materials for long-lasting and functional furniture.' },
  { title: 'Laminate, Veneer & Decorative Panels', description: 'Stylish surfaces to enrich interiors.' },
  { title: 'Lighting Solutions', description: 'Smart and ambient lighting to enhance mood and functionality.' },
  { title: 'Furniture Labour Work', description: 'Skilled craftsmanship for custom and modular installations.' },
  { title: 'Office Furniture', description: 'Ergonomic and efficient furniture for professional spaces.' },
  { title: 'PMC Solution', description: 'Project Management Consultancy for streamlined execution.' },
  { title: 'Wall Texture Work', description: 'Textured finishes to add depth and interest to walls.' },
  { title: 'Foam & Furnishings', description: 'Comfortable and aesthetic upholstery solutions.' },
  { title: 'Electrical Work', description: 'Safe and efficient electrical planning and execution.' },
  { title: 'Stretch & Decorative Ceiling', description: 'Modern and elegant ceiling installations.' },
  { title: 'Digital Locks', description: 'Secure and smart access systems for modern homes.' },
  { title: 'Wallpaper', description: 'Customizable patterns and textures for walls.' },
  { title: 'Carpet & Wall', description: 'Soft surfaces for comfort and insulation.' },
  { title: 'Ceiling & Painting Work', description: 'Professional finishes for clean and attractive interiors.' },
  { title: '2D/3D MDF CNC Work', description: 'Precision-cut decorative panels for doors, walls, and furniture.' },
  { title: 'Customised Decorative Lighting Solution', description: 'Unique lighting pieces that complement your theme.' },
  { title: 'Home Automation', description: 'Alexa, Google, and touch-based smart automation for modern living.' },
  { title: 'Profile Shutter & Glass Work', description: 'Elegant storage with aluminum and glass shutter systems.' },
  { title: 'Sofa & Bed Lining Work', description: 'Tailored upholstery work for beds and sofas.' },
  { title: 'Loose Furniture', description: 'Tables, chairs, and more—designed to fit and function beautifully.' },
];

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* === Header Section === */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/image/index.jpg"
            alt="Services Background"
            className="w-full h-full object-cover filter blur-sm brightness-50"
          />
        </div>
        <motion.div
          className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold sm:text-5xl">OUR SERVICES</h1>
          <p className="mt-4 max-w-2xl sm:text-lg text-white/55">
            We transform spaces into breathtaking experiences. Our commitment to excellence and passion for design drives us to deliver unparalleled services tailored to your unique vision.
          </p>
        </motion.div>
      </div>

      {/* === Services Grid === */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="border rounded-lg p-5 bg-background shadow-sm"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                <h2 className="font-semibold">{service.title}</h2>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  } opacity-30`}
                />
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 text-sm text-muted-foreground"
                  >
                    {service.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button asChild>
            <a href="/">Back to Home</a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
