import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/logo.png'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4'>
      <Link href='/' passHref>
        <a>
          <Image
            className='cursor-pointer'
            src={logo}
            alt='logo'
            width={35}
            height={35}
          />
        </a>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
