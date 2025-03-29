import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });


export const viewport: Viewport = {
    userScalable: false,
    themeColor: "#ffffff",
    colorScheme: "light",
}

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_ROOT_URL ?? ""),
    title: `Медицинский центр "Нейропрофи"`,
    description: `Медицинский центр НейроПрофи. Город Казань ул. Космонавтов 6А. Звоните по телефону: 8 (843) 296-66-67. Комплексное лечение болевых синдромов для Вас и ваших близких.\nНейроПрофи Казань Космонавтов 6а`,
    keywords: "нейропрофи, медициниский центр, клиника казань",
    openGraph: {
        title: `Медицинский центр "Нейропрофи"`,
        description: `Медицинский центр НейроПрофи. Город Казань ул. Космонавтов 6А. Звоните по телефону: 8 (843) 296-66-67. Комплексное лечение болевых синдромов для Вас и ваших близких.\nНейроПрофи Казань Космонавтов 6а`,
        url: process.env.NEXT_PUBLIC_SITE_ROOT_URL,
        phoneNumbers: ["88432966667"],
        siteName: `Медицинский центр "Нейропрофи"`,
    }
};

export const dynamic = "force-dynamic";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <meta name="apple-mobile-web-app-title" content="Нейропрофи" />
            </head>
            <body className={montserrat.className}>
                <div className="header">
                    <Header />
                    <div id="under-header"></div>
                </div>
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
