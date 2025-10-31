import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import useWordpressData from "./hooks/useWordpressData";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  // const [content, setContent] = useState(null);
  // useEffect(() => {
  //   fetch("/siteContent.json")
  //     .then((r) => r.json())
  //     .then(setContent)
  //     .catch(() => setContent(null));
  // }, []);
  const { data, loading } = useWordpressData();

  if (loading) return <p>Loading...</p>;

  const landing = data?.[0]?.acf;

  // Map WordPress ACF fields to component structure
  const mappedData = {
    site: {
      title: landing?.site_title || landing?.site?.title || "کلینیک دندانپزشکی",
      logo: landing?.site_logo || landing?.site?.logo || "/dentallogo.png",
    },
    hero: {
      doctorName:
        landing?.doctor_name || landing?.hero?.doctorName || "نام پزشک",
      specialty:
        landing?.doctor_specialty || landing?.hero?.specialty || "تخصص پزشک",
      description:
        landing?.hero_description || landing?.hero?.description || "",
      ctaText: landing?.cta_text || landing?.hero?.ctaText || "رزرو نوبت",
      doctorImage:
        landing?.doctor_image || landing?.hero?.doctorImage || "/doctor.png",
    },
    about: {
      title: landing?.about_title || landing?.about?.title || "درباره دکتر",
      paragraphs: landing?.about_paragraphs || landing?.about?.paragraphs || [],
      stats: landing?.about_stats || landing?.about?.stats || [],
      clinicImage:
        landing?.clinic_image || landing?.about?.clinicImage || "/clinic.jpg",
    },
    services: landing?.services || landing?.services || [],
    portfolio: {
      images: (landing?.portfolio?.items || [])
        .map((item) => item?.image?.url)
        .filter(Boolean),
      speedSeconds: landing?.portfolio?.speedSeconds,
    },
    footer: {
      contact: {
        phone:
          landing?.contact_phone ||
          landing?.footer?.contact?.phone ||
          "۰۲۱-۱۲۳۴۵۶۷۸",
        email:
          landing?.contact_email ||
          landing?.footer?.contact?.email ||
          "info@dentalclinic.com",
      },
      address: {
        line1:
          landing?.address_line1 ||
          landing?.footer?.address?.line1 ||
          "تهران، خیابان ولیعصر",
        line2:
          landing?.address_line2 ||
          landing?.footer?.address?.line2 ||
          "پلاک ۱۲۳، طبقه دوم",
        line3:
          landing?.address_line3 ||
          landing?.footer?.address?.line3 ||
          "کلینیک دندانپزشکی",
      },
      hours: landing?.working_hours || landing?.footer?.hours || [],
      social: {
        instagram:
          landing?.instagram_url || landing?.footer?.social?.instagram || "#",
        telegram:
          landing?.telegram_url || landing?.footer?.social?.telegram || "#",
        whatsapp:
          landing?.whatsapp_url || landing?.footer?.social?.whatsapp || "#",
      },
      copyright:
        landing?.copyright_text ||
        landing?.footer?.copyright ||
        "© ۱۴۰۳ کلینیک دندانپزشکی. تمامی حقوق محفوظ است.",
    },
  };

  // console.log("Mapped data:", mappedData);

  return (
    <div className="min-h-screen bg-white ">
      <Navbar data={mappedData.site} />
      <HeroSection data={mappedData.hero} />
      <AboutSection data={mappedData.about} />
      <ServicesSection data={mappedData.services} />
      <PortfolioSection data={mappedData.portfolio} />
      <Footer data={mappedData.footer} />
    </div>
  );
}

export default App;
