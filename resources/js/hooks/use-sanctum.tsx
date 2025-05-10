import { useEffect, useRef } from 'react';
import axios from 'axios';

// Called once per session to initialize Sanctum
export default function useSanctum() {
  const csrfInitialized = useRef(false);

  useEffect(() => {
    const initSanctum = async () => {
      if (!csrfInitialized.current) {
        try {
          await axios.get('/sanctum/csrf-cookie');
          csrfInitialized.current = true;
        } catch (error) {
          console.error('Failed to initialize Sanctum CSRF cookie', error);
        }
      }
    };

    initSanctum();
  }, []);
}