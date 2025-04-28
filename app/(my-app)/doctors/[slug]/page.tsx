import PageTitle from "@/components/PageTitle";
import BreadCrumb from "@/components/BreadCrumb";
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
import { loadDoctor } from "@/lib/loadData";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";
import { Media } from "../../../../payload-types";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug
    const doctor = await loadDoctor(slug)

    if (!doctor) return { title: "Доктор не найден" }

    return { title: `${doctor.fullName} | Медицинский цент «Нейропрофи»` }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const doctor = await loadDoctor(slug)

    if (!doctor) notFound()

    const getAboutTitle = () => {
        if (!doctor.about)
            return doctor.fullName

        return `${doctor.fullName} – ${doctor.about.toLowerCase().trim()}${doctor.about.at(doctor.about.length - 1) === "." ? "" : "."}`
    }

    const UnderHeader = () => {
        return (
            <>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Персонал", path: "/doctors" },
                    { name: doctor.fullName, path: `/doctors/${doctor.slug}` },
                ]} />
                <PageTitle className={styles.header__doctorName}>{doctor.fullName}</PageTitle>
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
                        <ul className={styles.section__list}>{doctor.specialitiesShort.map((item) => <li
                            key={item.id}>{item.name}</li>)}</ul>
                    </div>
                    {
                        doctor.education &&
                        <div className={styles.doctor__section} style={{ borderTop: "1px solid #D3D9E8", paddingTop: "15px" }}>
                            <LargeP className={styles.section__title}>
                                <Icon name={"multi_arrow_right_in_circle"} width={21} height={21} />
                                Образование
                            </LargeP>
                            <p className={styles.section__text}>{doctor.education}</p>
                        </div>
                    }
                    {
                        doctor.specialitiesLong &&
                        <div className={styles.about__section_detailed}>
                            <List>
                                {doctor.specialitiesLong.map((item) => (
                                    <List.Item key={item.id} className={styles.specialities_item}>{item.name}</List.Item>))
                                }
                            </List>
                        </div>
                    }
                </div>
                <div className={styles.about__imageWrapper}>
                    <Image
                        className={styles.about__image}
                        src={(doctor.image as Media).sizes?.card?.url ?? ""}
                        alt={doctor.fullName}
                        width={600}
                        height={800}
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
