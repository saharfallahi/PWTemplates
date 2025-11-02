import Image from "next/image";

export default function HeroSection({ data }) {
  const imageUrl = data?.doctorImage?.url || "/doctor.png";
  
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
            <div className="relative w-80 h-96 lg:w-[500px] lg:h-[500px]">
              <Image
                src={imageUrl}
                alt="عکس دکتر"
                fill
                className="object-contain bg-transparent"
                sizes="(max-width: 1024px) 320px, 500px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

