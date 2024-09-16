import styles from "./H3.module.css"

const H3 = ({className="", children}: { className?: string, children: React.ReactNode}) => {
    return <h3 className={`${styles.h3} ${className}`}>{children}</h3>
}

export default H3;