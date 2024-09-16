"use client"

import {createPortal} from "react-dom";
import {useEffect, useState} from "react";

const UnderHeader = ({children}: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    return mounted ? createPortal(children, document.getElementById("under-header") as HTMLElement) : null
}

export default UnderHeader