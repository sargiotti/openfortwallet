import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const iconMap = {
  Bitcoin: faBitcoin,
  Ethereum: faEthereum,
  NFT: faImage,
};

type Asset = {
  type: "crypto" | "nft";
  name: string;
  amount: string;
  currency: string;
};

type AssetsTableProps = {
  assets?: Asset[];
};

export default function AssetsTable({ assets }: AssetsTableProps) {
  if (!assets || assets.length === 0) {
    return (
      <div className="border p-4 shadow-md rounded-lg bg-white text-red-500">
        <h2 className="text-xl font-semibold mb-2">Assets</h2>
        <p>Error: No assets available or data is incomplete.</p>
      </div>
    );
  }

  return (
    <div className="border-2 p-4 rounded-lg bg-white overflow-auto">
      <h2 className="text-xl text-[#78716c] font-semibold mb-2">Assets</h2>
      <div className="overflow-y-auto max-h-60">
        <table className="w-full border-collapse">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody className="text-center">
            {assets.map((asset, index) => {
              const icon = iconMap[asset.name as keyof typeof iconMap] || faImage;
              return (
                <tr key={index} className="border-b border-gray-300">
                  <td className="p-2">
                    <FontAwesomeIcon icon={icon} className="w-6 h-6" />
                  </td>
                  <td className="p-2">{asset.name}</td>
                  <td className="p-2">{asset.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
