"use client"

import styles from "./ServiceSection.module.css"
import Icon from "@/components/Icon";
import LargeP from "@/components/LargeP";
import type { TServiceItemItems } from "@/types/service";
import { numberWithSpaces } from "@/utils/number_with_spaces";
import Link from "next/link";
import React, { useState } from "react";
import { Service } from "../../../../../payload-types";


const ServiceSection = ({ service, className = "" }: {
    service: Service
    className?: string
}) => {
    const [close, setClose] = useState(true)

    return (
        <section className={`${styles.service_section} ${className}`}>
            <div className={styles.service_section__header}>
                <Icon className={styles.service_section__headerMainIcon} name={service.icon} width={60} height={60} />
                <LargeP className={styles.service_section__headerTitle}><Link className={styles.service_section__headerLink} href={`/services/${service.slug}`}>{service.name}</Link></LargeP>
                {
                    (service.services?.length ?? 0) > 0 &&
                    <button className={styles.service_section__headerButton} onClick={() => setClose(prev => !prev)}>
                        <Icon className={`${styles.service_section__headerIcon} ${close ? "" : styles.service_section__headerIcon_open}`} name="arrow_bottom" width={24} height={24} />
                    </button>
                }
            </div>
            {
                (service.services?.length ?? 0) > 0 &&
                <ul className={`${styles.service_section__list} ${close ? styles.service_section__listClose : ""}`}>
                    {
                        service.services?.map((item) => (
                            <React.Fragment key={item.id}>
                                {
                                    item.title &&
                                    <li key={`title_${item.id}`} className={styles.service_section__title}>
                                        {item.title}
                                    </li>
                                }
                                <ItemItems items={item.items} asSub={item.title ? true : false} />
                            </React.Fragment>
                        ))
                    }
                </ul>
            }
        </section >
    )
}

const ItemItems = ({ items, asSub }: { items: TServiceItemItems[], asSub: boolean }) => {
    const getPriceContent = (price: number, per: string | null | undefined) => {
        const priceText = numberWithSpaces(price)
        if (per && per[per.length - 1] !== ".") per += ".";
        // Slash in first span, because when parent wraps its correctly
        if (per) return <><span>{priceText} ₽ /</span> <span>{per}</span></>
        return <span>{priceText} ₽</span>
    }

    return (
        items.map((item, index) => (
            <li key={index} className={`${styles.service_section__item} ${asSub && styles.service_section__item__sub}`}>
                <div className={styles.service_section__itemLeft}>
                    <Icon className={styles.service_section__itemIcon} name="multi_arrow_right_in_circle"
                        width={20} height={20} />
                    {item.name}
                </div>
                <p className={styles.service_section__itemRight}>
                    {getPriceContent(item.price, item.per)}
                </p>
            </li>
        ))
    )
}


export default ServiceSection;
