import AppLayout from '@/layouts/app-layout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Page() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Home"></Head>
            <AppLayout>
                <h1 className="text-xl">Body</h1>
            </AppLayout>
        </>
    );
}
