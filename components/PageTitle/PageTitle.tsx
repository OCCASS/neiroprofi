import styles from "./PageTitle.module.css"

const PageTitle = ({children}: { children: React.ReactNode }) => {
    return <h1 className={styles.page_title}>{children}</h1>
}

export default PageTitle;