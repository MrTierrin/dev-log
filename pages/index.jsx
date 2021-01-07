import Head from 'next/head'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS + TailwindCSS</title>
      </Head>
      <div className="text-discord">
        Hey
        <Button>Hola!</Button>
      </div>
    </>
  )
}
