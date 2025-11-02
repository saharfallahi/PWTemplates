# Next.js + Tailwind CSS - Dental Landing Page

این پروژه یک صفحه لندینگ دندانپزشکی است که با Next.js و Tailwind CSS نسخه 3.4.18 ساخته شده است.

## ویژگی‌ها

- ⚡️ **Next.js 15** با App Router
- 🎨 **Tailwind CSS 3.4.18**
- 🔍 **SEO Optimized** - Server-Side Rendering (SSR)
- 📱 **Responsive Design**
- 🔄 **WordPress Integration** - اتصال به WordPress REST API

## شروع کار

### پیش‌نیازها

- Node.js 18+
- npm یا yarn یا pnpm

### نصب

```bash
npm install
```

### اجرای پروژه در حالت Development

```bash
npm run dev
```

پروژه در `http://localhost:3000` اجرا می‌شود.

### Build برای Production

```bash
npm run build
npm start
```

## تنظیمات Environment Variables

برای اتصال به WordPress API، یک فایل `.env.local` در ریشه پروژه ایجاد کنید:

```env
WORDPRESS_API_URL=http://your-wordpress-site.com/wp-json/wp/v2/landing
```

**نکته مهم:**

- در حالت Development می‌توانید از `localhost` استفاده کنید
- در Production باید URL کامل WordPress سایت خود را وارد کنید
- اگر این متغیر تنظیم نشود، به طور پیش‌فرض از `http://localhost/wordpress/wp-json/wp/v2/landing` استفاده می‌شود

## ساختار پروژه

```
├── app/
│   ├── components/     # کامپوننت‌های React
│   ├── context/        # Context API
│   ├── hooks/          # Custom Hooks
│   ├── lib/           # توابع کمکی Server-side
│   ├── globals.css    # استایل‌های جهانی
│   ├── layout.jsx     # Layout اصلی
│   └── page.jsx        # صفحه اصلی (Server Component)
├── public/            # فایل‌های استاتیک
└── ...
```

## SEO و Server-Side Rendering

این پروژه از Server-Side Rendering استفاده می‌کند که باعث می‌شود:

- ✅ محتوا در HTML اولیه وجود داشته باشد (View Source)
- ✅ موتورهای جستجو بتوانند محتوا را index کنند
- ✅ Performance بهتر برای کاربر

## تکنولوژی‌ها

- **Next.js 15** - React Framework
- **Tailwind CSS 3.4.18** - Utility-first CSS
- **React 19** - UI Library

## اسکریپت‌ها

- `npm run dev` - اجرای پروژه در حالت Development
- `npm run build` - Build پروژه برای Production
- `npm start` - اجرای پروژه Build شده
- `npm run lint` - اجرای ESLint

## نکات مهم

- در Production، حتماً URL WordPress API را در `.env.local` تنظیم کنید
- برای بهینه‌سازی SEO، محتوا در Server-Side render می‌شود
- اگر API در دسترس نباشد، محتوای پیش‌فرض نمایش داده می‌شود

## مشکلات احتمالی

### خطای CORS در Production

اگر در Production با خطای CORS مواجه شدید، باید در WordPress تنظیمات CORS را فعال کنید.

### داده‌ها نمایش داده نمی‌شوند

- بررسی کنید که URL WordPress API صحیح باشد
- بررسی کنید که endpoint `/wp-json/wp/v2/landing` در WordPress وجود داشته باشد
- در حالت Development، مطمئن شوید که WordPress در حال اجرا است
