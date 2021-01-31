import Head from 'next/head'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevLog</title>
      </Head>
      <div className="flex justify-center items-center xs:flex-col 2xs:flex-col">
        <div className="flex-1 p-5 font-mono">
          <h1 className="text-6xl">DevLog</h1>
          <p className="text-3xl">Blog creado por y para desarrolladores.</p>
        </div>
        <div className="p-5 text-center">
          <Button
            className="bg-discord transition-colors duration-300 transform hover:bg-discord-200 active:scale-90"
          >
            Hey!
          </Button>
        </div>
      </div>
    </>
  )
}
