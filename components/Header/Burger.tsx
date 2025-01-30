"use client"

import styles from "./Header.module.css";
import Icon from "@/components/Icon";
import Link from "next/link";
import { useEffect, useState } from "react";
import useOutsideClick from "@/lib/hooks/useOutsideClick";

const Burger = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showBurger, setShowBurger] = useState(false);
    const ref = useOutsideClick(() => setShowBurger(false));

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) setIsSticky(true);
            else setIsSticky(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const close = () => {
        setShowBurger(false);
    }

    return (
        <div className={`${styles.header__burger} ${isSticky ? styles.burger__fixed : null}`} ref={ref}>
            <button
                onClick={() => setShowBurger(prev => !prev)}
                type="button"
                aria-label="Меню"
                className={styles.burger__button}
            >
                <Icon name="burger" width={27} height={17} />
            </button>
            <ul className={`${styles.burger__list} ${showBurger ? styles.burger__show : null}`}>
                <li className={styles.nav__item}><Link href="/about_us" className={styles.nav__link} onClick={close}>О центре</Link></li>
                <li className={styles.nav__item}><Link href="/services" className={styles.nav__link} onClick={close}>Услуги</Link></li>
                <li className={styles.nav__item}><Link href="/doctors" className={styles.nav__link} onClick={close}>Персонал</Link></li>
                <li className={styles.nav__item}><Link href="/reviews" className={styles.nav__link} onClick={close}>Отзывы</Link></li>
                <li className={styles.nav__item}><Link href="/faq" className={styles.nav__link} onClick={close}>Частые вопросы</Link>
                </li>
                <li className={styles.nav__item}><Link href="/contacts" className={styles.nav__link} onClick={close}>Контакты</Link></li>
            </ul>
        </div>
    )
}

export default Burger;
