import { useState } from 'react';
import { LoginForm } from '../../components/LoginForm';
import styles from './styles.module.css';
import image from '../../assets/image.svg';
import imageHover from '../../assets/imageHover.svg';
import copyIcon from '../../assets/copyIcon.svg';
import { useLoginForm } from '../../hooks/useLoginForm';
import { Modal } from '../../components/Modal';

export const LoginPage = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPassword, setCopiedPassword] = useState(false);

    const {
        values,
        errors,
        isLoading,
        serverError,
        isSuccessModalOpen,
        handleChange,
        handleSubmit,
        closeModal,
    } = useLoginForm();

    const handleCopy = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <>
            <div className={styles.logoWrapper}>
                <img src={image} alt="image" className={styles.logoImage} />
                <img src={imageHover} alt="image-hover" className={styles.logoImageHover} />
            </div>
            <div className={styles.infoText}>
                <span>Email:</span>
                <span
                    className={styles.copyableItem}
                    onClick={() => handleCopy('test@evilmartians.com', setCopiedEmail)}
                >
                    test@evilmartians.com
                    <span className={styles.copyIcon}>
                        {!copiedEmail && (
                            <img src={copyIcon} alt="copy-icon" className={styles.clipboardIcon} />
                        )}
                        {copiedEmail && <span className={styles.checkIcon}>✓</span>}
                    </span>
                </span>
            </div>

            <div className={styles.infoText}>
                <span>Password:</span>
                <span
                    className={styles.copyableItem}
                    onClick={() => handleCopy('12345678', setCopiedPassword)}
                >
                    12345678
                    <span className={styles.copyIcon}>
                        {!copiedPassword && (
                            <img src={copyIcon} alt="copy-icon" className={styles.clipboardIcon} />
                        )}
                        {copiedPassword && <span className={styles.checkIcon}>✓</span>}
                    </span>
                </span>
            </div>

            <main className={styles.pageContainer}>
                <LoginForm
                    values={values}
                    errors={errors}
                    isLoading={isLoading}
                    serverError={serverError}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </main>

            <Modal isOpen={isSuccessModalOpen} onClose={closeModal}>
                <p>Successful entry!</p>
            </Modal>
        </>
    );
};
