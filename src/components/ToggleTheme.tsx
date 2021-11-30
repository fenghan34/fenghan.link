import { Icon } from '@iconify/react'
import useTheme from '../hooks/useTheme'

const ToggleTheme = () => {
  const { theme, toggle } = useTheme()

  return (
    <Icon
      className='text-xl align-text-bottom'
      onClick={toggle}
      icon={theme === 'dark' ? 'uil:moon' : 'uil:sun'}
    />
  )
}

export default ToggleTheme
