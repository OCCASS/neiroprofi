import styles from "./page.module.css"
import BreadCrumb from "@/components/BreadCrumb"
import PageTitle from "@/components/PageTitle"
import Section from "@/components/Section"
import H3 from "@/components/H3"
import Icon from "@/components/Icon"
import Link from "next/link"
import Image from "next/image"
import SubSection from "@/components/SubSection"
import List from "@/components/List"
import LargeP from "@/components/LargeP"
import { notFound } from "next/navigation";
import { Metadata } from "next"
import PageLayout from "@/components/PageLayout"
import { loadSerivce } from "@/lib/loadData"
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton"
import { Media } from "../../../../payload-types"
import RichText from "@/components/RichTextViewer"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug
    const service = await loadSerivce(slug)

    return {
        title: service ? `${service.name} | Медицинский цент «Нейропрофи»` : "Услуга не найдена"
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const service = await loadSerivce(slug)

    if (!service) notFound()

    let titleContent;
    if (service.descriptionShort) {
        titleContent = `${service.name} – ${service.descriptionShort}`.trim()
        if (service.descriptionShort.at(service.descriptionShort.length - 1) !== ".") titleContent += "."
    } else {
        titleContent = service.name.trim()
    }

    const UnderHeader = () => {
        return (
            <>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Прайс", path: "/services" },
                    { name: service.name, path: `/services/${service.slug}` }
                ]} />
                <PageTitle>{service.name}</PageTitle>
            </>
        )
    }


    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <Section className={styles.aboutSection}>
                <div className={styles.about}>
                    <div className={styles.about__left}>
                        <H3 className={styles.about__title}>{titleContent}</H3>
                        <RichText className={styles.about__content} data={service.descriptionLong} />
                    </div>
                    <div className={styles.about__imageWrapper}>
                        <Image
                            className={styles.about__image}
                            src={(service.image as Media).thumbnailURL ?? ""}
                            alt={service.name}
                            width={500}
                            height={500}
                        />

                        <Link
                            className={styles.about__button}
                            href={encodeURI(`https://wa.me/79872966667?text=Здравсвтуйте, хочу записаться на услугу ${service.name}`)}
                            type="button"
                            target="_blank"
                            rel="noreferer,noreply"
                        ><Icon name="whatsapp" width={45} height={45} className={styles.about__buttonIcon} /> Записаться через WhatsApp</Link>
                    </div>
                </div>
            </Section>
            {
                ((service.advantages?.length ?? 0) + (service.indications?.length ?? 0) + (service.contraindications?.length ?? 0)) > 0 &&
                <Section className={styles.infoSection}>
                    {
                        service.advantages &&
                        <SubSection>
                            <LargeP className={styles.infoSection__title}>{service.name}:</LargeP>
                            <List separators={true}>
                                {service.advantages.map((item) => <List.Item key={item.id} className={styles.infoSection__item}>{item.name?.toLowerCase()}</List.Item>)}
                            </List>
                        </SubSection>
                    }
                    {
                        service.indications &&
                        <SubSection>
                            <LargeP className={styles.infoSection__title}>Показания к применению:</LargeP>
                            <List separators={true}>
                                {service.indications.map((item, index) => <List.Item key={index} className={styles.infoSection__item}>{item.name?.toLowerCase()}</List.Item>)}
                            </List>
                        </SubSection>
                    }
                    {
                        service.contraindications &&
                        <SubSection>
                            <LargeP className={styles.infoSection__title}>Противопоказания к применению:</LargeP>
                            <List separators={true}>
                                {service.contraindications.map((item, index) => <List.Item key={index} className={styles.infoSection__item}>{item.name?.toLowerCase()}</List.Item>)}
                            </List>
                        </SubSection>
                    }
                </Section>
            }
            <FloatingWhatsappButton url={`https://wa.me/79872966667?text=Здравсвтуйте, хочу записаться на услугу ${service.name}`} />
        </PageLayout>
    )
}
