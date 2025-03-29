import styles from "./page.module.css"
import UnderHeader from "@/components/UnderHeader/UnderHeader";
import PageTitle from "@/components/PageTitle";
import ServiceSection from "./components/ServiceSection";
import Section from "@/components/Section";
import ServicesGrid from "@/app/services/components/ServicesGrid";
import BreadCrumb from "@/components/BreadCrumb";
import { TService } from "@/types/service";
import Search from "./components/Search";
import LargeP from "@/components/LargeP";
import { get } from "@/lib/fetch";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
    title: `Наши услуги | Медицинский центр «Нейропрофи»`,
}

export default async function Page(props: { searchParams: Promise<{ search: string }> }) {
    const searchParams = await props.searchParams;
    const filterServices = (services: TService[]) => {
        if (searchParams.search) {
            return services.map(service => {
                let filteredList = service.list.map(
                    item => {
                        const filteredItems = item.items.filter(item1 => item1.name.toLowerCase().includes(searchParams.search.toLowerCase().trim()))
                        return { ...item, items: filteredItems }
                    }
                )
                filteredList = filteredList.filter(item => item.items.length > 0)

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


    const services = filterServices(await get<TService[]>("/api/services"))

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    { name: "НейроПрофи", path: "/" },
                    { name: "Прайс", path: "/services" }
                ]} />
                <PageTitle>Цены на услуги</PageTitle>
            </UnderHeader>
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
                            По запросу <span className={styles.section__not_foundQuery}>«{searchParams.search ?? ""}»</span> ничего не найдено
                        </p>
                }
            </Section>
        </>
    )
}
