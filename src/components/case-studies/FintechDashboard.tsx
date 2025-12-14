import { useState } from 'react';
import { Transaction } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Search, Filter, TrendingUp, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

interface FintechDashboardProps {
  transactions: Transaction[];
  stats: { totalVolume: number; successRate: number; avgSettlementTime: string; activeDisputes: number; pendingSettlements: number; monthlyGrowth: number };
}

export function FintechDashboard({ transactions, stats }: FintechDashboardProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredTransactions = filter === 'all' ? transactions : transactions.filter(t => t.status === filter);

  const statusColors = {
    completed: 'bg-emerald-100 text-emerald-700',
    pending: 'bg-amber-100 text-amber-700',
    failed: 'bg-red-100 text-red-700',
    refunded: 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="p-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-secondary/50 rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <TrendingUp className="w-4 h-4" />Total Volume
          </div>
          <div className="text-2xl font-bold text-foreground">₹{(stats.totalVolume / 1000).toFixed(0)}K</div>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <CheckCircle2 className="w-4 h-4" />Success Rate
          </div>
          <div className="text-2xl font-bold text-emerald-600">{stats.successRate}%</div>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <Clock className="w-4 h-4" />Avg Settlement
          </div>
          <div className="text-2xl font-bold text-foreground">{stats.avgSettlementTime}</div>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <AlertCircle className="w-4 h-4" />Active Disputes
          </div>
          <div className="text-2xl font-bold text-amber-600">{stats.activeDisputes}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {['all', 'completed', 'pending', 'failed', 'refunded'].map((status) => (
          <button key={status} onClick={() => setFilter(status)} className={cn("px-3 py-1 rounded-full text-sm font-medium transition-colors", filter === status ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80")}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Transaction ID</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Merchant</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((txn) => (
              <tr key={txn.id} className="border-b border-border/50 hover:bg-secondary/30">
                <td className="py-3 px-4 text-sm font-mono">{txn.id}</td>
                <td className="py-3 px-4 text-sm">{txn.merchantName}</td>
                <td className="py-3 px-4 text-sm font-medium">₹{txn.amount.toLocaleString()}</td>
                <td className="py-3 px-4"><span className={cn("px-2 py-1 rounded-full text-xs font-medium", statusColors[txn.status])}>{txn.status}</span></td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
