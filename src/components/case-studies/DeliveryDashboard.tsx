import { DeliveryEarning, Shift } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Wallet, Clock, Star, Target, Calendar } from 'lucide-react';

interface DeliveryDashboardProps {
  earnings: DeliveryEarning[];
  shifts: Shift[];
  stats: { weeklyEarnings: number; totalOrders: number; avgRating: number; activeHours: number; incentiveProgress: number; nextMilestone: number };
}

export function DeliveryDashboard({ earnings, shifts, stats }: DeliveryDashboardProps) {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-secondary/50 rounded-xl p-4"><div className="flex items-center gap-2 text-muted-foreground text-sm mb-1"><Wallet className="w-4 h-4" />Weekly Earnings</div><div className="text-2xl font-bold text-emerald-600">₹{stats.weeklyEarnings}</div></div>
        <div className="bg-secondary/50 rounded-xl p-4"><div className="flex items-center gap-2 text-muted-foreground text-sm mb-1"><Target className="w-4 h-4" />Orders</div><div className="text-2xl font-bold text-foreground">{stats.totalOrders}</div></div>
        <div className="bg-secondary/50 rounded-xl p-4"><div className="flex items-center gap-2 text-muted-foreground text-sm mb-1"><Star className="w-4 h-4" />Rating</div><div className="text-2xl font-bold text-foreground">{stats.avgRating}</div></div>
        <div className="bg-secondary/50 rounded-xl p-4"><div className="flex items-center gap-2 text-muted-foreground text-sm mb-1"><Clock className="w-4 h-4" />Active Hours</div><div className="text-2xl font-bold text-foreground">{stats.activeHours}h</div></div>
      </div>
      <div className="bg-accent/10 rounded-xl p-4 mb-6"><div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">Incentive Progress</span><span className="text-sm text-muted-foreground">{stats.totalOrders}/{stats.nextMilestone} orders</span></div><div className="h-3 bg-secondary rounded-full overflow-hidden"><div className="h-full bg-accent rounded-full transition-all" style={{ width: `${stats.incentiveProgress}%` }} /></div><p className="text-xs text-muted-foreground mt-2">Complete {stats.nextMilestone - stats.totalOrders} more orders for ₹200 bonus!</p></div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div><h3 className="font-semibold mb-3">Earnings Breakdown</h3><div className="space-y-2">{earnings.slice(0, 5).map(e => (<div key={e.id} className="bg-secondary/30 rounded-lg p-3"><div className="flex justify-between mb-2"><span className="text-sm text-muted-foreground">{e.date}</span><span className="font-bold text-emerald-600">₹{e.total}</span></div><div className="flex gap-4 text-xs text-muted-foreground"><span>Base: ₹{e.baseEarnings}</span><span className="text-accent">+₹{e.incentives} incentives</span><span>+₹{e.tips} tips</span></div></div>))}</div></div>
        <div><h3 className="font-semibold mb-3">Available Shifts</h3><div className="space-y-2">{shifts.filter(s => s.status === 'available').map(s => (<div key={s.id} className="bg-secondary/30 rounded-lg p-3 flex items-center justify-between"><div><div className="font-medium text-sm">{s.zone}</div><div className="text-xs text-muted-foreground">{s.date} • {s.startTime}-{s.endTime}</div></div><button className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">Book</button></div>))}</div></div>
      </div>
    </div>
  );
}
