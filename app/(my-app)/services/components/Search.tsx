"use client"

import { useQueryState } from "nuqs";
import styles from "../page.module.css"
import useDebounce from "@/lib/hooks/useDebounce";
import { useEffect, useState } from "react";

const Search = () => {
    const [searchQuery, setSearchQuery] = useQueryState("search", { defaultValue: "", shallow: false })
    const [search, setSearch] = useState(searchQuery ?? "")
    const debouncedSearch = useDebounce(search, 500)

    useEffect(() => {
        setSearchQuery(debouncedSearch)
    }, [debouncedSearch])

    return <input
        placeholder="Введите ключевое слово"
        className={styles.section__input}
        value={search}
        onChange={e => setSearch(e.target.value)}
        autoComplete="off"
        type="text"
    />
}

export default Search;
