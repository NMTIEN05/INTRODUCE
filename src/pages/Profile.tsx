import React, { useState } from "react";
import {
  User,
  Briefcase,
  Phone,
  Award,
  ChevronRight,
  Sparkles,
  Mail,
  MapPin,
  Calendar,
  Building2,
  Code
} from "lucide-react";
import aaaa from "../image/tiendz.jpg"; // hoặc "../assets/logo.png"

import Projects from "./Projects";
import ThongTin from "./ThongTin";
import WorkExperience from "./WorkExperience";

const PersonalProfile = () => {
  const [activeMenu, setActiveMenu] = useState("thong-tin");

  const renderContent = () => {
    if (activeMenu === "thong-tin") {
  return <ThongTin />;
}

  if (activeMenu === "du-an") {
  return <Projects />;
}

    if (activeMenu === "lien-he") {
      return (
        <div>
          <h2 className="text-3xl font-bold mb-6">Liên hệ với tôi</h2>
          <div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Tôi luôn sẵn sàng kết nối và thảo luận về các cơ hội hợp tác mới. 
              Hãy liên hệ với tôi qua các kênh sau!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">tiennmph50685@email.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Điện thoại</h3>
                    <p className="text-gray-600">037 222 9304</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Địa chỉ</h3>
                    <p className="text-gray-600">Bắc Từ Liêm, TP.Hà Nội</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Link Github</h3>
                    <p className="text-gray-600"><a href="https://github.com/NMTIEN05">GITHUB/NMTIEN05</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

   if (activeMenu === "kinh-nghiem") {
    return <WorkExperience />;
  }

    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Chào mừng!</h2>
          <p className="text-gray-600">Chọn một mục từ menu bên trái để bắt đầu</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="flex h-screen">
        {/* Sidebar - Fixed width */}
        <div className="w-80 bg-white/70 backdrop-blur-xl shadow-2xl border-r border-white/20">
          {/* Profile Header */}
<div className="p-8  bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl shadow-xl">
  {/* Avatar */}
  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/40 mb-6 mx-auto shadow-lg">
    <img
      src={aaaa} // 👉 Thay link này = ảnh của bạn
      alt="Avatar"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Tên */}
 <h1 className="text-2xl font-bold mb-2 text-center truncate">
    Nguyễn Mạnh Tiến
  </h1>

  {/* Chức danh */}
  <p className="text-indigo-100 text-lg text-center font-medium">
    Front-End Developer
  </p>
</div>


          {/* Navigation Menu with UL LI A */}
          <nav className="p-6">
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMenu("thong-tin");
                  }}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 group ${
                    activeMenu === "thong-tin"
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-xl transform scale-105"
                      : "text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:scale-102"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-xl ${
                      activeMenu === "thong-tin"
                        ? "bg-white/20"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    } transition-all duration-300`}>
                      <User className={`w-5 h-5 ${
                        activeMenu === "thong-tin" ? "text-white" : "text-gray-600"
                      }`} />
                    </div>
                    <span className="font-semibold text-lg">Thông tin cá nhân</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    activeMenu === "thong-tin" ? "transform rotate-90 text-white" : "text-gray-400"
                  }`} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMenu("du-an");
                  }}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 group ${
                    activeMenu === "du-an"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl transform scale-105"
                      : "text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:scale-102"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-xl ${
                      activeMenu === "du-an"
                        ? "bg-white/20"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    } transition-all duration-300`}>
                      <Briefcase className={`w-5 h-5 ${
                        activeMenu === "du-an" ? "text-white" : "text-gray-600"
                      }`} />
                    </div>
                    <span className="font-semibold text-lg">Dự án</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    activeMenu === "du-an" ? "transform rotate-90 text-white" : "text-gray-400"
                  }`} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMenu("lien-he");
                  }}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 group ${
                    activeMenu === "lien-he"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl transform scale-105"
                      : "text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:scale-102"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-xl ${
                      activeMenu === "lien-he"
                        ? "bg-white/20"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    } transition-all duration-300`}>
                      <Phone className={`w-5 h-5 ${
                        activeMenu === "lien-he" ? "text-white" : "text-gray-600"
                      }`} />
                    </div>
                    <span className="font-semibold text-lg">Liên hệ</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    activeMenu === "lien-he" ? "transform rotate-90 text-white" : "text-gray-400"
                  }`} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMenu("kinh-nghiem");
                  }}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 group ${
                    activeMenu === "kinh-nghiem"
                      ? "bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-xl transform scale-105"
                      : "text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:scale-102"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-xl ${
                      activeMenu === "kinh-nghiem"
                        ? "bg-white/20"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    } transition-all duration-300`}>
                      <Award className={`w-5 h-5 ${
                        activeMenu === "kinh-nghiem" ? "text-white" : "text-gray-600"
                      }`} />
                    </div>
                    <span className="font-semibold text-lg">Kinh nghiệm</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    activeMenu === "kinh-nghiem" ? "transform rotate-90 text-white" : "text-gray-400"
                  }`} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content - Flexible width */}
        <div className="ml-10 flex-1 overflow-y-auto ">
          <div className="p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;