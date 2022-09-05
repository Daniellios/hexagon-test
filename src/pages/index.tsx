import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Statistics from "../components/Statistics"
import UrlForm from "../components/UrlForm"

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }])

  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container w-full mx-auto flex flex-col gap-12 items-center justify-start min-h-screen  ">
        <UrlForm></UrlForm>
        <Statistics></Statistics>
      </main>
    </>
  )
}

export default Home
