import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const viewport: Viewport = {
    userScalable: false,
    themeColor: "#ffffff",
    colorScheme: "light",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
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
    },
    appleWebApp: {
        title: "Нейропрофи"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true
        }
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head></head>
            <body className={montserrat.className}>
                <NuqsAdapter>
                    {children}
                </NuqsAdapter>
            </body>
        </html>
    );
}
