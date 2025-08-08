import React from 'react';
import styles from './styles.module.css';
import { Button } from '../Button';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) {
        return null;
    }

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.content} onClick={handleContentClick}>
                <div className={styles.body}>{children}</div>
                <Button onClick={onClose}>
                    Close
                </Button>
            </div>
        </div>
    );
};