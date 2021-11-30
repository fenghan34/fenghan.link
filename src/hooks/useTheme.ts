import { useCallback, useEffect, useState } from 'react'
import { clientSideCallback } from '../utils'

export type ThemeType = 'dark' | 'white'

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(
    () => clientSideCallback(init) || 'white'
  )

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'white' : 'dark')
  }, [theme])

  useEffect(() => {
    clientSideCallback(() => toggle(theme))
  }, [theme])

  return { theme, toggle: toggleTheme }
}

const init = () => {
  const storedTheme = localStorage.getItem('theme')
  let theme: ThemeType = 'white'

  if (
    storedTheme === 'dark' ||
    (storedTheme !== 'white' &&
      storedTheme !== 'dark' &&
      window.matchMedia('(prefers-color-scheme: dark)')?.matches)
  ) {
    theme = 'dark'
  }

  return theme
}

const toggle = (theme: ThemeType) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  localStorage.setItem('theme', theme)
}

export default useTheme
