import styles from "./Welcome.module.css"
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import Rating from "@/components/Rating";

const Welcome = () => {
    return (
        <div className={styles.welcome_section}>
            <div style={{ width: "100%" }}>
                <h1 className={styles.welcome_section__title}>Здоровая – <span
                    className={styles.welcome_section__titlePrimary}>неврология</span> через здоровую печень!</h1>
                <div className={styles.welcome_section__buttons}>
                    <Link href="tel:88432966667" className={`${styles.buttons__button} ${styles.buttons__buttonSecondary}`}>
                        <Icon name="phone" width={24} height={25} />
                        <span>Запись на консультацию</span>
                    </Link>
                    <Link href="#services" className={`${styles.buttons__button} ${styles.buttons__buttonWhite}`}>
                        <Icon name="circle_arrow_right" width={25} height={25} />
                        <span>Наши направления</span>
                    </Link>
                </div>
            </div>
            <div className={styles.welcome_section__image}>
                <Image
                    className={styles.welcome_section__imageImage}
                    src="/webp/woman.webp"
                    overrideSrc="/png/woman.png"
                    alt="Woman"
                    aria-hidden="true"
                    width={739} height={682}
                    priority={true}
                />
            </div>
            <div className={styles.welcome_section__rating}>
                <Icon name="pro_doctorov" width={134} height={20} className={styles.welcome_section__prodoctorov_icon} />
                <Rating value={4} />
                <p>71 отзыв</p>
            </div>
        </div>
    )
}

export default Welcome;
