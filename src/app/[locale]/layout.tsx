import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import '@/styles/globals.css';
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from 'next-intl';
import NavbarB from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import InitialLoader from "@/components/InitialLoader";

export const metadata: Metadata = {
  title: "Super Ofitsiyant",
  description: "Get to know the Super Waiter project better",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'uz' | 'uzK' | 'ru' | 'en')) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen pb-7 md:pb-0 justify-between relative z-0 bg-[#0b0b0d] text-white ">
        <InitialLoader>
        <NextIntlClientProvider locale={locale}>
          <main className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <NavbarB />
              {children}
              <Footer />
            </div>
          </main>
        </NextIntlClientProvider>
        </InitialLoader>
      </body>
    </html>
  );
}
