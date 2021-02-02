import Head from 'next/head'
import Post from '@/components/Post'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevLog</title>
      </Head>
      <div className="flex justify-center items-center xs:flex-col 2xs:flex-col">
        <div className="flex-1 p-5 font-mono">
          <h1 className="text-7xl">DevLog</h1>
          <p className="text-3xl">Blog creado por y para desarrolladores.</p>
          <p>Comparte y encuentra códigos y trucos utiles que ayuden en tu desarrollo!</p>
        </div>
        <div className="p-5">
          {/* <Button
            className="bg-discord transition-colors duration-300 transform hover:bg-discord-200 active:scale-90"
          >
            Hey!
          </Button> */}
          <Post />
        </div>
      </div>
      <section className="bg-gray-700 p-10">
        <h1 className="text-4xl mb-2">Publicaciones más gustadas</h1>
        <div className="grid grid-cols-4 gap-10">
          <Post />
          <Post />
          <Post />

          <Post />
          <Post />
          <Post />

          <Post />
          <Post />
          <Post />
        </div>
      </section>
    </>
  )
}
