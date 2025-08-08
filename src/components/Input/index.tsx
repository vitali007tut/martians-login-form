import React, { type InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: React.ReactNode;
    error?: string;
    rightAddon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, id, error, rightAddon, ...rest }, ref) => {
        return (
            <div className={styles.inputWrapper}>
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
                <div className={styles.inputContainer}>
                    <input
                        id={id}
                        ref={ref}
                        className={clsx(styles.input, error && styles.inputError)}
                        aria-invalid={!!error}
                        aria-describedby={error ? `${id}-error` : undefined}
                        {...rest}
                    />
                    {rightAddon && <div className={styles.rightAddon}>{rightAddon}</div>}
                </div>
                <p id={`${id}-error`} className={styles.errorMessage} role="alert">
                    {error ? error : ''}
                </p>
            </div>
        );
    }
);
