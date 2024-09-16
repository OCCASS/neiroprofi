export type TDoctor = {
    id: string
    fullName: string
    about: string
    image: string
    position: { name: string, primary: boolean },
    specialities: { short: string[], detailed: string[] }
    education: string
}