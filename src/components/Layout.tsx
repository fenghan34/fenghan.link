import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='max-w-screen-md mx-auto px-6 py-10'>
      <Header />
      <main className='prose'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
