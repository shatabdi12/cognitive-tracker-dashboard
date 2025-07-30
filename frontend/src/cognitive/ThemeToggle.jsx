import useThemeStore from '../store/themeStore';

function ThemeToggle({ children }) {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="px-4 py-2 mt-4 text-black dark:text-white rounded">
      <span
        className="cursor-pointer px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-md hover:shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all ring-1 ring-gray-400 scale-105 hover:scale-110"
        onClick={toggleTheme}
      >
        {theme === 'light' ? '🌞' : '🌙'}
      </span>
      {children}
    </div>
  );
}

export default ThemeToggle;
