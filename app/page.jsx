import { fetchWordpressData, mapWordpressData } from "@/lib/wordpressData";
import AppContent from "@/components/AppContent";

export default async function Home() {
  // Fetch داده‌ها در server-side
  const { data: rawData, error } = await fetchWordpressData();
  
  // Map کردن داده‌ها به ساختار مورد نیاز
  const mappedData = mapWordpressData(rawData);

  return (
    <AppContent 
      initialData={mappedData} 
      initialError={error}
    />
  );
}
