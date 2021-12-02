import { useCallback, useEffect, useState } from 'react'
import { clientSideCallback } from '../utils'

export type ThemeType = 'dark' | 'normal'

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(() => init() || 'normal')

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'normal' : 'dark')
  }, [theme])

  useEffect(() => {
    toggle(theme)
  }, [theme])

  return { theme, toggle: toggleTheme }
}

const init = () =>
  clientSideCallback(() => {
    let theme: ThemeType = 'normal'

    const storedTheme = localStorage.getItem('theme')

    if (
      storedTheme === 'dark' ||
      (!storedTheme &&
        window.matchMedia('(prefers-color-scheme: dark)')?.matches)
    ) {
      theme = 'dark'
    }

    return theme
  })

const toggle = (theme: ThemeType) =>
  clientSideCallback(() => {
    const htmlElement = document.documentElement

    if (theme === 'dark') {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  })

export default useTheme
