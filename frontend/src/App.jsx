import './App.css';
import { Toaster } from 'react-hot-toast';
import CognitiveDashboard from './cognitive/cognitiveDashboard.jsx';
import useThemeStore from './store/themeStore';

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <CognitiveDashboard></CognitiveDashboard>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
