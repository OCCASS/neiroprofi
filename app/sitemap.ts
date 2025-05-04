import { loadDoctors, loadSerivces } from "@/lib/loadData"
import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPaths = ["/", "/about_us", "/contacts", "/reviews", "/faq", "/doctors", "/services"]
    const [doctors, services] = await Promise.all([
        loadDoctors(),
        loadSerivces()
    ])

    const doctorPaths = doctors.docs.map(doctor => `/doctors/${doctor.slug}`)
    const servicePaths = services.docs.map(service => `/services/${service.slug}`)
    const allPaths = [...staticPaths, ...doctorPaths, ...servicePaths]
    return allPaths.map(path => ({
        url: `${process.env.NEXT_PUBLIC_SITE_ROOT_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    }))
}
