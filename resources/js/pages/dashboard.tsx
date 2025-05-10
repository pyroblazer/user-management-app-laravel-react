import { useEffect, useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import api from '@/lib/axios';
import useSanctum from '@/hooks/use-sanctum';
import type { User } from '@/types';

export default function Dashboard() {
    const [users, setUsers] = useState<User[]>([]);
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch users from API
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await api.get('/users');
            setUsers(res.data);
            setError(null);
        } catch (err) {
            console.error('Fetch failed:', err);
            setError('Gagal mengambil data pengguna.');
        } finally {
            setLoading(false);
        }
    };

    // Handle new user submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/users', form);
            setForm({ name: '', email: '', password: '' });
            fetchUsers(); // Refresh list
        } catch (err) {
            console.error('Create failed:', err);
            setError('Gagal menambah pengguna.');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">User Management</h1>

                <form onSubmit={handleSubmit} className="mb-8 space-y-4 max-w-md">
                    <input
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="border rounded px-3 py-2 w-full"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="border rounded px-3 py-2 w-full"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={e => setForm({ ...form, password: e.target.value })}
                        className="border rounded px-3 py-2 w-full"
                        required
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Tambah Pengguna
                    </button>
                </form>

                {error && <div className="text-red-500 mb-4">{error}</div>}

                <div className="overflow-x-auto">
                    <table className="w-full border">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2 border">ID</th>
                                <th className="p-2 border">Name</th>
                                <th className="p-2 border">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={3} className="p-4 text-center">Loading...</td>
                                </tr>
                            ) : users.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="p-4 text-center">Tidak ada pengguna.</td>
                                </tr>
                            ) : (
                                users.map(user => (
                                    <tr key={user.id}>
                                        <td className="p-2 border">{user.id}</td>
                                        <td className="p-2 border">{user.name}</td>
                                        <td className="p-2 border">{user.email}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
