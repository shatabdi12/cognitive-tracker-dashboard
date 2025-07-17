import './App.css';
import CognitiveDashboard from './cognitive/cognitiveDashboard.jsx';
import useThemeStore from './store/themeStore';

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <CognitiveDashboard></CognitiveDashboard>
    </div>
  );
}

export default App;
