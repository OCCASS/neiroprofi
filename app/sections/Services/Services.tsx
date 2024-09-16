import Section from "@/components/Section";
import styles from "./Services.module.css"
import LargeP from "@/components/LargeP";
import ServiceCard from "@/app/sections/Services/ServiceCard";

const SERVICES = [
    {
        name: "Дуоденальное зондирование",
        price: 2700,
        icon: {
            name: "stomach",
            size: {width: 62, height: 62}
        }
    },
    {
        name: "Рефлексотерапия",
        price: 2700,
        icon: {
            name: "reflexoter",
            size: {width: 60, height: 59}
        }
    },
    {
        name: "ВРТ диагностика",
        price: 2700,
        icon: {
            name: "VRT",
            size: {width: 58, height: 59}
        }
    },
    {
        name: "Массаж",
        price: 2700,
        icon: {
            name: "massage",
            size: {width: 63, height: 59}
        }
    },
    {
        name: "Гирудотерапия",
        price: 2700,
        icon: {
            name: "hyrudo",
            size: {width: 34, height: 57}
        }
    },
    {
        name: "Плазмолифтинг",
        price: 2700,
        icon: {
            name: "plasmolifting",
            size: {width: 43, height: 59}
        }
    },
    {
        name: "Физиотерапия",
        price: 2700,
        icon: {
            name: "phisiotherapy",
            size: {width: 58, height: 57}
        }
    },
    {
        name: "Медикаментозная терапия",
        price: 2700,
        icon: {
            name: "med-injection",
            size: {width: 40, height: 59}
        }
    },
    {
        name: "УЗИ",
        price: 2700,
        icon: {
            name: "uzi",
            size: {width: 60, height: 59}
        }
    },
    {
        name: "Анализы",
        price: 2700,
        icon: {
            name: "analizi",
            size: {width: 55, height: 59}
        }
    },
    {
        name: "Лимфотропная терапия",
        price: 2700,
        icon: {
            name: "limpho",
            size: {width: 57, height: 57}
        }
    },
    {
        name: "Постковидная реабилитация",
        price: 2700,
        icon: {
            name: "limpho",
            size: {width: 57, height: 57}
        }
    },
    {
        name: "Лечебные программы",
        price: 2700,
        icon: {
            name: "limpho",
            size: {width: 57, height: 57}
        }
    }
]

const Services = () => {
    return (
        <Section className={styles.services}>
            <div className={styles.services__header}>
                <LargeP className={styles.services__headerDescription}>Мы профессионалы своего дела</LargeP>
                <h2 className={styles.services__headerTitle}>Наши услуги</h2>
            </div>
            <div className={styles.services__list}>
                {SERVICES.map((item, i) => <ServiceCard key={i} {...item} />)}
            </div>
        </Section>
    )
}

export default Services;