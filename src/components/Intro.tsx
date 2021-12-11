import { Icon } from '@iconify/react'

const Intro = () => {
  return (
    <div className='prose prose-lg'>
      <p className='text-2xl font-semibold'>Hi, I&#39;m Feng Han. </p>
      <p>
        I am a junior front-end developer from
        <OuterLink
          text='Chengdu'
          href='https://en.wikipedia.org/wiki/Chengdu'
        />
        , mainly focusing on
        <OuterLink
          text='React'
          href='https://reactjs.org/'
          icon='akar-icons:react-fill'
        />
        and
        <OuterLink
          text='Node'
          href='https://nodejs.org/en/'
          icon='akar-icons:node-fill'
        />
        . You can find me on
        <OuterLink text='GitHub' href='https://github.com/fenghan34' />. Writing
        and sharing can help me sharpen my communication skills and motivate me
        keep going on, therefore I made this website.
      </p>
      <p>
        Thanks for coming. You can{' '}
        <a href='mailto:fenghan770@gmail.com'>email</a> me with no hesitation if
        you have any issues.
      </p>
    </div>
  )
}

type LinkProps = {
  href: string
  icon?: string
  text: string
}

const OuterLink = ({ text, href, icon }: LinkProps) => {
  return (
    <a
      className='!border-none mx-1'
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {text}
      {icon && <Icon className='icon ml-1' icon={icon} />}
    </a>
  )
}

export default Intro
