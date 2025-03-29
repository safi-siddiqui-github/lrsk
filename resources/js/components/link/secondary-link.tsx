import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function SecondaryLink({ children, href }: { children: ReactNode; href: string }) {
    return (
        <Link href={href} className="rounded border px-2 py-1 font-medium  w-fit">
            {children}
        </Link>
    );
}
