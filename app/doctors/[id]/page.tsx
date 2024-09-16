"use server"

import UnderHeader from "@/components/UnderHeader/UnderHeader";
import PageTitle from "@/components/PageTitle";
import BreadCrumb from "@/components/BreadCrumb";
import loadData from "@/lib/loadData";
import {TDoctor} from "@/types/doctor";
import styles from "./page.module.css"
import Image from "next/image";
import SmallP from "@/components/SmallP";
import Icon from "@/components/Icon";
import Section from "@/components/Section";
import Staff from "@/components/Staff";
import H3 from "@/components/H3";

export default async function Page({params}: { params: { id: string } }) {
    const data: TDoctor[] = await loadData("doctors.json")
    const doctor: TDoctor = data.filter(item => item.id === params.id)[0]

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    {name: "НейроПрофи", path: "/"},
                    {name: "Персонал", path: "/doctors"},
                    {name: doctor.fullName, path: `/doctors/${doctor.id}`},
                ]}/>
                <PageTitle>{doctor.fullName}</PageTitle>
            </UnderHeader>
            <Section className={styles.doctor__about}>
                <div className={styles.about__left}>
                    <H3 className={styles.about__title}>{doctor.fullName} – {doctor.about.toLowerCase()}{doctor.about.at(doctor.about.length - 1) === "." ? "" : "."}</H3>
                    <div className={styles.about__section}
                         style={{borderBottom: "1px solid #D3D9E8", paddingBottom: "15px"}}>
                        <SmallP className={styles.section__title}>
                            <Icon name={"multi_arrow_right_in_circle"} width={21} height={21}/>
                            Специальность:
                        </SmallP>
                        <ul className={styles.section__list}>{doctor.specialities.short.map((item, index) => <li
                            key={index}>{item}</li>)}</ul>
                    </div>
                    <div className={styles.doctor__section}>
                        <SmallP className={styles.section__title}>
                            <Icon name={"multi_arrow_right_in_circle"} width={21} height={21}/>
                            Образование
                        </SmallP>
                        <p className={styles.section__text}>{doctor.education}</p>
                    </div>
                    <div className={styles.about__section_detailed}>
                        <ul className={styles.section_detailed__list}>
                            {doctor.specialities.detailed.map((item, index) => (
                                <li key={index} className={styles.list__item}>
                                    <Icon name={"multi_arrow_right_in_circle"} width={21} height={21} className={styles.list__icon}/>
                                    {item}
                                </li>))
                            }
                        </ul>
                    </div>
                </div>
                <Image className={styles.about__image} src={doctor.image} alt={doctor.fullName} width={500} height={500}/>
            </Section>
            <Section className={styles.doctor__work_with}>
                <h2 className={styles.work_with__title}>С чем работает {doctor.fullName}:</h2>
            </Section>
            <Staff doctors={data} />
        </>
    )
}