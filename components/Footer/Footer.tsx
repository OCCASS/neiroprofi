import styles from "./Footer.module.css"
import Link from "next/link";
import Icon from "@/components/Icon";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Icon name="white_logo" width={131} height={81}/>
            <ul className={styles.footer__nav}>
                <li><Link className={styles.footer__link} href="">О центре</Link></li>
                <li><Link className={styles.footer__link} href="">Мы лечим</Link></li>
                <li><Link className={styles.footer__link} href="">Врачи</Link></li>
                <li><Link className={styles.footer__link} href="">Прайс</Link></li>
                <li><Link className={styles.footer__link} href="">Отзывы</Link></li>
                <li><Link className={styles.footer__link} href="">Частые вопросы</Link></li>
                <li><Link className={styles.footer__link} href="">Контакты</Link></li>
            </ul>
            <div className={styles.footer__address}>
                <Icon name="map_pin" width={24} height={24}/>
                <address className={styles.address__content}>Казань ул. Космонавтов 6а</address>
            </div>
            <div className={styles.footer__phone}>
                <Icon name="fill_phone" width={24} height={25}/>
                <Link className={styles.phone__content} href="tel:8 (843) 296-66-67">8 (843) 296-66-67</Link>
            </div>
            <div>
                <ul className={styles.footer__links}>
                    <li>
                        <Link href="" className={styles.footer__link}><Icon name="instagram" width={24}
                                                                            height={24}/></Link>
                    </li>
                    <li>
                        <Link href="" className={styles.footer__link}><Icon name="vk" width={24} height={24}/></Link>
                    </li>
                    <li>
                        <Link href="" className={styles.footer__link}><Icon name="youtube" width={24}
                                                                            height={24}/></Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer