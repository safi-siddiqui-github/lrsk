import { ReactNode } from 'react';

export default function SecondaryButton({ children }: { children: ReactNode }) {
    return (
        <button type="button" className="w-fit border px-2 py-1 font-medium">
            {children}
        </button>
    );
}
