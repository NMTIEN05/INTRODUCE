import React, { useState } from 'react';
import { Calendar, User, ArrowLeft, Github, ExternalLink, Sparkles, Code, Database, Palette, Server, Monitor, Copy } from 'lucide-react';

export default function ProjectDetail() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStack = [
    { name: 'React', color: 'from-blue-400 to-cyan-400', icon: '⚛️', description: 'Frontend Framework' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-400', icon: '🚀', description: 'Backend Runtime' },
    { name: 'MongoDB', color: 'from-green-500 to-teal-500', icon: '🍃', description: 'NoSQL Database' },
    { name: 'Express.js', color: 'from-gray-600 to-gray-800', icon: '⚡', description: 'Web Framework' },
    { name: 'Ant Design', color: 'from-blue-500 to-indigo-500', icon: '🎨', description: 'UI Library' }
  ];

  const features = [
    { icon: '🛒', title: 'Quản lý sản phẩm', desc: 'CRUD operations với filter & search' },
    { icon: '💳', title: 'Thanh toán online', desc: 'Tích hợp VNPay' },
    { icon: '👥', title: 'Quản lý người dùng', desc: 'Authentication & Authorization' },
    { icon: '📊', title: 'Admin Dashboard', desc: 'Analytics & Management Panel' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto p-8 space-y-12">
        {/* Header Section */}
      <div className="text-center space-y-6">
  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full shadow-lg backdrop-blur-sm border border-green-200/50">
    <Sparkles className="w-5 h-5 text-emerald-600" />
    <span className="text-emerald-700 font-semibold">Dự án hoàn thành</span>
    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
  </div>

<h1
  className="text-5xl md:text-6xl font-extrabold leading-tight 
             text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
             [paint-order:stroke_fill] [stroke-width:2px] [stroke:#fff] drop-shadow-lg"
>
  Website Bán Điện Thoại
</h1>
    <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Công nghệ sử dụng
            </h2>
            <p className="text-gray-600">Stack công nghệ hiện đại cho hiệu suất tối ưu</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, idx:any) => (
              <div 
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredTech(idx)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className={`
                  relative px-8 py-4 rounded-2xl cursor-pointer transition-all duration-300
                  bg-gradient-to-r ${tech.color} text-white font-semibold text-lg
                  hover:shadow-2xl hover:scale-110 transform
                  ${hoveredTech === idx ? 'scale-110 shadow-2xl' : 'shadow-lg'}
                `}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                  
                  {/* Tooltip */}
                  {hoveredTech === idx && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap animate-in fade-in duration-200">
                      {tech.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                    </div>
                  )}
                </div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Info Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Role & Timeline */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="p-3 bg-purple-100 rounded-full">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Vai trò</h4>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Thời gian</h4>
                  <p className="text-gray-600">05/2025 - 08/2025</p>
                </div>
              </div>
            </div>

            {/* Repository Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Github className="w-5 h-5" />
                Source Code
              </h3>
              
              {[
                { name: 'Frontend (React)', url: 'https://github.com/NMTIEN05/FE-DATN', color: 'from-blue-500 to-cyan-500', icon: Monitor },
                { name: 'Backend (Node.js)', url: 'https://github.com/NMTIEN05/BE-DATN', color: 'from-green-500 to-emerald-500', icon: Server },
                { name: 'Admin Dashboard', url: 'https://github.com/NMTIEN05/DATN-ADMIN', color: 'from-purple-500 to-pink-500', icon: Database }
              ].map((repo, idx) => (
                <a 
                  key={idx}
                  href={repo.url}
                  className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-gray-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${repo.color}`}>
                      <repo.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-800">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
<div className="mt-6 border rounded-xl p-4 bg-white shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        🚀 Cách chạy dự án
      </h3>

      {/* npm i */}
      <div className="relative bg-gray-900 text-white rounded-lg p-3 mb-3">
        <code className="text-sm">npm i</code>
        <button
          onClick={() => handleCopy("npm i")}
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
        >
          <Copy size={18} />
        </button>
        {copied && (
          <span className="absolute -top-6 right-2 text-xs text-green-400">
            Đã sao chép!
          </span>
        )}
      </div>

      {/* npm run dev */}
      <div className="relative bg-gray-900 text-white rounded-lg p-3">
        <code className="text-sm">npm run dev</code>
        <button
          onClick={() => handleCopy("npm run dev")}
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
        >
          <Copy size={18} />
        </button>
        {copied && (
          <span className="absolute -top-6 right-2 text-xs text-green-400">
            Đã sao chép!
          </span>
        )}
      </div>
    </div>










<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto my-10 rounded-full"></div>

<h2
  className="text-3xl md:text-4xl font-bold text-gray-800 text-center mt-12 mb-6
             relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r 
             after:from-blue-500 after:to-purple-500 after:mx-auto after:mt-2"
>
  Những thứ mình đã đóng góp
</h2>
<ul className="text-lg text-gray-700 max-w-3xl mx-auto space-y-3 text-left mt-8">
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
    <span>Thiết kế toàn bộ giao diện chính (React, Ant Design, TailwindCSS)</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500"></span>
    <span>Xây dựng Dashboard quản trị: sản phẩm, đơn hàng, người dùng, phân quyền</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></span>
    <span>Quản lý sản phẩm, biến thể (màu sắc, dung lượng) và danh mục</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
    <span>Upload ảnh Cloudinary, component ImageUpload tái sử dụng nhiều nơi</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></span>
    <span>Giỏ hàng (Cart, CartItem) với kiểm tra tồn kho, cảnh báo hết hàng</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600"></span>
    <span>Checkout + thanh toán (Stripe, VNPay)</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-red-500 to-pink-600"></span>
    <span>Order & OrderItem: tạo đơn, cập nhật trạng thái, phân trang, lọc, sắp xếp</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600"></span>
    <span>Flash Sale: countdown, giảm giá tự động, hiển thị nổi bật</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
    <span>Xác thực & phân quyền (Admin / Staff / Client), route bảo vệ, login/logout</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></span>
    <span>Trang chi tiết sản phẩm, giỏ hàng, flash sale & thanh toán thân thiện UX</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-teal-500 to-green-500"></span>
    <span>API backend Node.js + Express: Product, Variant, Attribute, Cart, Order</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-gray-500 to-gray-700"></span>
    <span>Cơ sở dữ liệu MongoDB: schema chuẩn, quan hệ Product - Variant - Attribute</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-600"></span>
    <span>API chuẩn RESTful với phân trang, lọc, sắp xếp, trả về success/error rõ ràng</span>
  </li>
</ul>

</div>


        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group relative p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
              
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
    
  

        {/* Back Button */}
        <div className="text-center pt-8">
            <a href="/">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Quay lại danh sách dự án</span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}