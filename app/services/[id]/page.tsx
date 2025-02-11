import styles from "./page.module.css"
import { TService } from "@/types/service"
import UnderHeader from "@/components/UnderHeader/UnderHeader"
import BreadCrumb from "@/components/BreadCrumb"
import PageTitle from "@/components/PageTitle"
import Section from "@/components/Section"
import H3 from "@/components/H3"
import Icon from "@/components/Icon"
import Link from "next/link"
import Image from "next/image"
import { get } from "@/lib/fetch"
import SubSection from "@/components/SubSection"
import List from "@/components/List"
import LargeP from "@/components/LargeP"
import { notFound } from "next/navigation";
import { Metadata } from "next"

export const revalidate = 0;


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const data = await get<TService[]>("/api/services")
    const service: TService = data.filter(item => item.id === params.id)[0]

    return {
        title: service ? `${service.name} | Медицинский цент «Нейропрофи»` : "Услуга не найдена"
    }
}

export default async function Page({ params }: { params: { id: string } }) {
    const data = await get<TService[]>("/api/services")
    const service: TService = data.filter(item => item.id === params.id)[0]

    if (!service) notFound()

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Прайс", path: "/services" },
                    { name: service.name, path: `/services/${service.id}` }
                ]} />
                <PageTitle>{service.name}</PageTitle>
            </UnderHeader>
            <Section className={styles.aboutSection}>
                <div className={styles.about}>
                    <div className={styles.about__left}>
                        <H3 className={styles.about__title}>
                            {service.name} – {service.descriptionShort.toLowerCase()}
                            {service.descriptionShort.at(service.descriptionShort.length - 1) === "" ? "" : "."}
                        </H3>
                        <p className={styles.about__content}>{service.description}</p>
                    </div>
                    <div className={styles.about__imageWrapper}>
                        <Image className={styles.about__image} src={service.image} alt={service.name} width={500} height={500} />
                        <Link className={styles.about__button} href="https://api.whatsapp.com" type="button" target="_blank" rel="noreferer,noreply"><Icon name="whatsapp" width={45} height={45} className={styles.about__buttonIcon} /> Записаться через WhatsApp</Link>
                    </div>
                </div>
            </Section>
            {
                (service.advantages.length + service.indications.length + service.contraindications.length) > 0 &&
                <Section className={styles.infoSection}>
                    {
                        service.advantages.length > 0 &&
                        <SubSection>
                            <LargeP className={styles.infoSection__title}>{service.name}:</LargeP>
                            <List separators={true}>
                                {service.advantages.map((item, index) => <List.Item key={index} className={styles.infoSection__item}>{item.toLowerCase()}</List.Item>)}
                            </List>
                        </SubSection>
                    }
                    {
                        service.indications.length > 0 &&
                        <SubSection>
                            <LargeP className={styles.infoSection__title}>Показания к применению:</LargeP>
                            <List separators={true}>
                                {service.indications.map((item, index) => <List.Item key={index} className={styles.infoSection__item}>{item.toLowerCase()}</List.Item>)}
                            </List>
                        </SubSection>
                    }
                    {
                        service.contraindications.length > 0 &&
                        <SubSection>
                            <LargeP className={styles.infoSection__title}>Противопоказания к применению:</LargeP>
                            <List separators={true}>
                                {service.contraindications.map((item, index) => <List.Item key={index} className={styles.infoSection__item}>{item.toLowerCase()}</List.Item>)}
                            </List>
                        </SubSection>
                    }
                </Section>
            }
        </>
    )
}
