import { ReactNode } from 'react';

export default function PrimaryButton({ children }: { children: ReactNode }) {
    return (
        <button type="button" className="bg-black px-2 py-1 font-medium w-fit">
            {children}
        </button>
    );
}
