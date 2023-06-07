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
        let theme = getTheme();

        if (theme === undefined) {
            const isDeviceDark = window.matchMedia(COLOR_SCHEME_QUERY).matches;
            theme = isDeviceDark ? "dark" : "light";

            setTheme(theme);
        }

        const isDark = theme === 'dark';
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    const toggleTheme = () => {
        
    }

    return {
        toggleTheme
    }
};

export default useTheme;
