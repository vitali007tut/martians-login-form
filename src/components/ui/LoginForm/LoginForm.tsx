import { useLoginForm } from '../../../hooks/useLoginForm';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
    const { values, errors, isLoading, serverError, handleChange, handleSubmit } = useLoginForm();

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={handleSubmit} noValidate>
                {serverError && (
                    <div className={styles.serverError} role="alert">
                        {serverError}
                    </div>
                )}
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                />
                <Input
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                    required
                />
                <Button type="submit" isLoading={isLoading}>
                    Sign in
                </Button>
            </form>
        </div>
    );
};
