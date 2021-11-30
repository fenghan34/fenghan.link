import ToggleTheme from './ToggleTheme'

const Nav = () => {
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
    {
      title: 'Toggle Theme',
      children: <ToggleTheme />,
    },
  ]

  return (
    <nav className='flex items-center space-x-4 text-gray-600'>
      {list.map(({ href, title, children }) => (
        <a
          className='hover:text-black'
          href={href}
          title={title}
          key={href || title}
        >
          {children}
        </a>
      ))}
    </nav>
  )
}

export default Nav
