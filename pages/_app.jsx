import { ThemeProvider } from 'next-themes'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBolt } from '@fortawesome/free-solid-svg-icons'


import '../styles/globals.css'
import Container from '@/components/Container'

library.add(fas, faBolt)

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
