import { cn } from "@/services";
import { Handlee } from "next/font/google";
import Head from "next/head";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import useTheme from "@/hooks/use-theme";

import About from "@/screens/About";
import Blog from "@/screens/Blog";
import Contact from "@/screens/Contact";
import Heading from "@/screens/Heading";
import Projects from "@/screens/Projects";

const handlee = Handlee({ weight: "400", subsets: ["latin"] });

export default function Home() {
    useTheme();

    return (
        <>
            <Head>
                <title>Brad Kenny</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-between bg-gradient-to-br from-slate-200 to-white p-0 pb-24 dark:from-slate-800 dark:to-black">
                <NavBar />
                <div className="container snap-y snap-mandatory overflow-scroll">
                    <Heading />
                    <About />
                    <Projects />
                    <Blog />
                    <Contact />
                    <Footer />
                </div>
            </main>
        </>
    );
}
