import { Icon } from '@iconify/react'
import useTheme from '../hooks/useTheme'

const ToggleTheme = () => {
  const { theme, toggle } = useTheme()

  return (
    <Icon
      className='text-[1.2rem] cursor-pointer'
      onClick={toggle}
      icon={theme === 'dark' ? 'uil:moon' : 'uil:sun'}
    />
  )
}

export default ToggleTheme
