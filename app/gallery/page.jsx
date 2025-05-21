import Image from "next/image";

const page = () => {
  const imageSources = [
    "/arRecidence/ar_1.jpg",
    "/arRecidence/ar_2.jpg",
    "/arRecidence/ar_3.jpg",
    "/arRecidence/ar_4.jpg",
    "/arRecidence/ar_5.jpg",
    "/arRecidence/ar_6.jpg",
    "/arRecidence/ar_7.jpg",
    "/arRecidence/ar_8.jpg",
    "/arRecidence/ar_9.jpg",
    "/arRecidence/ar_10.jpg",

    "/eneraDesign/en_1.jpg",
    "/eneraDesign/en_2.jpg",
    "/eneraDesign/en_3.jpg",
    "/eneraDesign/en_4.jpg",
    "/eneraDesign/en_5.jpg",
    "/eneraDesign/en_6.jpg",

    "/panache/p_1.jpg",
    "/panache/p_2.jpg",
    "/panache/p_3.jpg",
    "/panache/p_4.jpg",
    "/panache/p_5.jpg",
    "/panache/p_6.jpg",
    "/panache/p_7.jpg",
    "/panache/p_8.jpg",
    "/panache/p_9.jpg",
    "/panache/p_10.jpg",
    "/panache/p_11.jpg",
    "/panache/p_12.jpg",
    "/panache/p_13.jpg",
    "/panache/p_14.jpg",
  ];

  // Break images into 4 columns
  const columns = [[], [], [], []];
  imageSources.forEach((src, i) => {
    columns[i % 4].push(src);
  });

  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {columns.map((group, i) => (
        <div key={i} className="flex flex-col gap-4">
          {group.map((src, j) => (
            <div key={j} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`gallery-${i}-${j}`}
                width={500}
                height={400}
                className="w-full h-auto rounded-lg hover:scale-90 transition-all duration-300"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default page;
