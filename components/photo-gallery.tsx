import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery-1.png",
    alt: "Mountain landscape with traditional architecture",
  },
  { src: "/gallery-2.png", alt: "Ocean waves on rocky coastline" },
  { src: "/gallery-3.png", alt: "Person hiking in mountains" },
  { src: "/gallery-4.png", alt: "Friends enjoying sunset on cliff" },
  { src: "/gallery-5.png", alt: "Group celebrating on beach" },
  { src: "/gallery-6.png", alt: "Stylish travelers with luggage" },
  { src: "/gallery-7.png", alt: "Couple sharing coffee while traveling" },
];

export function PhotoGallery() {
  return (
    <section className="py-8 ">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-0">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-none"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
