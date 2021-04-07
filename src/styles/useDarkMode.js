import { useState } from 'react'

export const useDarkMode = (getTheme) => {
    const [ theme, setTheme ] = useState(getTheme)

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    localStorage.setItem('theme', theme)
    
    return [ theme, toggleTheme ]
}