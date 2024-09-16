import Section from "@/components/Section";
import styles from "./Reviews.module.css"
import ReviewCard from "@/app/sections/Reviews/ReviewCard";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

const Reviews = () => {
    return (
        <Section className={styles.reviews}>
            <div className={styles.reviews__header}>
                <div className={styles.reviews__headerDescription}></div>
                <h2 className={styles.reviews__headerTitle}>Что о нас говорят клиенты</h2>
            </div>
            <div className={styles.reviews__content}>
                <Section className={styles.reviews__list}>
                    <ReviewCard fullName="Абдуллина Алина" rating={4}
                                content="Отличное решение и выбор в пользу этой клиники. Пришла на процедуру Эндосфера и по рекомендации доктора сдала чек-ап, с большим желанием воспользовалась консультацией гинеколога-эндокринолога, здесь работает доктор действительно своего назначения. Итог-за три месяца лечения я смогла сбросить 20 килограмм и я не верю своим глазам. Да-действительно это так! Я чувствую себя на миллион долларов, моей энергии нет конца. Рекомендую! Советую! С уважением, Ольга Попова."/>
                    <ReviewCard fullName="Абдуллина Алина" rating={4}
                                content="Отличное решение и выбор в пользу этой клиники. Пришла на процедуру Эндосфера и по рекомендации доктора сдала чек-ап, с большим желанием воспользовалась консультацией гинеколога-эндокринолога, здесь работает доктор действительно своего назначения. Итог-за три месяца лечения я смогла сбросить 20 килограмм и я не верю своим глазам. Да-действительно это так! Я чувствую себя на миллион долларов, моей энергии нет конца. Рекомендую! Советую! С уважением, Ольга Попова."/>
                    <ReviewCard fullName="Абдуллина Алина" rating={4}
                                content="Отличное решение и выбор в пользу этой клиники. Пришла на процедуру Эндосфера и по рекомендации доктора сдала чек-ап, с большим желанием воспользовалась консультацией гинеколога-эндокринолога, здесь работает доктор действительно своего назначения. Итог-за три месяца лечения я смогла сбросить 20 килограмм и я не верю своим глазам. Да-действительно это так! Я чувствую себя на миллион долларов, моей энергии нет конца. Рекомендую! Советую! С уважением, Ольга Попова."/>
                    <ReviewCard fullName="Абдуллина Алина" rating={4}
                                content="Отличное решение и выбор в пользу этой клиники. Пришла на процедуру Эндосфера и по рекомендации доктора сдала чек-ап, с большим желанием воспользовалась консультацией гинеколога-эндокринолога, здесь работает доктор действительно своего назначения. Итог-за три месяца лечения я смогла сбросить 20 килограмм и я не верю своим глазам. Да-действительно это так! Я чувствую себя на миллион долларов, моей энергии нет конца. Рекомендую! Советую! С уважением, Ольга Попова."/>
                    <ReviewCard fullName="Абдуллина Алина" rating={4}
                                content="Отличное решение и выбор в пользу этой клиники. Пришла на процедуру Эндосфера и по рекомендации доктора сдала чек-ап, с большим желанием воспользовалась консультацией гинеколога-эндокринолога, здесь работает доктор действительно своего назначения. Итог-за три месяца лечения я смогла сбросить 20 килограмм и я не верю своим глазам. Да-действительно это так! Я чувствую себя на миллион долларов, моей энергии нет конца. Рекомендую! Советую! С уважением, Ольга Попова."/>
                    <ReviewCard fullName="Абдуллина Алина" rating={4} content="Вау"/>
                </Section>
                <Link href="" className={styles.reviews__add_button}>
                    <div className={styles.reviews__add_buttonContent}>
                        <Icon name="plus" width={32} height={31}/>
                        <span>Добавить<br/>отзыв</span>
                    </div>
                </Link>
                <div className={styles.reviews__rating}>
                    <Link className={styles.rating__link} href="">
                        <Icon className={styles.rating__link__icon} name="arrow_up_right" width={25} height={25} />
                    </Link>
                    <Icon className={styles.rating__icon} name="pro_doctorov" width={134} height={20}/>
                    <ul className={styles.rating__list}>
                        <li><Icon name="star" width={16} height={15}/></li>
                        <li><Icon name="star" width={16} height={15}/></li>
                        <li><Icon name="star" width={16} height={15}/></li>
                        <li><Icon name="star" width={16} height={15}/></li>
                        <li><Icon name="half_star" width={16} height={15}/></li>
                    </ul>
                    <p className={styles.rating__reviews}>71 отзыв</p>
                </div>
            </div>
        </Section>
    )
}

export default Reviews