import "./globals.css";

export const metadata = {
  title: "کلینیک دندانپزشکی",
  description: "کلینیک دندانپزشکی با جدیدترین تکنولوژی‌ها",
  icons: {
    icon: "/dentallogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="stylesheet" href="/fonts.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
