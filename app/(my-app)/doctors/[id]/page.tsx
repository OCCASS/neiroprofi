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
import List from "@/components/List";
import { notFound } from "next/navigation"
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { loadDoctor, loadDoctors } from "@/lib/loadData";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";

export const dynamicParams = false

export async function generateStaticParams() {
    const data = await loadDoctors()
    return data.map(item => ({ id: item.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const id = (await params).id
    const doctor: TDoctor | null = await loadDoctor(id)

    if (!doctor) return { title: "Доктор не найден" }

    return { title: `${doctor.fullName} | Медицинский цент «Нейропрофи»` }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const doctor: TDoctor | null = await loadDoctor(id)

    if (!doctor) notFound()

    const getAboutTitle = () => {
        if (!doctor.about)
            return doctor.fullName

        return `${doctor.fullName} – ${doctor.about.toLowerCase()}${doctor.about.at(doctor.about.length - 1) === "." ? "" : "."}`
    }

    const UnderHeader = () => {
        return (
            <>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Персонал", path: "/doctors" },
                    { name: doctor.fullName, path: `/doctors/${doctor.id}` },
                ]} />
                <PageTitle>{doctor.fullName}</PageTitle>
            </>
        )
    }

    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
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
                    <Image
                        className={styles.about__image}
                        src={`/staff/webp/${doctor.image}.webp`}
                        overrideSrc={`/staff/jpeg/${doctor.image}.jpg`}
                        alt={doctor.fullName}
                        width={500}
                        height={500}
                    />
                    <Link
                        className={styles.about__button}
                        href={encodeURI(`https://wa.me/79872966667?text=Здравсвтуйте, хочу записаться к доктору ${doctor.fullName}`)}
                        type="button"
                        target="_blank"
                        rel="noreferer,noreply"
                    ><Icon name="whatsapp" width={45} height={45} className={styles.about__buttonIcon} /> Записаться через WhatsApp</Link>
                </div>
            </Section>
            <Staff />
            <FloatingWhatsappButton url={`https://wa.me/79872966667?text=Здравсвтуйте, хочу записаться к доктору ${doctor.fullName}`} />
        </PageLayout>
    )
}
