import Section from "@/components/Section";
import styles from "./Fields.module.css"
import LargeP from "@/components/LargeP";
import FieldCard from "@/app/sections/Fields/FieldCard";

const FIELDS = [
    {
        name: "Неврология",
        icon: {
            name: "brain",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Терапия",
        icon: {
            name: "stethoscope",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Гинекология",
        icon: {
            name: "pelvis",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Эндокринология",
        icon: {
            name: "thyroid_gland",
            size: { width: 34, height: 40 }
        }
    },
    {
        name: "Гастроэнтерология",
        icon: {
            name: "stomach_gray",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Педиатрия",
        icon: {
            name: "baby",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Дерматовенерология",
        icon: {
            name: "bacteria",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Кардиология",
        icon: {
            name: "heart",
            size: { width: 45, height: 56 }
        }
    },
    {
        name: "Ревматология",
        icon: {
            name: "foot",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Остеопатия",
        icon: {
            name: "osteopathy",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Психология",
        icon: {
            name: "psychology",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Психотерапия",
        icon: {
            name: "psychotherapy",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "Оториноларингология",
        icon: {
            name: "nose",
            size: { width: 45, height: 45 }
        }
    },
    {
        name: "УЗИ",
        icon: {
            name: "ultrasound_machine",
            size: { width: 45, height: 45 }
        }
    },
]

const Fields = () => {
    return (
        <Section className={styles.fields}>
            <div className={styles.fields__header}>
                <LargeP className={styles.fields__headerDescription}>Только современные и эффективные методы
                    лечения</LargeP>
                <h2 className={styles.fields__headerTitle}>Наши направления</h2>
            </div>
            <div className={styles.fields__body}>
                <Section className={styles.fields__list}>
                    <div className={styles.list__content}>
                        {FIELDS.map((item, i) => <FieldCard key={i} name={item.name} icon={item.icon} />)}
                    </div>
                </Section>
            </div>
        </Section>
    )
}

export default Fields;
