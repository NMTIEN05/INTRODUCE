import React from "react";
import { User, Award, Code, Languages } from "lucide-react";

const ThongTin: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Thông tin cá nhân</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Giới thiệu */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <User className="w-6 h-6 mr-3 text-pink-500" />
            Giới thiệu
          </h3>
          <p className="text-gray-700 mb-6">
            Tôi là <span className="font-medium">Nguyễn Mạnh Tiến</span>, một
            <span className="text-pink-500 font-semibold"> Front-End Developer</span>.
            Đam mê công nghệ và luôn học hỏi những điều mới.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-500">Tuổi</span>
              <p className="font-semibold text-gray-800">20</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-500">Địa chỉ</span>
              <p className="font-semibold text-gray-800">Bắc Từ Liêm - Hà Nội</p>
            </div>
          </div>
        </div>

        {/* Học vấn */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="w-6 h-6 mr-3 text-blue-500" />
            Học vấn
          </h3>
          <div>
            <h4 className="font-medium">Cao Đẳng FPT Polytechnic</h4>
            <p className="text-gray-600">Lập Trình Website • 2023 - 2025</p>
            <div className="mt-3 space-y-1 text-sm text-gray-700">
              
              <p>Điểm trung bình (thang 4): <span className="font-medium">3.22/4</span></p>
            </div>
          </div>
        </div>

        {/* Ngôn ngữ & Công nghệ */}
       <div className="bg-white rounded-xl p-6 shadow-lg">
  <h3 className="text-xl font-semibold mb-4 flex items-center">
    <Languages className="w-6 h-6 mr-2 text-purple-600" />
    Ngôn ngữ & Công nghệ
  </h3>

  <div className="space-y-4">
    {[
      { name: "JavaScript", color: "bg-yellow-500", level: "60%" },
      { name: "React", color: "bg-pink-500", level: "65%" },
      { name: "Node.js", color: "bg-blue-500", level: "60%" },
      { name: "TypeScript", color: "bg-green-500", level: "65%" },
      { name: "Angular", color: "bg-red-500", level: "35%" },
      { name: "HTML-CSS", color: "bg-indigo-500", level: "75%" },
      { name: "Tailwind-CSS", color: "bg-purple-500", level: "50%" },
    ].map((item, i) => (
      <div key={i}>
        <div className="flex justify-between mb-1">
          <span className="text-gray-700">{item.name}</span>
          <span className="text-sm text-gray-500">{item.level}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${item.color}`}
            style={{ width: item.level }}
          />
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Kỹ năng */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
  <h3 className="text-xl font-semibold mb-4 flex items-center">
    <Code className="w-6 h-6 mr-2 text-blue-500" />
    Kỹ năng
  </h3>
  <ul className="space-y-2 text-gray-700">
    {[
      "Phân tích và thiết kế hệ thống",
      "Làm việc nhóm hiệu quả, giao tiếp tốt",
      "Tư duy giải quyết vấn đề và tối ưu hiệu năng",
      "Hiểu và có thể làm việc theo Gitflow",
      "Khả năng tự học và nghiên cứu công nghệ mới",
    ].map((item, i) => (
      <li key={i} className="flex items-start">
        <span className="w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

      </div>
    </div>
  );
};

export default ThongTin;
