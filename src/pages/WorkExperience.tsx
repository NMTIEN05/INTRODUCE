import { Building2, Calendar } from "lucide-react";
import React from "react";

const WorkExperience: React.FC = () => {
  return (
  <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
          Kinh nghiệm làm việc
        </h2>
        
      </div>
      
      <div className="space-y-6">
        {/* Work Experience Card */}
        <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative border border-gray-100 hover:border-purple-200 hover:-translate-y-1">
          {/* Enhanced Gradient Left Bar */}
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-purple-500 via-violet-500 to-indigo-500 rounded-l-2xl shadow-lg"></div>
          
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden rounded-tr-2xl">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-violet-600 transform rotate-12 scale-150"></div>
          </div>

          <div className="ml-6 flex flex-col gap-6 relative z-10">
            {/* Header: Job Title + Company + Date */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Building2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                    TTS Frontend Developer
                  </h3>
                </div>
                <p className="text-lg text-purple-600 font-semibold leading-relaxed">
                  CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ GIÁO DỤC CODEFARM
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                  <Calendar className="w-4 h-4" />
                  05/2025 - 08/2025
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-purple-300">
              <p className="text-gray-700 leading-relaxed">
                Phát triển và duy trì các ứng dụng web quy mô lớn. Dẫn dắt team 4 developers, 
                thiết kế kiến trúc hệ thống và tối ưu performance.
              </p>
            </div>

            {/* Skills / Tech Tags */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Công nghệ sử dụng</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium border border-blue-300 hover:scale-105 transition-transform cursor-default">
                  React
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-medium border border-green-300 hover:scale-105 transition-transform cursor-default">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 rounded-full text-sm font-medium border border-indigo-300 hover:scale-105 transition-transform cursor-default">
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-violet-400/10"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WorkExperience;
