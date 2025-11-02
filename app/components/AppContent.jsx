"use client";

import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export default function AppContent({ initialData, initialError }) {
  // استفاده از داده‌های server-side که در props آمده
  const data = initialData;
  const error = initialError;

  // نمایش حالت Loading (فقط اگر هیچ داده اولیه‌ای نباشد)
  if (!data && !error) {
    return <Loading />;
  }

  // نمایش حالت Error
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-2">خطا در بارگذاری اطلاعات</p>
          <p className="text-gray-500 text-sm">
            {error.message || "خطای نامشخص"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar data={data.site} />
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      <ServicesSection data={data.services} />
      <PortfolioSection data={data.portfolio} />
      <Footer data={data.footer} />
    </div>
  );
}
