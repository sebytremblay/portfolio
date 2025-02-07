import { useRouter as useNextRouter } from 'next/router';
import { useEffect } from 'react';

export function useRouter() {
    const router = useNextRouter();

    useEffect(() => {
        // Handle hash changes
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash) {
                router.push(hash);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [router]);

    const push = (path: string) => {
        window.location.hash = path;
    };

    return {
        ...router,
        push,
    };
} 