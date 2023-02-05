import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from 'shared/lib/classNames';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme, ...otherProps } = props;

  return (
    <Link
      className={cn(classes.AppLink, {}, [className, classes[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
