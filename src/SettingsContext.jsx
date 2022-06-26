import { React, createContext, useContext, useState, useMemo, useCallback } from "react"
import { themes } from "./themes"

const SettingsContext = createContext()

export function useSettingsContext() {
    return useContext(SettingsContext)
}

export function SettingsProvider({ children }) {

    const [darkmode, setDarkmode] = useState(false)
    const toggleDarkmode = () => setDarkmode(!darkmode)
    const theme = useMemo(() => darkmode ? themes.names[0] : themes.names[1], [darkmode])

    return (
        <SettingsContext.Provider value={{
            theme,
            darkmode,
            setDarkmode,
            toggleDarkmode,
        }}>
            {children}
        </SettingsContext.Provider>
    )
}