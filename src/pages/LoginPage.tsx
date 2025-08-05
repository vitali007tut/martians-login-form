import { LoginForm } from '../components/ui/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
    return (
        <>
            <div className={styles.logoWrapper}>
                <img src="src/assets/image-cropped.svg" alt="logo" className={styles.logoImage} />
                <img src="src/assets/imageHover-cropped.svg" alt="logo" className={styles.logoImageHover} />
            </div>
            <main className={styles.pageContainer}>
                <LoginForm />
            </main>
        </>
    );
};
