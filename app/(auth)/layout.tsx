import React from 'react';
import { BookOpen } from 'lucide-react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex font-sans bg-slate-50">
      {/* Left Pane - Shared Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white to-transparent opacity-20"></div>
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <BookOpen className="h-6 w-6 text-indigo-600" />
          </div>
          <span className="font-bold text-2xl tracking-tight">LearnIQ</span>
        </div>

        <div className="relative z-10 max-w-lg mt-12">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Start your learning journey today.</h1>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Join thousands of students from around the world to learn new skills, advance your career, and explore your passions with expert-led courses.
          </p>
        </div>

        <div className="relative z-10 text-indigo-200 text-sm mt-12">
          © {new Date().getFullYear()} LearnIQ Inc. All rights reserved.
        </div>
      </div>

      {/* Right Pane - Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-2xl text-slate-900 tracking-tight">LearnIQ</span>
          </div>

          {/* This renders the Login OR Signup page */}
          {children}
        </div>
      </div>
    </div>
  );
}