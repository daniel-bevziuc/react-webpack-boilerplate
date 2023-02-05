import { AppRouter } from './providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwithcer';
import { cn } from 'shared/lib/classNames';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <ThemeSwitcher />
      <AppLink to='/' theme={AppLinkTheme.PRIMARY}>
        Main Page
      </AppLink>
      <AppLink to='/about' theme={AppLinkTheme.PRIMARY}>
        About Page
      </AppLink>
      <AppRouter />
    </div>
  );
};

export default App;
