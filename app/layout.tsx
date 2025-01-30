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
    title: "Нейропрофи",
    description: "Клиника",

};

export const dynamic = "force-dynamic";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
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
