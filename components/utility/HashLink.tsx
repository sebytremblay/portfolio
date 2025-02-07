import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface HashLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const HashLink: React.FC<HashLinkProps> = ({ href, children, className, onClick }) => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Check for redirect path from 404.html
        if (typeof window !== 'undefined') {
            const redirectPath = sessionStorage.getItem('redirectPath');
            if (redirectPath) {
                sessionStorage.removeItem('redirectPath');
                window.history.replaceState(null, '', redirectPath);
                router.push(redirectPath);
            }
        }
    }, [router]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isClient) {
            router.push(href);
        }
    };

    return (
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
};

export default HashLink; 