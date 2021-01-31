import Head from 'next/head'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS + TailwindCSS</title>
      </Head>
      <div className="text-discord">
        <Button
          className="bg-discord transition-colors duration-300 transform hover:bg-discord-200 active:scale-90"
        >
          Hey!
        </Button>
        <div className="w-full" />
      </div>
    </>
  )
}
