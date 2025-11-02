import Image from "next/image";

export default function AboutSection({ data }) {
  const imageUrl = data?.clinicImage?.url || "/clinic.jpg";

  return (
    <section id="about" className="py-20 lg:py-24 bg-white">
      <div className="container-std">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Clinic Image */}
          <div className="flex-1 order-2 lg:order-1 relative w-full h-80 lg:h-96">
            <Image
              src={imageUrl}
              alt="تصویر کلینیک"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right side - Doctor Introduction */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-right">
                {data?.title || "درباره دکتر"}
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-center lg:text-right">
                {(data?.paragraphs || []).map((t, idx) => (
                  <p key={idx}>{t.paragraph}</p>
                ))}
              </div>

              {/* Achievements */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {(data?.stats || []).map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-50 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-blue-600">
                      {s.value}
                    </div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
