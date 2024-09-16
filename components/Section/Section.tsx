import React from "react";
import styles from "./Section.module.css"

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    className?: string
}

const Section = ({className="", children, ...rest}: Props) => {
    return <section className={`${styles.section} ${className}`} {...rest}>{children}</section>
}

export default Section;