import { useLoginForm } from '../../../hooks/useLoginForm';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './styles.module.css';

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
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        error={errors.password}
                        required
                    />
                </div>
                <Button type="submit" isLoading={isLoading}>
                    Sign in
                </Button>
            </form>
        </div>
    );
};
