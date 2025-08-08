import React from 'react';

const Dashboard = () => (
  <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 max-w-2xl mx-auto">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm md:text-base font-bold text-gray-800">FunnelZip AI Dashboard</h3>
      <div className="flex items-center space-x-2">
        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
          ✅ 27,600 SKUs Protected
        </div>
      </div>
    </div>
    
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 py-2 text-left font-semibold text-gray-700 text-xs">SKU</th>
              <th className="px-2 py-2 text-left font-semibold text-gray-700 text-xs">Product</th>
              <th className="px-2 py-2 text-left font-semibold text-gray-700 text-xs">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-2 py-2 font-mono text-xs">CRTN-001</td>
              <td className="px-2 py-2 text-xs">Creatine Monohydrate</td>
              <td className="px-2 py-2">
                <span className="bg-green-100 text-green-800 px-1 py-1 rounded-full text-xs font-medium">
                ✅ Optimized
              </span>
            </td>
          </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-2 py-2 font-mono text-xs">PROT-002</td>
              <td className="px-2 py-2 text-xs">Whey Protein Isolate</td>
              <td className="px-2 py-2">
                <span className="bg-yellow-100 text-yellow-800 px-1 py-1 rounded-full text-xs font-medium">
                🔧 Fixing
              </span>
            </td>
          </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-2 py-2 font-mono text-xs">BCAA-003</td>
              <td className="px-2 py-2 text-xs">BCAA Complex</td>
              <td className="px-2 py-2">
                <span className="bg-blue-100 text-blue-800 px-1 py-1 rounded-full text-xs font-medium">
                ✅ Compliant
              </span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Dashboard;