const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_THEME_KEY = "THEME";

type ThemeOptions = "light" | "dark";

const useTheme = () => {
    const isWindow = typeof window !== "undefined";

    const getTheme = (): ThemeOptions => {
        return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeOptions;
    };

    const setTheme = (theme: ThemeOptions) => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    };

    if (isWindow) {
        let theme: ThemeOptions = getTheme();

        if (theme === undefined) {
            const isDeviceDark = window.matchMedia(COLOR_SCHEME_QUERY).matches;
            theme = isDeviceDark ? "dark" : "light";

            setTheme(theme);
        }

        document.documentElement.classList.add(theme);
    }

    const toggleTheme = () => {
        
    }

    return {
        toggleTheme
    }
};

export default useTheme;
