// Mock data for case studies and portfolio features

export interface Transaction {
  id: string;
  merchantName: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  type: 'payment' | 'settlement' | 'refund';
  date: string;
  paymentMethod: string;
}

export interface Order {
  id: string;
  customerName: string;
  items: { name: string; quantity: number; price: number }[];
  status: 'placed' | 'processing' | 'shipped' | 'delivered' | 'returned';
  total: number;
  date: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stock: number;
  lowStockThreshold: number;
  category: string;
  price: number;
}

export interface DeliveryEarning {
  id: string;
  date: string;
  orders: number;
  baseEarnings: number;
  incentives: number;
  tips: number;
  total: number;
}

export interface Shift {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  zone: string;
  status: 'available' | 'booked' | 'completed';
  estimatedOrders: number;
}

// Fintech Dashboard Mock Data
export const transactions: Transaction[] = [
  { id: 'TXN001', merchantName: 'Chai Point', amount: 12500, status: 'completed', type: 'payment', date: '2024-01-15', paymentMethod: 'UPI' },
  { id: 'TXN002', merchantName: 'Fresh Mart', amount: 8750, status: 'pending', type: 'settlement', date: '2024-01-15', paymentMethod: 'Card' },
  { id: 'TXN003', merchantName: 'Tech Store', amount: 45000, status: 'completed', type: 'payment', date: '2024-01-14', paymentMethod: 'NetBanking' },
  { id: 'TXN004', merchantName: 'Book Hub', amount: 2300, status: 'refunded', type: 'refund', date: '2024-01-14', paymentMethod: 'UPI' },
  { id: 'TXN005', merchantName: 'Gadget Zone', amount: 18900, status: 'failed', type: 'payment', date: '2024-01-13', paymentMethod: 'Card' },
  { id: 'TXN006', merchantName: 'Food Express', amount: 5600, status: 'completed', type: 'payment', date: '2024-01-13', paymentMethod: 'UPI' },
  { id: 'TXN007', merchantName: 'Style Boutique', amount: 15200, status: 'completed', type: 'settlement', date: '2024-01-12', paymentMethod: 'Card' },
  { id: 'TXN008', merchantName: 'Home Decor', amount: 32000, status: 'pending', type: 'payment', date: '2024-01-12', paymentMethod: 'NetBanking' },
];

export const dashboardStats = {
  totalVolume: 285000,
  successRate: 94.2,
  avgSettlementTime: '24 hrs',
  activeDisputes: 3,
  pendingSettlements: 12,
  monthlyGrowth: 18.5,
};

// Marketplace Seller Mock Data
export const orders: Order[] = [
  { id: 'ORD001', customerName: 'Rahul S.', items: [{ name: 'Cotton Kurta', quantity: 2, price: 899 }], status: 'delivered', total: 1798, date: '2024-01-15' },
  { id: 'ORD002', customerName: 'Priya M.', items: [{ name: 'Silk Saree', quantity: 1, price: 2499 }], status: 'shipped', total: 2499, date: '2024-01-15' },
  { id: 'ORD003', customerName: 'Amit K.', items: [{ name: 'Linen Shirt', quantity: 3, price: 649 }], status: 'processing', total: 1947, date: '2024-01-14' },
  { id: 'ORD004', customerName: 'Sneha R.', items: [{ name: 'Designer Blouse', quantity: 1, price: 1299 }], status: 'returned', total: 1299, date: '2024-01-13' },
  { id: 'ORD005', customerName: 'Vikram P.', items: [{ name: 'Formal Pants', quantity: 2, price: 1199 }], status: 'placed', total: 2398, date: '2024-01-15' },
];

export const inventory: InventoryItem[] = [
  { id: 'INV001', name: 'Cotton Kurta - Blue', sku: 'CK-BL-M', stock: 45, lowStockThreshold: 10, category: 'Kurtas', price: 899 },
  { id: 'INV002', name: 'Silk Saree - Red', sku: 'SS-RD-F', stock: 8, lowStockThreshold: 15, category: 'Sarees', price: 2499 },
  { id: 'INV003', name: 'Linen Shirt - White', sku: 'LS-WH-L', stock: 62, lowStockThreshold: 20, category: 'Shirts', price: 649 },
  { id: 'INV004', name: 'Designer Blouse', sku: 'DB-MX-S', stock: 3, lowStockThreshold: 10, category: 'Blouses', price: 1299 },
  { id: 'INV005', name: 'Formal Pants - Black', sku: 'FP-BK-32', stock: 28, lowStockThreshold: 15, category: 'Pants', price: 1199 },
];

export const sellerStats = {
  totalOrders: 1247,
  revenue: 458900,
  returnRate: 4.2,
  avgRating: 4.6,
  pendingOrders: 23,
  lowStockItems: 2,
};

// Delivery Partner Mock Data
export const earnings: DeliveryEarning[] = [
  { id: 'ERN001', date: '2024-01-15', orders: 18, baseEarnings: 720, incentives: 150, tips: 85, total: 955 },
  { id: 'ERN002', date: '2024-01-14', orders: 22, baseEarnings: 880, incentives: 200, tips: 120, total: 1200 },
  { id: 'ERN003', date: '2024-01-13', orders: 15, baseEarnings: 600, incentives: 100, tips: 45, total: 745 },
  { id: 'ERN004', date: '2024-01-12', orders: 20, baseEarnings: 800, incentives: 180, tips: 90, total: 1070 },
  { id: 'ERN005', date: '2024-01-11', orders: 12, baseEarnings: 480, incentives: 50, tips: 30, total: 560 },
  { id: 'ERN006', date: '2024-01-10', orders: 25, baseEarnings: 1000, incentives: 250, tips: 150, total: 1400 },
  { id: 'ERN007', date: '2024-01-09', orders: 16, baseEarnings: 640, incentives: 120, tips: 70, total: 830 },
];

