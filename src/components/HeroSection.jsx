import React from "react";

const HeroSection = ({ data }) => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-blue-50 to-white py-20 lg:pt-24 lg:pb-0"
    >
      <div className="container-std">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-right order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-8">
              {data?.doctorName || "نام پزشک"}
            </h1>
            <h2
              className="text-2xl lg:text-3xl mb-4 font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {data?.specialty || "تخصص پزشک"}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              {data?.description || ""}
            </p>
            <button className="btn  font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              {data?.ctaText || "رزرو نوبت"}
            </button>
          </div>

          {/* Right side - Doctor Image */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src={data?.doctorImage?.url || "/doctor.png"}
              alt="عکس دکتر"
              className="w-80 h-96 lg:w-[500px] lg:h-[500px] object-contain bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
