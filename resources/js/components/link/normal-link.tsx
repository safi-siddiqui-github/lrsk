import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function NormalLink({ children, href, addClasses }: { children: ReactNode; href: string; addClasses?: string }) {
    return (
        <Link
            href={href}
            className={`px-2 py-1 font-medium ${addClasses}`}
        >
            {children}
        </Link>
    );
}
