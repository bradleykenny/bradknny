import { cn } from "@/services";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useScrollPosition from "@/hooks/use-scroll-position";

function NavBar() {
    const { scrollPosition } = useScrollPosition();
    const isWindow = typeof window !== "undefined";

    return (
        <div
            className={cn(
                "fixed left-1/2 top-10 z-10 mx-auto flex -translate-x-1/2 self-center overflow-hidden rounded-full bg-gradient-to-br from-gray-500 to-gray-800 p-0.5",
                isWindow &&
                    scrollPosition > window.innerHeight - 100 &&
                    "hidden"
            )}
        >
            <div className="flex rounded-full bg-gradient-to-br from-gray-600 to-gray-800">
                <a
                    className="m-1 cursor-pointer rounded-full px-6 py-2 transition-all ease-in-out hover:bg-slate-50/20"
                    href="#about"
                >
                    About
                </a>
                <a
                    className="m-1 cursor-pointer rounded-full px-6 py-2 transition-all ease-in-out hover:bg-slate-50/20"
                    href="#projects"
                >
                    Projects
                </a>
                <a
                    className="m-1 cursor-pointer rounded-full px-6 py-2 transition-all ease-in-out hover:bg-slate-50/20"
                    href="#blog"
                >
                    Blog
                </a>
                <a
                    className="m-1 cursor-pointer rounded-full px-6 py-2 transition-all ease-in-out hover:bg-slate-50/20"
                    href="#contact"
                >
                    Contact
                </a>
                <span className="m-1 flex cursor-pointer content-center items-center justify-center rounded-full transition-all ease-in-out hover:bg-slate-50/20">
                    <FontAwesomeIcon icon={faSun} className="h-12 w-12" />
                </span>
            </div>
        </div>
    );
}

export default NavBar;
