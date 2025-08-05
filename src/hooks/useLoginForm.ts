import { useState } from 'react';
import * as authService from '../services/authService';

type FormValues = Record<'email' | 'password', string>;
type FormErrors = Partial<Record<'email' | 'password', string>>;

export const useLoginForm = () => {
    const [values, setValues] = useState<FormValues>({ email: '', password: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined });
        }
        setServerError(null);
    };

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!values.email) {
            newErrors.email = 'Please fill out email field';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            newErrors.email = 'Enter the correct email address';
        }

        if (!values.password) {
            newErrors.password = 'Please fill out password field';
        } else if (values.password.length < 8) {
            newErrors.password = 'The password must be at least 8 characters long';
        }
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        setServerError(null);
        try {
            await authService.login(values.email, values.password);
            alert('Успешный вход!');
        } catch (error) {
            if (error instanceof Error) {
                setServerError(error.message);
            } else {
                setServerError('Произошла неизвестная ошибка');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        values,
        errors,
        isLoading,
        serverError,
        handleChange,
        handleSubmit,
    };
};
