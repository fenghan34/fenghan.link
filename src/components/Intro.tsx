import { Icon } from '@iconify/react'

const Intro = () => {
  return (
    <div className='prose md:prose-lg'>
      <h2>
        <span className='font-normal'>👋</span> Hi, I&#39;m Feng Han.
      </h2>
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
        Thanks for coming. You can
        <OuterLink
          text='email'
          href='mailto:hi@fenghan.link'
          title='hi@fenghan.link'
        />
        me with no hesitation if you have any issues.
      </p>
    </div>
  )
}

type LinkProps = {
  href: string
  icon?: string
  text: string
  [key: string]: any
}

const OuterLink = ({ text, href, icon, ...rest }: LinkProps) => {
  return (
    <a
      className='!border-none mx-1'
      href={href}
      target='_blank'
      rel='noreferrer'
      {...rest}
    >
      {text}
      {icon && <Icon className='icon ml-1' icon={icon} />}
    </a>
  )
}

export default Intro
