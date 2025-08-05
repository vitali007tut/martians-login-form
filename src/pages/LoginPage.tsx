import { LoginForm } from '../components/ui/LoginForm';
import styles from './LoginPage.module.css';
import image from '../assets/image.svg';
import imageHover from '../assets/imageHover.svg';

export const LoginPage = () => {
    return (
        <>
            <div className={styles.logoWrapper}>
                <img src={image} alt="image" className={styles.logoImage} />
                <img src={imageHover} alt="image-hover" className={styles.logoImageHover} />
            </div>
            <main className={styles.pageContainer}>
                <LoginForm />
            </main>
        </>
    );
};
