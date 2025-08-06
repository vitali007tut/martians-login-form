import type { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

export const Button = ({ children, isLoading, ...rest }: ButtonProps) => {
    return (
        <button className={styles.button} disabled={isLoading} {...rest}>
            {isLoading ? <div className={styles.spinner}></div> : children}
        </button>
    );
};
