import BreadCrumb from "@/components/BreadCrumb";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";
import styles from "./page.module.css"
import H3 from "@/components/H3";
import Staff from "@/components/Staff";
import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const revalidate = 120;

export const metadata: Metadata = {
    title: `О нас | Медицинский центр «Нейропрофи»`,
}

const UnderHeader = () => {
    return (
        <>
            <BreadCrumb items={[
                { name: "НейроПрофи", path: "/" },
                { name: "О центре", path: "/about_us" }
            ]} />
            <PageTitle>О нашем центре</PageTitle>
        </>
    )
}

export default async function Page() {
    return (
        <PageLayout UnderHeaderComponent={UnderHeader}>
            <Section className={styles.section}>
                <H3 className={styles.section__title}>
                    Казанская клиника Нейропрофи – это многопрофильная клиника с комплексным интегративным подходом к вопросам восстановления и сохранения здоровья.
                </H3>
                <div className={styles.first__content}>
                    <p>Большинство неврологических диагнозов – это заболевания с неизвестной причиной возникновения. Так гласит мировая наука. Однако, наш практический опыт показывает, что большинство патологий нервной системы являются вторичными по отношению к заболеваниям ЖКТ, системы детоксикации, обменным нарушением, инфекциям, системному воспаление и т.д. Решить окончательно все эти вопросы при помощи неврологических препаратов, которые направлены зачастую только на купирование  симптомов – невозможно. Поэтому мы и реализовали всю помощь нашим пациентам посредством осуществления лечебных индивидуальных программ ( ЛИП) (клик), которые включают в себя первичную консультацию специалистов, протокол восстановления желудочно – кишечного  тракта, дуоденальное зондирование, лечебные капельницы, лимфотропную терапию, остеопатическую коррекцию, усиленную диагностику инфекционных причин (в том числе паразитозов), коррекцию гипераммониемии и выявление генетических предпосылок для развития заболеваний и их коррекция (Синдром Жильбера, полиморфизмы генов фолатного цикла).</p>

                    <p>При помощи наших  лечебных программ  мы оказываем помощь пациентам самого разного профиля: неврологическим (ведущее направление), гинекологическим, эндокринологическим, ревматологическим.</p>
                    <p>А так же пациентам с аутоиммунными заболеваниями, патологией опорно-двигательной системы, заболеваниями желудочно-кишечного тракта и ЛОР-органоворганов.</p>

                    <p>Специфика нашего подхода – это индивидуальный персонифицированный подход к лечению пациента.</p>
                    <p>Это не симптоматическое назначение обезболивающих, психотропных, гормональных и иных препаратов, направленных на купирование симптомов и лечение диагнозов, а глубокое погружение в проблему наших подопечных и коррекция причин, повлекших за собой развитие заболеваний.</p>
                    <p>Таким образом мы проводим лечение больного, а не болезни.</p>

                    <p>К нам обращаются со следующими неврологическим жалобами и получают квалифицированную помощь:</p>
                    <ul>
                        <li>головные боли (особенно мигрень)</li>
                        <li>головокружение</li>
                        <li>онемение, судороги, дрожание в конечностях</li>
                        <li>тревожно-депрессивные расстройства и панические атаки, нарушение сна, астенические состояния</li>
                        <li>боли в позвоночнике и суставах и так далее.</li>
                    </ul>

                    <p>Принципы работы нашей клиники:</p>

                    <ul>
                        <li>Слаженная работа коллектива интегративных врачей (невролог, терапевт,  гинеколог, эндокринолог, педиатр, ЛОР врача), психолога, психотерапевта, остеопата, гастроэнтеролога, дерматовенеролога, которые придерживаются единых принципов ведения пациентов, налаживают контакт с пациентами и, что важно, все объясняют пациентам.</li>
                        <li>Также в клинике ведут прием такие редкие специалисты как вестибулолог (отоневролог) – специалист по головокружению и неврологическим  патологиям  уха, врач по заболеваниям экстрапирамидных расстройств (паркинсонолог).</li>
                        <li>Для выяснения причинных факторов заболеваний в клинике есть полный спектр лабораторной, а также ультразвуковой диагностики, профессиональный уровень микроскопии желчи, кала, анализов мочи, вегето-биорезонансная диагностика, измерение уровня аммиака в крови.</li>
                        <li>Клиника Нейропрофи является базой Казанского Государственного Медицинского Университета. Ведется глубокая научная и практическая работа по клиническому изучению гипераммониемии – влияния на организм, методов диагностики и коррекции повышенного уровня аммиака в терапии самых разных заболеваний.</li>
                    </ul>

                    <p>В клинике одним их первых появился портативный анализатор для измерения уровня аммиака в капиллярной крови Pocket-Chem.</p>
                    <p>Наш коллектив накопил огромный практический материал по аспектам гипераммониемии в неврологии, гастроэнтерологии и гепатологии.</p>

                    <p>Так же мы проводим диагностический поиск и коррекцию такого явления, как нейровоспаление. По последним научным данным, этот патологический процесс лежит в основе самых разных неврологических патологий (болезнь Альцгеймера, болезнь Паркинсона, тревожные и депрессивные расстройства, постковидные неврологические нарушения и др.)</p>

                    <p>В своей работе мы опираемся на научные открытия последних лет, которые еще не успели повсеместно зайти в практическую медицину, но уже показали свою успешность в интегративной медицине.</p>
                    <p>Цель нашей работы – здоровый и счастливый пациент!</p>
                </div>
            </Section>
            <Staff />
        </PageLayout>
    )
}
