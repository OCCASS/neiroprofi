"use client"

import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";

const UnderHeader = ({ children }: { children: ReactNode }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    return mounted ? createPortal(children, document.getElementById("under-header") as HTMLElement) : null
}

export default UnderHeader
