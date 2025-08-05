import React, { type InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, id, error, ...rest }, ref) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input
                id={id}
                ref={ref}
                className={clsx(styles.input, error && styles.inputError)}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                {...rest}
            />
            {error && (
                <p id={`${id}-error`} className={styles.errorMessage} role="alert">
                    {error}
                </p>
            )}
        </div>
    );
});
