import Head from "next/head";

import Heading from "@/screens/Heading";
import Projects from "@/screens/Projects";
import About from "@/screens/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brad Kenny</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-between bg-gradient-to-br from-slate-800 to-black p-0 pb-24">
        <Heading />
        <About />
        <Projects />
      </main>
    </>
  );
}
