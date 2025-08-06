import { useLoginForm } from '../../../hooks/useLoginForm';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './styles.module.css';
import { useState } from 'react';
import EyeIcon from '../../../assets/eye.svg';
import EyeOffIcon from '../../../assets/eye-off.svg';
import clsx from 'clsx';

export const LoginForm = () => {
    const { values, errors, isLoading, serverError, handleChange, handleSubmit } = useLoginForm();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div className={clsx(styles.serverError, serverError && styles.visible)} role="alert">
                    {serverError ? serverError : ''}
                </div>

                <div className={styles.inputsGroup}>
                    <Input
                        label={
                            <>
                                Email<sup style={{ opacity: 0.6 }}>*</sup>
                            </>
                        }
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="User@email.com"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                    />
                    <Input
                        label={
                            <>
                                Password<sup style={{ opacity: 0.6 }}>*</sup>
                            </>
                        }
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        error={errors.password}
                        required
                        rightAddon={
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                className={styles.togglePasswordButton}
                            >
                                <img
                                    src={showPassword ? EyeIcon : EyeOffIcon}
                                    alt={showPassword ? 'Hide password' : 'Show password'}
                                />
                            </button>
                        }
                    />
                </div>
                <Button type="submit" isLoading={isLoading} disabled={!values.email || !values.password}>
                    Sign in
                </Button>
            </form>
        </div>
    );
};
