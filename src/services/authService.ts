export const login = (email: string, password: string): Promise<{ success: boolean }> => {
    console.log('Sending to server (mocked):', { email, password });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test@evilmartians.com' && password === '12345678') {
                resolve({ success: true });
            } else {
                reject(new Error('Invalid email or password'));
            }
        }, 1500);
    });
};
