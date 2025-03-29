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
import { Metadata } from "next";

export const revalidate = 120;

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const params = await props.params;
    const data = await get<TDoctor[]>("/api/doctors")
    const doctor: TDoctor = data.filter(item => item.id === params.id)[0]

    return {
        title: doctor ? `${doctor.fullName} | Медицинский цент «Нейропрофи»` : "Доктор не найдена"
    }
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const data = await get<TDoctor[]>("/api/doctors")
    const doctor: TDoctor = data.filter(item => item.id === params.id)[0]

    if (!doctor) notFound()

    const getAboutTitle = () => {
        if (!doctor.about)
            return doctor.fullName

        return `${doctor.fullName} – ${doctor.about.toLowerCase()} ${doctor.about.at(doctor.about.length - 1) === "." ? "" : "."}`
    }

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
                    <H3 className={styles.about__title}>{getAboutTitle()}</H3>
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
                                    <List.Item key={index} className={styles.specialities_item}>{item}</List.Item>))
                                }
                            </List>
                        </div>
                    }
                </div>
                <div className={styles.about__imageWrapper}>
                    <Image className={styles.about__image} src={doctor.image} alt={doctor.fullName} width={500} height={500} />
                    <Link
                        className={styles.about__button}
                        href={encodeURI(`https://wa.me/79872966667?text=Здравсвтуйте, хочу записаться к доктору ${doctor.fullName}`)}
                        type="button"
                        target="_blank"
                        rel="noreferer,noreply"
                    ><Icon name="whatsapp" width={45} height={45} className={styles.about__buttonIcon} /> Записаться через WhatsApp</Link>
                </div>
            </Section>
            <Staff doctors={data} />
        </>
    )
}
