import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

export const Button = ({ children, isLoading, ...rest }: ButtonProps) => {
    return (
        <button className={clsx(styles.button)} disabled={isLoading} {...rest}>
            {isLoading ? <div className={styles.spinner}></div> : children}
        </button>
    );
};
