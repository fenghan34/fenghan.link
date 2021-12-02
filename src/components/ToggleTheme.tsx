import { Icon } from '@iconify/react'
import useTheme from '../hooks/useTheme'

const ToggleTheme = () => {
  const { theme, toggle } = useTheme()

  return (
    <Icon
      className='icon'
      onClick={toggle}
      icon={theme === 'dark' ? 'uil:moon' : 'uil:sun'}
    />
  )
}

export default ToggleTheme
