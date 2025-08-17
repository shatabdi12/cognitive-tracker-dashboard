import { AiFillBulb } from 'react-icons/ai';
import { AiOutlineBulb } from 'react-icons/ai';
import useThemeStore from '../store/themeStore';

function ThemeToggle({ children }) {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="px-4 py-2 mt-4 text-black dark:text-white rounded">
      <span
        name="theme-toggle"
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        onClick={toggleTheme}
      >
        {theme === 'light' ? <AiFillBulb /> : <AiOutlineBulb />}
      </span>
      {children}
    </div>
  );
}

export default ThemeToggle;
