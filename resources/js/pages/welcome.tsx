import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">👋 Welcome to User Management App</h1>
                {auth.user ? (
                    <Link href="/dashboard" className="text-blue-600 hover:underline">
                        Go to Dashboard
                    </Link>
                ) : (
                    <div className="space-x-4">
                        <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
                        <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
                    </div>
                )}
            </div>
        </>
    );
}
