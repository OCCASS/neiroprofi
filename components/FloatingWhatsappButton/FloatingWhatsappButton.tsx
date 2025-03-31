import Link from "next/link"
import Icon from "../Icon"
import styles from "./FloatingWhatsappButton.module.css"

const FloatingWhatsappButton = ({ url }: { url: string }) => {
    return (
        <Link
            className={styles.button}
            href={encodeURI(url)}
            type="button"
            target="_blank"
            rel="noreferer,noreply"
        >
            <Icon name="whatsapp_outline" width={40} height={40} className={styles.icon} />
        </Link>
    )
}

export default FloatingWhatsappButton;
