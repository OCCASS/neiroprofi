"use server"

import UnderHeader from "@/components/UnderHeader/UnderHeader";
import styles from "./page.module.css"
import DoctorCard from "@/components/DoctorCard";
import PageTitle from "@/components/PageTitle";
import BreadCrumb from "@/components/BreadCrumb";
import {TDoctor} from "@/types/doctor";
import loadData from "@/lib/loadData";

export default async function Page() {
    const doctors: TDoctor[] = await loadData("doctors.json")

    return (
        <>
            <UnderHeader>
                <BreadCrumb items={[
                    {name: "НейроПрофи", path: "/"},
                    {name: "Персонал", path: "/doctors"}
                ]}/>
                <PageTitle>Наш персонал</PageTitle>
            </UnderHeader>
            <div className={styles.doctors__list}>
                {
                    doctors.map(item => <DoctorCard key={item.id} data={item}/>)
                }
            </div>
        </>
    )
}