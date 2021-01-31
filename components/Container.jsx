import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Container({
  children
}) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Container;