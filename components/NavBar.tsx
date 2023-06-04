import { cn } from "@/services";
import { faHome, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useTheme from "@/hooks/use-theme";
import useScrollPosition from "@/hooks/use-scroll-position";

function NavBar() {
    const { scrollPosition } = useScrollPosition();
    const isWindow = typeof window !== "undefined";

    return (
        <div
            className={cn(
                "fixed left-1/2 top-8 z-50 mx-auto flex -translate-x-1/2 self-center overflow-hidden rounded-full bg-gradient-to-br from-gray-200 to-gray-200 p-0.5 dark:from-gray-500 dark:to-gray-800",
                isWindow &&
                    scrollPosition === window.innerHeight - 100 &&
                    "hidden"
            )}
        >
            <div className="flex rounded-full bg-gradient-to-br from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-800">
                <span className="m-1 flex cursor-pointer content-center items-center justify-center rounded-full transition-all ease-in-out hover:bg-slate-500/20 dark:hover:bg-slate-50/20 px-2">
                <a
                    href="#"
                >
                    <FontAwesomeIcon icon={faHome} className="h-12 w-12" />
                    </a>
                </span>
                <a
                    className="m-1 cursor-pointer rounded-full px-6 py-2 transition-all ease-in-out hover:bg-slate-500/20 dark:hover:bg-slate-50/20"
                    href="#about"
                >
                    About
                </a>
                <a
                    className="m-1 cursor-pointer rounded-full px-6 py-2 transition-all ease-in-out hover:bg-slate-500/20 dark:hover:bg-slate-50/20"
                    href="#projects"
                >
                    Projects
                </a>
                <a
                    className="m-1 cursor-pointer rounded-full px-6 py-2 transition-all ease-in-out hover:bg-slate-500/20 dark:hover:bg-slate-50/20"
                    href="#blog"
                >
                    Blog
                </a>
                <a
                    className="m-1 cursor-pointer rounded-full px-6 py-2 transition-all ease-in-out hover:bg-slate-500/20 dark:hover:bg-slate-50/20"
                    href="#contact"
                >
                    Contact
                </a>
                <span className="m-1 flex cursor-pointer content-center items-center justify-center rounded-full transition-all ease-in-out hover:bg-slate-500/20 dark:hover:bg-slate-50/20 px-2">
                    <FontAwesomeIcon icon={faSun} className="h-12 w-12" />
                </span>
            </div>
        </div>
    );
}

export default NavBar;
