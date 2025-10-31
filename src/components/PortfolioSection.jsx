import React, { useEffect, useMemo, useRef, useState } from "react";

const PortfolioSection = ({ data }) => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // You can replace or extend these with dynamic data later
  const fallbackImages = useMemo(
    () => [
      "/images/implant.jpg",
      "/images/bleaching.jpg",
      "/images/restoration.jpg",
      "/images/orthodontics.jpeg",
      "/images/beautyclinic.jpg",
      "/images/clinic.jpg",
      "/images/young.jpg",
    ],
    []
  );

  const images = useMemo(() => {
    const fromProps = Array.isArray(data?.images) ? data.images : [];
    return fromProps.length > 0 ? fromProps : fallbackImages;
  }, [data?.images, fallbackImages]);

  // Duplicate list for seamless marquee
  const marqueeImages = useMemo(() => [...images, ...images], [images]);

  // Pause on hover/touch over the whole track
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  // Improve touch experience: pause while finger is on the carousel
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onTouchStart = () => setIsPaused(true);
    const onTouchEnd = () => setIsPaused(false);

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  // Animation duration based on number of items (tweak if needed)
  const durationSeconds = useMemo(() => {
    if (typeof data?.speedSeconds === "number" && data.speedSeconds > 0) {
      return data.speedSeconds;
    }
    return Math.max(20, Math.round(images.length * 3));
  }, [data?.speedSeconds, images.length]);

  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-white">
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            نمونه کارها
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            بخشی از نتایج درمانی و لبخندهای زیبای مراجعین ما
          </p>
        </div>

        {/* Marquee container */}
        <div
          className="relative overflow-hidden rounded-2xl "
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          {/* gradient edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Track */}
          <div
            ref={trackRef}
            className={`flex items-center gap-4 lg:gap-6 will-change-transform select-none [animation-name:marquee-scroll] ${
              isPaused
                ? "[animation-play-state:paused]"
                : "[animation-play-state:running]"
            }`}
            style={{
              // width expands naturally via flex; we rely on keyframes to translateX
              animationDuration: `${durationSeconds}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {marqueeImages.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="shrink-0 w-64 lg:w-80 h-44 lg:h-52 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm"
              >
                <img
                  src={src}
                  alt="نمونه کار دندانپزشکی"
                  className="w-full h-full object-cover"
                  onMouseEnter={handlePause}
                  onMouseLeave={handleResume}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Small helper note for mobile */}
        <div className="mt-4 text-center text-sm text-gray-500 lg:hidden">
          برای توقف حرکت، لمس را نگه دارید
        </div>
      </div>

      {/* Keyframes for marquee (scoped via inline style tag) */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
