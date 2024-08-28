import React from 'react';

type Transaction = {
  id: string;
  from_wallet?: string;
  to_wallet?: string;
  type: "credit" | "debit";
  amount: number;
  currency: string;
  timestamp: string;
};

type TransactionsListProps = {
  transactions?: Transaction[];
};

export default function TransactionsList({ transactions }: TransactionsListProps) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="border p-4 shadow-md rounded-lg bg-white text-red-500">
        <h2 className="text-xl font-semibold mb-2">Transactions</h2>
        <p>Error: No transactions available or data is incomplete.</p>
      </div>
    );
  }

  return (
    <div className="border-2 p-4 rounded-lg bg-white">
      <h2 className="text-xl text-[#78716c] font-semibold mb-2">Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-max">
          <thead className='text-center'>
            <tr className="border-b border-gray-300">
              <th className="p-2">ID</th>
              <th className="p-2">From Wallet</th>
              <th className="p-2">To Wallet</th>
              <th className="p-2">Type</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Currency</th>
              <th className="p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {transactions.map(transaction => (
              <tr key={transaction.id} className="border-b border-gray-300">
                <td className="p-2">{transaction.id}</td>
                <td className="p-2">{transaction.from_wallet || '-'}</td>
                <td className="p-2">{transaction.to_wallet || '-'}</td>
                <td className="p-2">{transaction.type}</td>
                <td className="p-2">{transaction.amount}</td>
                <td className="p-2">{transaction.currency}</td>
                <td className="p-2">{new Date(transaction.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
