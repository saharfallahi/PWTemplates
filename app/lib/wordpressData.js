// Server-side function برای fetch کردن داده‌های WordPress
export async function fetchWordpressData() {
  try {
    const BASE_URL = process.env.WORDPRESS_API_URL || "http://localhost/wordpress/wp-json/wp/v2/landing";
    
    const response = await fetch(BASE_URL, {
      // برای جلوگیری از cache در development
      cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
      next: { revalidate: 3600 } // Revalidate هر ساعت در production
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching WordPress data:', error);
    return { data: null, error };
  }
}

// Mapping داده‌های وردپرس به ساختار مورد نیاز
export function mapWordpressData(data) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return {
      site: {
        title: "کلینیک دندانپزشکی",
        logo: { url: "/dentallogo.png" },
      },
      hero: {
        doctorName: "نام پزشک",
        specialty: "تخصص پزشک",
        description: "",
        ctaText: "رزرو نوبت",
        doctorImage: { url: "/doctor.png" },
      },
      about: {
        title: "درباره دکتر",
        paragraphs: [],
        stats: [],
        clinicImage: { url: "/clinic.jpg" },
      },
      services: [],
      portfolio: {
        images: [],
        speedSeconds: null,
      },
      footer: {
        contact: {
          phone: "۰۲۱-۱۲۳۴۵۶۷۸",
          email: "info@dentalclinic.com",
        },
        address: {
          line1: "تهران، خیابان ولیعصر",
          line2: "پلاک ۱۲۳، طبقه دوم",
          line3: "کلینیک دندانپزشکی",
        },
        hours: [],
        social: {
          instagram: "#",
          telegram: "#",
          whatsapp: "#",
        },
        copyright: "© ۱۴۰۳ کلینیک دندانپزشکی. تمامی حقوق محفوظ است.",
      },
    };
  }

  const landing = data[1]?.acf || data[0]?.acf || {};

  // Helper function برای normalize کردن logo
  const normalizeLogo = (logo) => {
    if (!logo) return { url: "/dentallogo.png" };
    if (typeof logo === "string") return { url: logo };
    if (logo.url) return { url: logo.url };
    return { url: "/dentallogo.png" };
  };

  return {
    site: {
      title:
        landing?.site_title || landing?.site?.title || "کلینیک دندانپزشکی",
      logo: normalizeLogo(landing?.site_logo || landing?.site?.logo),
    },
    hero: {
      doctorName:
        landing?.doctor_name || landing?.hero?.doctorName || "نام پزشک",
      specialty:
        landing?.doctor_specialty || landing?.hero?.specialty || "تخصص پزشک",
      description:
        landing?.hero_description || landing?.hero?.description || "",
      ctaText: landing?.cta_text || landing?.hero?.ctaText || "رزرو نوبت",
      doctorImage: landing?.doctor_image ||
        landing?.hero?.doctorImage || { url: "/doctor.png" },
    },
    about: {
      title: landing?.about_title || landing?.about?.title || "درباره دکتر",
      paragraphs:
        landing?.about_paragraphs || landing?.about?.paragraphs || [],
      stats: landing?.about_stats || landing?.about?.stats || [],
      clinicImage: landing?.clinic_image ||
        landing?.about?.clinicImage || { url: "/clinic.jpg" },
    },
    services: landing?.services || [],
    portfolio: {
      images:
        (landing?.portfolio?.items || [])
          .map((item) => item?.image?.url)
          .filter(Boolean) || [],
      speedSeconds: landing?.portfolio?.speedSeconds || null,
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
}

