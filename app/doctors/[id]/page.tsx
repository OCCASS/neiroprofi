import UnderHeader from "@/components/UnderHeader/UnderHeader";
import PageTitle from "@/components/PageTitle";
import BreadCrumb from "@/components/BreadCrumb";
import { TDoctor } from "@/types/doctor";
import styles from "./page.module.css"
import Image from "next/image";
import Icon from "@/components/Icon";
import Section from "@/components/Section";
import Staff from "@/components/Staff";
import H3 from "@/components/H3";
import Link from "next/link";
import LargeP from "@/components/LargeP";
import { get } from "@/lib/fetch";
import List from "@/components/List";
import { notFound } from "next/navigation"

export const revalidate = 120;

export default async function Page({ params }: { params: { id: string } }) {
    const data = await get<TDoctor[]>("/api/doctors")
    const doctor: TDoctor = data.filter(item => item.id === params.id)[0]

    if (!doctor) notFound()

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Персонал", path: "/doctors" },
                    { name: doctor.fullName, path: `/doctors/${doctor.id}` },
                ]} />
                <PageTitle>{doctor.fullName}</PageTitle>
            </UnderHeader>
            <Section className={styles.doctor__about}>
                <div className={styles.about__left}>
                    <H3 className={styles.about__title}>{doctor.fullName} – {doctor.about.toLowerCase()}{doctor.about.at(doctor.about.length - 1) === "." ? "" : "."}</H3>
                    <div className={styles.about__section}>
                        <LargeP className={styles.section__title}>
                            <Icon name={"multi_arrow_right_in_circle"} width={21} height={21} />
                            Специальность
                        </LargeP>
                        <ul className={styles.section__list}>{doctor.specialities.short.map((item, index) => <li
                            key={index}>{item}</li>)}</ul>
                    </div>
                    {
                        doctor.education.length > 0 &&
                        <div className={styles.doctor__section} style={{ borderTop: "1px solid #D3D9E8", paddingTop: "15px" }}>
                            <LargeP className={styles.section__title}>
                                <Icon name={"multi_arrow_right_in_circle"} width={21} height={21} />
                                Образование
                            </LargeP>
                            <p className={styles.section__text}>{doctor.education}</p>
                        </div>
                    }
                    {
                        doctor.specialities.detailed.length > 0 &&
                        <div className={styles.about__section_detailed}>
                            <List>
                                {doctor.specialities.detailed.map((item, index) => (
                                    <List.Item key={index}>{item}</List.Item>))
                                }
                            </List>
                        </div>
                    }
                </div>
                <div className={styles.about__imageWrapper}>
                    <Image className={styles.about__image} src={doctor.image} alt={doctor.fullName} width={500} height={500} />
                    <Link className={styles.about__button} href="https://api.whatsapp.com" type="button" target="_blank" rel="noreferer,noreply"><Icon name="whatsapp" width={45} height={45} className={styles.about__buttonIcon} /> Записаться через WhatsApp</Link>
                </div>
            </Section>
            <Staff doctors={data} />
        </>
    )
}
