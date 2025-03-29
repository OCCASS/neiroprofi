"use client"

import React from "react";
import Masonry from 'react-masonry-css'
import styles from './ServicesGrid.module.css'

const ServicesGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <Masonry
            breakpointCols={{
                default: 2,
                1000: 1
            }}
            className={styles.grid}
            columnClassName={styles.grid__col}
        >
            {children}
        </Masonry>
    )

}

export default ServicesGrid;
