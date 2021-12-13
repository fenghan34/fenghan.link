import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='max-w-screen-[65ch] mx-auto px-6 py-10 <sm:(py-6)'>
      <Header />
      <main className='pt-14 <sm:(pt-8)'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
