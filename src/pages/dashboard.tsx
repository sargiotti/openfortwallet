import React, { useState, useEffect } from 'react';
import UserInfo from '@/components/userInfo';
import TransactionsList from '@/components/transactionList';
import AssetsTable from '@/components/assetsTable';
import Header from '@/components/header';
import Spinner from '@/components/spinner';
import '../app/globals.css';

import dashboardMock from '../lib/userMock.json';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [assets, setAssets] = useState([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));

                if (dashboardMock) {
                    const { user, transactions, assets } = dashboardMock;
                    setUser(user);
                    setTransactions(transactions);
                    setAssets(assets);
                } else {
                    setError('Error: No data available.');
                }
            } catch (err) {
                setError('Error: Failed to fetch data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <>

                <Header text="Dashboard" />
                <div className="container mx-auto p-4">
                    <div className="text-center mt-8">
                        <Spinner />
                        <p className='text-lg my-2'>Loading data...</p>
                    </div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header text="Dashboard" />
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg max-w-lg mx-4">
                        <p className="text-2xl font-semibold">{error}</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header text="Dashboard" />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 max-h-full">
                    <div className="overflow-auto">
                        {user ? <UserInfo user={user} /> : <p className="text-red-500">Error: User information is missing.</p>}
                    </div>
                    <div className="overflow-auto">
                        {assets.length ? <AssetsTable assets={assets} /> : <p className="text-red-500">Error: Assets data is missing.</p>}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {transactions.length ? <TransactionsList transactions={transactions} /> : <p className="text-red-500">Error: Transactions data is missing.</p>}
                </div>
            </div>
        </>
    );
}
