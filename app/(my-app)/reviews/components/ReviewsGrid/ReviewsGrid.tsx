"use client"

import React from "react";
import Masonry from 'react-masonry-css'
import styles from './ReviewsGrid.module.css'

const ReviewsGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <Masonry
            breakpointCols={{
                default: 3,
                1250: 2,
                800: 1
            }}
            className={styles.grid}
            columnClassName={styles.grid__col}
        >
            {children}
        </Masonry>
    )

}

export default ReviewsGrid;
