import { useCallback, useEffect, useState } from 'react'
import { clientSideCallback } from '../utils'

export type ThemeType = 'dark' | 'normal'

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(init())

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'normal' : 'dark')
  }, [theme])

  useEffect(() => {
    toggle(theme)
  }, [theme])

  return { theme, toggle: toggleTheme }
}

const init = () =>
  (clientSideCallback(() => localStorage.getItem('theme')) ||
    'normal') as ThemeType

const toggle = (theme: ThemeType) =>
  clientSideCallback(() => {
    document.documentElement.className = theme === 'dark' ? 'dark' : ''
    localStorage.setItem('theme', theme)
  })

export default useTheme
