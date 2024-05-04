import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import SocialCard from "@/components/SocialCard";

import { profiles } from "@/config/social-profiles";

function Contact() {
    return (
        <div className="flex h-screen flex-col" id="contact">
            <SectionHeader title="Contact" />
            <div className="mb-6 flex h-full flex-row gap-6">
                <div className="grid flex-[4] grid-rows-3 gap-4">
                    {profiles.map((profile, idx) => (
                        <SocialCard {...profile} key={idx} />
                    ))}
                </div>
                <div className="flex h-full flex-[1] content-center items-center">
                    <p className="w-full -rotate-90 bg-gradient-to-bl from-slate-400 to-slate-500/0 bg-clip-text text-center text-[10rem] font-bold text-transparent dark:from-slate-800 dark:to-slate-900/0">
                        OR
                    </p>
                </div>
                <form className="relative flex flex-[4] flex-col gap-4">
                    <div className="group rounded-xl bg-gradient-to-br from-gray-600/50 to-gray-800/80 p-1 shadow-xl transition-all ease-in-out focus-within:from-gray-400/50 focus-within:to-gray-600/50">
                        <input
                            type="text"
                            className="w-full rounded-lg bg-gray-900/50 p-6 outline-none"
                            placeholder="What is your name?"
                        />
                    </div>
                    <div className="group rounded-xl bg-gradient-to-br from-gray-600/50 to-gray-800/80 p-1 shadow-xl transition-all ease-in-out focus-within:from-gray-400/50 focus-within:to-gray-600/50">
                        <input
                            type="email"
                            className="w-full rounded-lg bg-gray-900/50 p-6 outline-none"
                            placeholder="What is your email?"
                        />
                    </div>
                    <div className="group flex-1 rounded-xl bg-gradient-to-br from-gray-600/50 to-gray-800/80 p-1 shadow-xl transition-all ease-in-out focus-within:from-gray-400/50 focus-within:to-gray-600/50">
                        <textarea
                            className="h-full w-full resize-none rounded-lg bg-gray-900/50 p-6 outline-none"
                            placeholder="What did you want to say?"
                        />
                    </div>
                    <button className="group w-full  rounded-xl  bg-gradient-to-br from-blue-600 to-green-600 p-1 transition-all ease-in-out hover:brightness-125">
                        <div className="rounded-lg bg-gradient-to-br from-blue-700 to-green-700 p-6 shadow-xl">
                            <p className="mx-auto bg-gradient-to-br from-gray-50/90 to-gray-50/10 bg-clip-text text-xl font-bold text-transparent drop-shadow-xl transition-all ease-in-out group-hover:scale-110">
                                Submit
                            </p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
