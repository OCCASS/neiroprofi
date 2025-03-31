import Section from "@/components/Section";
import styles from "./AboutDoctors.module.css"
import SubSection from "@/components/SubSection";
import AdvantageCard from "@/app/sections/AboutDoctors/AdvantageCard";
import Image from "next/image";
import Link from "next/link";
import LargeP from "@/components/LargeP";
import Icon from "@/components/Icon";
import type { TDoctor } from "@/types/doctor";
import { loadDoctors } from "@/lib/loadData";

const AboutDoctors = async () => {
    const doctors: TDoctor[] = await loadDoctors()

    return (
        <Section className={styles.about_doctors}>
            <SubSection>
                <ul className={styles.about_doctors__advantages}>
                    <li>
                        <AdvantageCard
                            title="Слаженная работа коллектива интегративных врачей"
                            content="Неврологи, терапевты, гинекологи, эндокринологи, педиатры, ЛОР врачи, остеопаты, психологи, которые придерживаются единых принципов ведения пациентов, все объясняют и налаживают контакт с пациентом."
                            icon={<Icon name="flowers" width={22} height={22} />}
                        />
                    </li>
                    <li>
                        <AdvantageCard
                            title="Поиск причинных факторов заболеваний"
                            content="Для этого в клинике есть полный спектр лабораторной диагностики – профессиональный уровень микроскопии желчи и мазков, кала, анализов мочи, вегето-биорезонансная диагностика, измерение уровня аммиака, УЗИ диагностики."
                            icon={<Icon name="reversed_star" width={22} height={22} />}
                        />
                    </li>
                    <li>
                        <AdvantageCard
                            title="Реализация системного подхода к терапии"
                            content="Через наши Лечебные Индивидуальные Программы (ЛИП), ключевыми компонентами которых являются дуоденальные зондирования, внутривенные капельницы, висцеральная  и лимфотропная терапия, остеопатия,  а также иглорефлексо-, плазма- и  гирудотерапия."
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
                                src={`/staff/webp/${item.image}.webp`}
                                overrideSrc={`/staff/jpeg/${item.image}.jpg`}
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
