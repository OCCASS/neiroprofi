import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });


export const viewport: Viewport = {
    userScalable: false
}

export const metadata: Metadata = {
    title: `Медицинский центр "Нейропрофи"`,
    description: `Медицинский центр НейроПрофи. Город Казань ул. Космонавтов 6А. Звоните по телефону: 8 (843) 296-66-67. Комплексное лечение болевых синдромов для Вас и ваших близких.\nНейроПрофи Казань Космонавтов 6а`,
    themeColor: "#ffffff",
    colorScheme: "light",
    keywords: "нейропрофи, медициниский центр, клиника казань",
    openGraph: {
        title: `Медицинский центр "Нейропрофи"`,
        description: `Медицинский центр НейроПрофи. Город Казань ул. Космонавтов 6А. Звоните по телефону: 8 (843) 296-66-67. Комплексное лечение болевых синдромов для Вас и ваших близких.\nНейроПрофи Казань Космонавтов 6а`,
        url: process.env.ROOT_URL,
        phoneNumbers: ["88432966667"],
        siteName: `Медицинский центр "Нейропрофи"`,
        images: {
            url: "/opengraph_preview.jpg",
            secureUrl: "/opengraph_preview.jpg",
            alt: `Медицинский центр "Нейропрофи"`,
            width: 640,
            height: 320
        },
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
