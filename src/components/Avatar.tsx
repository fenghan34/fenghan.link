import Image from 'next/image'
import logo from 'public/logo.png'

const Avatar = () => {
  return (
    <Image
      className='logo'
      alt='Logo'
      src={logo}
      layout='intrinsic'
      width={40}
      height={40}
    />
  )
}

export default Avatar
