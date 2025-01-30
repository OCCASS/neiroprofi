import styles from "./Header.module.css"
import Link from "next/link";
import Icon from "@/components/Icon";
import Burger from "./Burger";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/"><Icon className={styles.header__logo} name="logo" width={131} height={81} /></Link>
            <div className={styles.header__address}>
                <Icon name="map_pin" width={24} height={24} />
                <address className={styles.address__content}>Казань<br />ул. Космонавтов 6а</address>
            </div>
            <nav className={styles.header__nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}><Link href="/about_us" className={styles.nav__link}>О центре</Link></li>
                    <li className={styles.nav__item}><Link href="/services" className={styles.nav__link}>Услуги</Link></li>
                    <li className={styles.nav__item}><Link href="/doctors" className={styles.nav__link}>Персонал</Link></li>
                    <li className={styles.nav__item}><Link href="/reviews" className={styles.nav__link}>Отзывы</Link></li>
                    <li className={styles.nav__item}><Link href="/faq" className={styles.nav__link}>Частые вопросы</Link>
                    </li>
                    <li className={styles.nav__item}><Link href="/contacts" className={styles.nav__link}>Контакты</Link></li>
                </ul>
            </nav>
            <div className={styles.header__phone}>
                <div className={styles.phone__icon_wrapper}>
                    <Icon className={styles.phone__icon} name="phone" width={24} height={25} />
                </div>
                <a className={styles.phone__content} href="tel:8 (843) 296-66-67">8 (843) 296-66-67</a>
            </div>
            <Burger />
        </header>
    )
}

export default Header
