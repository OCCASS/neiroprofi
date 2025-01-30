import Section from "@/components/Section";
import styles from "./Services.module.css"
import LargeP from "@/components/LargeP";
import ServiceCard from "@/app/sections/Services/ServiceCard";
import { TService } from "@/types/service";

const Services = ({ services }: { services: TService[] }) => {
    return (
        <Section className={styles.services}>
            <div className={styles.services__header}>
                <LargeP className={styles.services__headerDescription}>Мы профессионалы своего дела</LargeP>
                <h2 className={styles.services__headerTitle}>Наши услуги</h2>
            </div>
            <div className={styles.services__list}>
                {services.map((item, i) => <ServiceCard key={i} service={item} />)}
            </div>
        </Section>
    )
}

export default Services;
