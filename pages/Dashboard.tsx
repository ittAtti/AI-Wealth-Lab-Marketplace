import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useStore } from '../context/StoreContext';
import { DollarSign, ShoppingBag, TrendingUp, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { products } = useStore();

  // Mock Analytics Data
  const salesData = [
    { name: 'Mon', sales: 400 },
    { name: 'Tue', sales: 300 },
    { name: 'Wed', sales: 600 },
    { name: 'Thu', sales: 800 },
    { name: 'Fri', sales: 500 },
    { name: 'Sat', sales: 900 },
    { name: 'Sun', sales: 700 },
  ];

  const totalRevenue = 12450.00;
  const totalSales = 342;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Creator Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-400 text-sm font-medium">Total Revenue</span>
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <DollarSign className="text-emerald-400" size={20} />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">${totalRevenue.toLocaleString()}</div>
          <div className="text-sm text-emerald-400 mt-2 flex items-center gap-1">
            <TrendingUp size={14} /> +12.5% this week
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
             <span className="text-slate-400 text-sm font-medium">Total Sales</span>
             <div className="p-2 bg-blue-500/10 rounded-lg">
               <ShoppingBag className="text-blue-400" size={20} />
             </div>
          </div>
          <div className="text-3xl font-bold text-white">{totalSales}</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
             <span className="text-slate-400 text-sm font-medium">Active Products</span>
             <div className="p-2 bg-purple-500/10 rounded-lg">
               <ShoppingBag className="text-purple-400" size={20} />
             </div>
          </div>
          <div className="text-3xl font-bold text-white">{products.length}</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
             <span className="text-slate-400 text-sm font-medium">Customers</span>
             <div className="p-2 bg-orange-500/10 rounded-lg">
               <Users className="text-orange-400" size={20} />
             </div>
          </div>
          <div className="text-3xl font-bold text-white">289</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Sales Chart */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-6">Revenue Overview</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={3} dot={{r: 4, fill: '#10b981'}} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Performance Mock */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
           <h3 className="text-lg font-bold text-white mb-6">Top Products</h3>
           <div className="space-y-4">
              {products.slice(0, 4).map((p, i) => (
                <div key={p.id} className="flex items-center gap-4 p-3 hover:bg-slate-800/50 rounded-lg transition-colors">
                  <div className="font-bold text-slate-500 w-6">0{i+1}</div>
                  <div className="w-10 h-10 bg-slate-800 rounded overflow-hidden">
                    <img src={p.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-white font-medium text-sm truncate">{p.title}</div>
                    <div className="text-slate-500 text-xs">{p.reviews} sales</div>
                  </div>
                  <div className="text-emerald-400 font-bold text-sm">
                    ${(p.price * 12).toFixed(0)}
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
