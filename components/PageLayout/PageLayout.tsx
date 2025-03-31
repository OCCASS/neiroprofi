import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./PageLayout.module.css"

const PageLayout = ({ children, UnderHeaderComponent }: { children: React.ReactNode, UnderHeaderComponent: React.FC }) => {
    return (
        <>
            <div className={styles.header}>
                <Header />
                {<UnderHeaderComponent />}
            </div>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default PageLayout;
