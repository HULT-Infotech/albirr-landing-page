import React from "react";
import Image from "next/image";

const FeatureCard = ({ id, alt }) => (
  <div className="relative">
    <Image
      src={`/row${id}.png`}
      alt={alt}
      width={400}
      height={400}
      className="w-full h-auto object-contain"
    />
  </div>
);

const Features = () => {
  const features = [
    { id: 1, alt: "Child Friendly Schooling" },
    { id: 2, alt: "Nurturing Environment" },
    { id: 3, alt: "IT Enabled Learning" },
    { id: 4, alt: "Activity Based Learning" },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#26335D] md:text-4xl lg:text-4xl tracking-tight">
              Why Choose Us?
            </h2>
          </div>
          <div className="text-[#A0A4AB] font-medium text-xs md:text-sm tracking-wide italic">
            / Our Features
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
