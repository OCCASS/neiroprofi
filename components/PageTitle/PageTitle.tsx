import styles from "./PageTitle.module.css"

const PageTitleSkeleton = () => {
    return <div className={styles.page_title_skeleton}></div>
}

const PageTitle = ({ children }: { children: React.ReactNode }) => {
    return <h1 className={styles.page_title}>{children}</h1>
}

PageTitle.Skeleton = PageTitleSkeleton

export default PageTitle;
