import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { cn } from 'shared/lib/classNames';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to='/'>Main Page</Link>
      <Link to='/about'>About Page</Link>
      <AppRouter />
    </div>
  );
};

export default App;
