import Image from "next/image";

export default function ServicesSection({ data }) {
  const services = Array.isArray(data) ? data : [];

  return (
    <section
      id="services"
      className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container-std">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            خدمات ما
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            با استفاده از جدیدترین تکنولوژی‌ها و روش‌های درمانی، بهترین خدمات
            دندانپزشکی را ارائه می‌دهیم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            // Priority: icon from WP, then image from WP
            const iconUrl = service?.icon?.url;
            const imageUrl = service?.image?.url;
            const imageSrc = iconUrl || imageUrl;

            return (
              <div
                key={service.id || service.title || `service-${index}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                {/* Service Icon/Image - from WordPress only (no fallback) */}
                {imageSrc && (
                  <div className="h-48 bg-white flex items-center justify-center overflow-hidden relative">
                    <div className="relative w-24 h-24">
                      <Image
                        src={imageSrc}
                        alt={service.title || "Service Icon"}
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>
                  </div>
                )}

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
