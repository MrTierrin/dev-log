import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import Container from '@/components/Container'

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
