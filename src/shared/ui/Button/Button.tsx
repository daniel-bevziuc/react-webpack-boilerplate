import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib/classNames';
import classes from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={cn(classes.Button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
