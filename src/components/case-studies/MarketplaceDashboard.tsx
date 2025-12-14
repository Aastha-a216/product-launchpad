import { Order, InventoryItem } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Package, TrendingUp, RotateCcw, Star, AlertTriangle } from 'lucide-react';

interface MarketplaceDashboardProps {
  orders: Order[];
  inventory: InventoryItem[];
  stats: { totalOrders: number; revenue: number; returnRate: number; avgRating: number; pendingOrders: number; lowStockItems: number };
}

export function MarketplaceDashboard({ orders, inventory, stats }: MarketplaceDashboardProps) {
  const statusColors = { placed: 'bg-blue-100 text-blue-700', processing: 'bg-amber-100 text-amber-700', shipped: 'bg-purple-100 text-purple-700', delivered: 'bg-emerald-100 text-emerald-700', returned: 'bg-red-100 text-red-700' };
  const lowStock = inventory.filter(i => i.stock <= i.lowStockThreshold);

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-secondary/50 rounded-xl p-4"><div className="flex items-center gap-2 text-muted-foreground text-sm mb-1"><Package className="w-4 h-4" />Total Orders</div><div className="text-2xl font-bold text-foreground">{stats.totalOrders}</div></div>
        <div className="bg-secondary/50 rounded-xl p-4"><div className="flex items-center gap-2 text-muted-foreground text-sm mb-1"><TrendingUp className="w-4 h-4" />Revenue</div><div className="text-2xl font-bold text-emerald-600">₹{(stats.revenue / 1000).toFixed(0)}K</div></div>
        <div className="bg-secondary/50 rounded-xl p-4"><div className="flex items-center gap-2 text-muted-foreground text-sm mb-1"><Star className="w-4 h-4" />Avg Rating</div><div className="text-2xl font-bold text-foreground">{stats.avgRating}</div></div>
        <div className="bg-secondary/50 rounded-xl p-4"><div className="flex items-center gap-2 text-muted-foreground text-sm mb-1"><AlertTriangle className="w-4 h-4" />Low Stock</div><div className="text-2xl font-bold text-amber-600">{lowStock.length}</div></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div><h3 className="font-semibold mb-3">Recent Orders</h3><div className="space-y-2">{orders.map(o => (<div key={o.id} className="bg-secondary/30 rounded-lg p-3 flex items-center justify-between"><div><div className="font-medium text-sm">{o.id}</div><div className="text-xs text-muted-foreground">{o.customerName}</div></div><span className={cn("px-2 py-1 rounded-full text-xs font-medium", statusColors[o.status])}>{o.status}</span></div>))}</div></div>
        <div><h3 className="font-semibold mb-3">Low Stock Alerts</h3><div className="space-y-2">{lowStock.map(i => (<div key={i.id} className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-center justify-between"><div><div className="font-medium text-sm">{i.name}</div><div className="text-xs text-muted-foreground">SKU: {i.sku}</div></div><div className="text-right"><div className="text-red-600 font-bold">{i.stock} left</div><div className="text-xs text-muted-foreground">Min: {i.lowStockThreshold}</div></div></div>))}</div></div>
      </div>
    </div>
  );
}
