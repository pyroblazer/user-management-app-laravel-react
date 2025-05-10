import { ReactNode, useRef, useEffect } from 'react';
import axios from 'axios';

export default function SanctumProvider({ children }: { children: ReactNode }) {
    const csrfLoaded = useRef(false);

    useEffect(() => {
        const init = async () => {
            if (!csrfLoaded.current) {
                try {
                    await axios.get('/sanctum/csrf-cookie');
                    csrfLoaded.current = true;
                } catch (error) {
                    console.error('Failed to load Sanctum CSRF cookie:', error);
                }
            }
        };

        init();
    }, []);

    return <>{children}</>;
}
