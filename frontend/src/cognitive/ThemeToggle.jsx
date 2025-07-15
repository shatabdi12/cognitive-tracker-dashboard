import useThemeStore from "../store/themeStore";

function ThemeToggle({ children }) {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <div
            onClick = {toggleTheme}
            className="px-4 py-2 mt-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded">
             <span className="font-medium">{theme === 'light' ? '🌞' : '🌙'}</span>
            { children }
        </div>
    );
}

export default ThemeToggle;