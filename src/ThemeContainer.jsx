import React, { useMemo } from 'react'
import { useSettingsContext } from './SettingsContext'
import { themes } from './themes'

export default function ThemeContainer({ children }) {

    const { theme } = useSettingsContext()

    return (
        <div style={{ ...themes.styles[theme] }} className='theme-container'>{children}</div>
    )
}
