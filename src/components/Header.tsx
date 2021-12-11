import Link from 'next/link'
import Avatar from './Avatar'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4'>
      <Link href='/' passHref>
        <a>
          <Avatar />
        </a>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