export const shifts: Shift[] = [
  { id: 'SH001', date: '2024-01-16', startTime: '09:00', endTime: '13:00', zone: 'Koramangala', status: 'available', estimatedOrders: 12 },
  { id: 'SH002', date: '2024-01-16', startTime: '13:00', endTime: '17:00', zone: 'Indiranagar', status: 'booked', estimatedOrders: 15 },
  { id: 'SH003', date: '2024-01-16', startTime: '18:00', endTime: '22:00', zone: 'HSR Layout', status: 'available', estimatedOrders: 20 },
  { id: 'SH004', date: '2024-01-17', startTime: '09:00', endTime: '13:00', zone: 'Whitefield', status: 'available', estimatedOrders: 10 },
  { id: 'SH005', date: '2024-01-17', startTime: '18:00', endTime: '22:00', zone: 'Koramangala', status: 'available', estimatedOrders: 18 },
];

export const deliveryStats = {
  weeklyEarnings: 6760,
  totalOrders: 128,
  avgRating: 4.8,
  activeHours: 42,
  incentiveProgress: 75,
  nextMilestone: 150,
};

// Skills for Resume
export const skills = {
  ux: ['User Research', 'Usability Testing', 'Information Architecture', 'Wireframing', 'Prototyping', 'Journey Mapping'],
  ui: ['Visual Design', 'Design Systems', 'Typography', 'Color Theory', 'Responsive Design', 'Interaction Design'],
  tools: ['Figma', 'Adobe XD', 'Sketch', 'Miro', 'Notion', 'Jira', 'Maze'],
  research: ['User Interviews', 'Surveys', 'A/B Testing', 'Heuristic Evaluation', 'Competitive Analysis', 'Data Analysis'],
};

// Case Study Data - Enhanced for stronger storytelling
export const caseStudies = [
  {
    id: 'chai-sutta-bar',
    title: 'Chai Sutta Bar',
    subtitle: 'Digital Loyalty & Experience Redesign',
    description: 'Redesigned the customer loyalty experience for India\'s beloved chai brand—turning casual chai drinkers into repeat loyal users through gamification and emotional engagement.',
    industry: 'Consumer Brand',
    role: 'Product Designer',
    duration: '4 weeks',
    team: 'Solo Project (AI-Assisted)',
    impact: ['Smart loyalty system', 'Gamified rewards', 'Founder analytics'],
    tools: ['Lovable AI', 'Figma', 'Miro', 'Notion'],
    color: 'from-amber-600 via-orange-600 to-red-700',
    context: 'Self-initiated product case study to showcase product thinking, UX strategy, and AI-assisted building process.',
    challenge: 'How might we create a digital loyalty layer that builds emotional connection without disrupting in-store behavior?',
  },
  {
    id: 'fintech-dashboard',
    title: 'AgencyFlow',
    subtitle: 'Fintech Merchant Operations Dashboard',
    description: 'Redesigned how 10,000+ merchants track payments, settlements, and disputes—reducing support tickets by 25% and improving settlement tracking speed by 40%.',
    industry: 'Fintech',
    role: 'Product Designer',
    duration: '8 weeks',
    team: '1 PM, 2 Engineers, 1 Designer',
    impact: ['40% faster settlement tracking', '25% fewer support tickets', '94% merchant satisfaction'],
    tools: ['Figma', 'Maze', 'Notion', 'Miro'],
    color: 'from-blue-600 via-indigo-600 to-violet-700',
    context: 'Payment operations were fragmented across multiple systems, causing merchant confusion and high support load.',
    challenge: 'How might we create a unified dashboard that gives merchants complete visibility into their payment lifecycle?',
  },
  {
    id: 'marketplace-seller',
    title: 'BinWah',
    subtitle: 'E-commerce Seller Management Platform',
    description: 'Built an intuitive seller operations platform serving 5,000+ SMB sellers—enabling 60% faster order processing and reducing inventory stockouts by 30%.',
    industry: 'E-commerce',
    role: 'Product Designer',
    duration: '10 weeks',
    team: '1 PM, 3 Engineers, 1 Designer',
    impact: ['60% faster order processing', '30% fewer stockouts', '4.6★ seller rating'],
    tools: ['Figma', 'Miro', 'Hotjar', 'Notion'],
    color: 'from-emerald-500 via-teal-500 to-cyan-600',
    context: 'Low-tech sellers were struggling with complex workflows, leading to platform abandonment and lost revenue.',
    challenge: 'How might we design a seller tool that works for users with varying levels of technical literacy?',
  },
  {
    id: 'delivery-partner',
    title: 'QuickDrop Partner',
    subtitle: 'Hyperlocal Delivery Earnings App',
    description: 'Designed a mobile-first app for 50,000+ delivery partners—achieving 50% clearer earnings visibility and 35% increase in shift bookings.',
    industry: 'Hyperlocal',
    role: 'Product Designer',
    duration: '6 weeks',
    team: '1 PM, 2 Engineers, 1 Designer',
    impact: ['50% clearer earnings', '35% more shift bookings', '4.8★ partner rating'],
    tools: ['Figma', 'Principle', 'Lookback', 'Miro'],
    color: 'from-orange-500 via-red-500 to-rose-600',
    context: 'Delivery partners lacked clarity on earnings calculations, leading to distrust and high churn rates.',
    challenge: 'How might we build transparency and trust through clear, actionable earnings insights?',
  },
];
