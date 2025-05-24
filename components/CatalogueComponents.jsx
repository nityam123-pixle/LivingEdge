import { TbArrowNarrowRight } from "react-icons/tb";
import Image from "next/image";

export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      category: "BEDROOM SETUP",
      title: "Cosy Bedroom Setup",
      image: "/arRecidence/ar_3.jpg",
      description: "Family bedroom with a comfortable design for your family.",
    },
    {
      id: "02",
      category: "OFFICE SETUP",
      title: "Clean and proffessional office",
      image: "/eneraDesign/en_1.jpg",
      description: "A well-designed office speaks volumes about your brand.",
    },
    {
      id: "03",
      category: "DRAWING SETUP",
      title: "Family Drawing Room",
      image: "/panache/p_14.jpg",
      description: "Spacious drawing room designed for memorable gatherings.",
    },
    {
      id: "04",
      category: "LIVING SETUP",
      title: "Comfortable Living Space",
      image: "/arRecidence/ar_1.jpg",
      description: "Bright living area with minimalistic interior styling.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-white">
          Explore Our Catalogue
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative w-full h-64">
                <a
                href="/projects"
                className="inline-flex items-center text-primary hover:underline font-medium group"
                >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  asChild
                />
                </a>

              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between text-sm text-neutral-500 dark:text-neutral-400">
                  <span>{item.category}</span>
                  <span>{item.id}</span>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {item.description}
                </p>

                <a
                  href="/projects"
                  className="inline-flex items-center text-primary hover:underline font-medium group"
                >
                  See Details
                  <TbArrowNarrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
