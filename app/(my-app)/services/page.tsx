import styles from "./page.module.css"
import PageTitle from "@/components/PageTitle";
import ServiceSection from "./components/ServiceSection";
import Section from "@/components/Section";
import ServicesGrid from "@/app/services/components/ServicesGrid";
import BreadCrumb from "@/components/BreadCrumb";
import Search from "./components/Search";
import LargeP from "@/components/LargeP";
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { loadSerivces } from "@/lib/loadData";
import { Service } from "../../../payload-types";

export const metadata: Metadata = {
    title: `Наши услуги | Медицинский центр «Нейропрофи»`,
}
export const dynamic = "force-dynamic"
export const revalidate = 120

const UnderHeader = () => {
    return (
        <>
            <BreadCrumb items={[
                { name: "НейроПрофи", path: "/" },
                { name: "Прайс", path: "/services" }
            ]} />
            <PageTitle>Цены на услуги</PageTitle>
        </>
    )
}

export default async function Page({ searchParams }: { searchParams: Promise<{ search: string | undefined }> }) {
    const search = (await searchParams).search

    const filterServices = (services: Service[]) => {
        if (search) {
            return services.map(service => {
                let filteredList = service.services?.map(
                    item => {
                        const filteredItems = item.items?.filter(item1 => item1.name?.toLowerCase().includes(search.toLowerCase().trim()))
                        return { ...item, items: filteredItems }
                    }
                )
                filteredList = filteredList?.filter(item => item.items) ?? []

                if (filteredList.length > 0) {
                    return {
                        ...service,
                        list: filteredList
                    };
                }

                return null;
            }).filter(service => service !== null)
        }

        return services
    }

    const data = await loadSerivces()
    const services = filterServices(data.docs)

    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <Section className={styles.section__search}>
                <LargeP>Быстрый поиск по названию</LargeP>
                <Search />
            </Section>
            <Section className={styles.sections_list}>
                {
                    services.length > 0
                        ?
                        <ServicesGrid>
                            {
                                services.map((item, index) => (
                                    <ServiceSection
                                        key={index}
                                        className={styles.sections_list__item}
                                        service={item}
                                    />
                                ))
                            }
                        </ServicesGrid>
                        :
                        <p className={styles.section__not_found}>
                            По запросу <span className={styles.section__not_foundQuery}>«{search ?? ""}»</span> ничего не найдено
                        </p>
                }
            </Section>
        </PageLayout>
    )
}
