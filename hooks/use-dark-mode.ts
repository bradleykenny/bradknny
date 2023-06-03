import { useEffect, useState } from "react";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_DARK_KEY = "DARK_MODE";

const useDarkMode = () => {
    const isWindow = typeof window !== "undefined";
    if (isWindow) {
        const isDark = window.matchMedia(COLOR_SCHEME_QUERY).matches;
        localStorage.getItem(LOCAL_STORAGE_DARK_KEY);
    }
    
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", updatePosition);

        return () => {
            window.removeEventListener("scroll", updatePosition);
        };
    }, []);

    return {
        scrollPosition,
    };
};

export default useDarkMode;
