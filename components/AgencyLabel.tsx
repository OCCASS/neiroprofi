import Link from "next/link"

const AgencyLabel = () => {
    return (
        <div style={{ textAlign: "center", fontSize: 14, padding: "8px 0" }}>
            Сайт разработан агенством <Link href="https://agilize.ru" style={{ color: "var(--color-black)" }}>AGILIZE</Link>
        </div>
    )
}

export default AgencyLabel;
