import avatar from 'public/avatar.svg'

const Avatar = () => {
  return (
    <img
      className='transform -translate-x-[15px]'
      src={avatar}
      alt='Avatar'
      width={80}
    />
  )
}

export default Avatar
