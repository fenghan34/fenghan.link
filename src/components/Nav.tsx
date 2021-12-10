import { Icon } from '@iconify/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import ToggleTheme from './ToggleTheme'

const list = [
  {
    href: '/about',
    children: 'About',
  },
  {
    href: '/blog',
    children: 'Blog',
  },
  {
    href: '/notes',
    children: 'Notes',
  },
]

const Nav = () => {
  const router = useRouter()

  return (
    <nav className='nav flex items-center space-x-4'>
      {list.map(({ href, children }, index) => (
        <Link key={index} href={href} passHref>
          <a
            className={
              router.asPath.includes(href) ? '!opacity-100' : undefined
            }
          >
            {children}
          </a>
        </Link>
      ))}

      <a
        href='https://github.com/fenghan34'
        target='_blank'
        title='GitHub'
        rel='noreferrer'
      >
        <Icon icon='uil:github' className='icon' />
      </a>
      <span>
        <ToggleTheme />
      </span>
    </nav>
  )
}

export default Nav
