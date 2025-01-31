import Section from "@/components/Section";
import styles from "./AboutDoctors.module.css"
import SubSection from "@/components/SubSection";
import AdvantageCard from "@/app/sections/AboutDoctors/AdvantageCard";
import Image from "next/image";
import Link from "next/link";
import LargeP from "@/components/LargeP";
import Icon from "@/components/Icon";
import { TDoctor } from "@/types/doctor";

const AboutDoctors = ({ doctors }: { doctors: TDoctor[] }) => {
    return (
        <Section className={styles.about_doctors}>
            <SubSection>
                <ul className={styles.about_doctors__advantages}>
                    <li>
                        <AdvantageCard
                            title="Многие наши пациенты вернулись к нормальному образу жизни, счастливы дома, на работе"
                            content="Высокая эффективность лечения неврологических заболеваний обусловлена комплексным подходом, при котором лекарственная терапия на разных этапах дополняется специальными формами восстановления и реабилитации пациентов."
                            icon={<Icon name="flowers" width={22} height={22} />}
                        />
                    </li>
                    <li>
                        <AdvantageCard
                            title="У нас работают высокопрофессиональные врачи-неврологи"
                            content="Имеющие опыт излечения широчайшего спектра неврологических заболеваний с использованием специальных комплексных программ."
                            icon={<Icon name="reversed_star" width={22} height={22} />}
                        />
                    </li>
                    <li>
                        <AdvantageCard
                            title="Персонализированный подход"
                            content="Высокая эффективность лечения неврологических заболеваний обусловлена комплексным подходом, при котором лекарственная терапия на разных этапах дополняется специальными формами восстановления и реабилитации пациентов"
                            icon={<Icon name="drugs" width={22} height={22} />}
                        />
                    </li>
                </ul>
            </SubSection>
            <SubSection className={styles.sectionSecond}>
                <LargeP className={styles.sectionSecond__title}>В нашем центре работает <span
                    style={{ color: "var(--color-primary)" }}>более 26</span> профессионалов</LargeP>
                <div className={styles.doctors_list}>
                    {
                        doctors?.slice(0, 8).map(item =>
                            <Image
                                key={item.id}
                                className={styles.doctors_list__image}
                                src={item.image}
                                alt={item.fullName}
                                width={60}
                                height={60}
                            />
                        )
                    }
                </div>
                <Link className={styles.doctors__button} href="/doctors">Перейти к профессионалам</Link>
            </SubSection>
        </Section>
    )
}

export default AboutDoctors;
