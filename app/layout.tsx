import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Нейропрофи",
    description: "Клиника",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={montserrat.className}>
        <div className="header">
            <Header/>
            <div id="under-header"></div>
        </div>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
