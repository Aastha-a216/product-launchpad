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

// Case Study Data
export const caseStudies = [
  {
    id: 'fintech-dashboard',
    title: 'Fintech Merchant Dashboard',
    subtitle: 'Payment Operations & Settlement Management',
    description: 'Designed a comprehensive merchant operations dashboard for payment tracking, settlements, refunds, and dispute management.',
    industry: 'Fintech',
    role: 'Product Designer',
    duration: '8 weeks',
    impact: ['40% faster settlement tracking', '25% reduction in support tickets', 'Improved merchant satisfaction'],
    tools: ['Figma', 'Maze', 'Notion'],
    color: 'from-blue-600 to-indigo-700',
    figmaLink: 'https://figma.com',
  },
  {
    id: 'marketplace-seller',
    title: 'Marketplace Seller Tool',
    subtitle: 'Order & Inventory Management for SMBs',
    description: 'Built an intuitive seller operations platform for order management, returns handling, and inventory tracking.',
    industry: 'E-commerce',
    role: 'Product Designer',
    duration: '10 weeks',
    impact: ['60% faster order processing', '30% fewer inventory stockouts', 'Higher seller retention'],
    tools: ['Figma', 'Miro', 'Hotjar'],
    color: 'from-emerald-600 to-teal-700',
    figmaLink: 'https://figma.com',
  },
  {
    id: 'delivery-partner',
    title: 'Delivery Partner App',
    subtitle: 'Earnings & Shift Management System',
    description: 'Designed a mobile-first earnings and shift management app for hyperlocal delivery partners.',
    industry: 'Hyperlocal',
    role: 'Product Designer',
    duration: '6 weeks',
    impact: ['50% clearer earnings visibility', '35% increase in shift bookings', 'Improved partner trust'],
    tools: ['Figma', 'Principle', 'Lookback'],
    color: 'from-orange-500 to-red-600',
    figmaLink: 'https://figma.com',
  },
];
