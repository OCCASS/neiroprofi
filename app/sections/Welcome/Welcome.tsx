import styles from "./Welcome.module.css"
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import UnderHeader from "@/components/UnderHeader/UnderHeader";

const Welcome = () => {
    return (
        <UnderHeader>
            <div className={styles.welcome_section}>
                <div>
                    <h1 className={styles.welcome_section__title}>Комплексное<br/> лечение <span
                        className={styles.welcome_section__titleBlue}>болевых<br/> синдромов</span> в Казани</h1>
                    <div className={styles.welcome_section__buttons}>
                        <Link href="" className={`${styles.buttons__button} ${styles.buttons__buttonBlue}`}>
                            <Icon name="phone" width={24} height={25}/>
                            <span>Запись на консультацию</span>
                        </Link>
                        <Link href="" className={`${styles.buttons__button} ${styles.buttons__buttonWhite}`}>
                            <Icon name="circle_arrow_right" width={25} height={25}/>
                            <span>Наши направления</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.welcome_section__image}>
                    <Image className={styles.welcome_section__imageImage} src="/woman.png" alt="" aria-hidden="true"
                           width={739} height={682}/>
                </div>
                <div className={styles.welcome_section__rating}>
                    <Icon name="pro_doctorov" width={134} height={20}/>
                    <ul className={styles.rating__stars}>
                        <li><Icon name="star" width={16} height={15}/></li>
                        <li><Icon name="star" width={16} height={15}/></li>
                        <li><Icon name="star" width={16} height={15}/></li>
                        <li><Icon name="star" width={16} height={15}/></li>
                        <li><Icon name="half_star" width={16} height={15}/></li>
                    </ul>
                    <p>71 отзыв</p>
                </div>
            </div>
        </UnderHeader>
    )
}

export default Welcome;