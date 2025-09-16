import { Button } from "antd";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dự án nổi bật</h2>
      <div className="space-y-6">
   {/* Project 1 */}
 

<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
  <div className="flex justify-between items-start mb-4">
    <h3 className="text-2xl font-bold text-gray-800">Website Bán Điện Thoại</h3>
    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
      Hoàn thành
    </span>
  </div>

  <p className="text-gray-600 mb-4">
    Xây dựng website bán hàng online hoàn chỉnh với tính năng thanh toán, 
    quản lý đơn hàng và hệ thống admin.
  </p>

  {/* Ngôn ngữ & Công nghệ */}
  <div className="flex flex-wrap gap-2 mb-3">
    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">MongoDB</span>
  </div>

  {/* Dòng chứa vị trí, thời gian và nút */}
  <div className="flex justify-between items-start">
    {/* Vị trí + Thời gian */}
    <div className="flex flex-col gap-1">
      <div className="flex items-center">
        <User className="w-5 h-5 text-purple-600 mr-2" />
        <span className="text-sm font-medium text-gray-700">Frontend Developer + Backend Developer</span>
      </div>
      <div className="flex items-center text-gray-500">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="text-sm">05/2025 - 08/2025</span>
      </div>
    </div>

    {/* Nút Xem chi tiết bên phải */}
    <Link to="/da1">
          <Button color="primary" variant="outlined">
        Xem chi tiết
      </Button>
    </Link>
  </div>
</div>


   {/* Project 2 */}
 

<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
  <div className="flex justify-between items-start mb-4">
    <h3 className="text-2xl font-bold text-gray-800">Website Bán Sách</h3>
    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
      Hoàn thành
    </span>
  </div>

  <p className="text-gray-600 mb-4">
    Xây dựng website bán sách online hoàn chỉnh với tính năng thanh toán, 
    quản lý đơn hàng và hệ thống admin.
  </p>

  {/* Ngôn ngữ & Công nghệ */}
  <div className="flex flex-wrap gap-2 mb-3">
    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">MongoDB</span>
  </div>

  {/* Dòng chứa vị trí, thời gian và nút */}
  <div className="flex justify-between items-start">
    {/* Vị trí + Thời gian */}
    <div className="flex flex-col gap-1">
      <div className="flex items-center">
        <User className="w-5 h-5 text-purple-600 mr-2" />
        <span className="text-sm font-medium text-gray-700">Frontend Developer </span>
      </div>
      <div className="flex items-center text-gray-500">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="text-sm">04/2025 - 07/2025</span>
      </div>
    </div>

    {/* Nút Xem chi tiết bên phải */}
    <Link to="/da2">
          <Button color="primary" variant="outlined">
        Xem chi tiết
      </Button>
    </Link>
  </div>
</div>






      
      </div>
    </div>
  );
}
