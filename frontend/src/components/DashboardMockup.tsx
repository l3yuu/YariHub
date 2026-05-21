import {
  LayoutDashboard,
  ShoppingCart,
  BarChart3,
  Package,
  Boxes,
  Tag,
  Search,
  ChevronDown,
  MoreHorizontal,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: false },
  { label: 'Order', icon: ShoppingCart, active: true },
  { label: 'Statistic', icon: BarChart3, active: false },
  { label: 'Product', icon: Package, active: false },
  { label: 'Stock', icon: Boxes, active: false },
  { label: 'Offer', icon: Tag, active: false },
];

const orders = [
  { id: '#26458', name: 'John Smith', address: '123 Main St', date: '12/05/2024', price: '$125.00', status: 'Pending' },
  { id: '#26457', name: 'Sarah Lee', address: '456 Oak Ave', date: '12/05/2024', price: '$89.50', status: 'Shipped', highlight: true },
  { id: '#26456', name: 'Mike Brown', address: '789 Pine Rd', date: '11/05/2024', price: '$210.00', status: 'Delivered' },
  { id: '#26459', name: 'Emma Wilson', address: '321 Elm St', date: '11/05/2024', price: '$45.99', status: 'Pending' },
];

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-blue-500/10 overflow-hidden">
        <div className="flex min-h-[380px] sm:min-h-[420px]">
          {/* Sidebar */}
          <aside className="hidden sm:flex w-44 shrink-0 flex-col bg-[#1e3a8a] text-white py-5 px-3">
            <div className="flex items-center gap-2 px-2 mb-6">
              <div className="w-7 h-7 rounded-lg bg-blue-400/30 flex items-center justify-center text-xs font-bold">
                e
              </div>
              <span className="text-sm font-semibold">eProduct</span>
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    item.active
                      ? 'bg-blue-500/40 text-white'
                      : 'text-blue-100/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main panel */}
          <div className="flex-1 min-w-0 p-4 sm:p-6 bg-slate-50/50">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Order</h3>
                <p className="text-xs text-slate-500">26 orders found</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-400">
                  <Search className="w-3.5 h-3.5" />
                  <span>Search orders...</span>
                </div>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto">
              {['All', 'Pending', 'Shipped', 'Delivered'].map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
                    i === 0
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px] sm:text-xs min-w-[520px]">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-500">
                      <th className="px-3 py-2.5 font-medium">ID</th>
                      <th className="px-3 py-2.5 font-medium">Name</th>
                      <th className="px-3 py-2.5 font-medium hidden md:table-cell">Address</th>
                      <th className="px-3 py-2.5 font-medium">Date</th>
                      <th className="px-3 py-2.5 font-medium">Price</th>
                      <th className="px-3 py-2.5 font-medium">Status</th>
                      <th className="px-3 py-2.5 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id + order.name}
                        className={`border-b border-slate-50 last:border-0 ${
                          order.highlight ? 'bg-[#2563EB] text-white' : 'text-slate-700'
                        }`}
                      >
                        <td className="px-3 py-2.5 font-medium">{order.id}</td>
                        <td className="px-3 py-2.5">{order.name}</td>
                        <td className={`px-3 py-2.5 hidden md:table-cell ${order.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                          {order.address}
                        </td>
                        <td className={`px-3 py-2.5 ${order.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                          {order.date}
                        </td>
                        <td className="px-3 py-2.5 font-semibold">{order.price}</td>
                        <td className="px-3 py-2.5">
                          <span
                            className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                              order.highlight
                                ? 'bg-white/20 text-white'
                                : order.status === 'Shipped'
                                  ? 'bg-blue-50 text-blue-600'
                                  : order.status === 'Delivered'
                                    ? 'bg-emerald-50 text-emerald-600'
                                    : 'bg-amber-50 text-amber-600'
                            }`}
                          >
                            {order.status}
                            <ChevronDown className="w-2.5 h-2.5" />
                          </span>
                        </td>
                        <td className="px-3 py-2.5">
                          <button
                            type="button"
                            className={`p-1 rounded ${order.highlight ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
                            aria-label="Actions"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into blue */}
      <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-blue-100/60 to-blue-200/80 pointer-events-none rounded-b-2xl" />
    </div>
  );
};

export default DashboardMockup;
