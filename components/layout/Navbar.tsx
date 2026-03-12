'use client';
import React, { useState } from 'react';
import { BookOpen, Menu, X, Search, ChevronDown } from 'lucide-react';

// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">LearnIQ</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                Courses <ChevronDown className="h-4 w-4" />
              </button>
              {/* Dropdown placeholder (hidden by default) */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2 flex flex-col gap-1">
                  <a href="#" className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg">Web Development</a>
                  <a href="#" className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg">Data Science</a>
                  <a href="#" className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg">Design</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Pricing</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">About Us</a>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search for courses..." 
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
              />
            </div>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-600 hover:text-indigo-600 font-medium transition-colors px-3 py-2">
              Log in
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm shadow-indigo-200">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-500 hover:text-slate-700 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white absolute w-full shadow-lg pb-4">
          <div className="px-4 pt-4 pb-2 space-y-1">
            <div className="mb-4 relative">
              <Search className="h-4 w-4 text-slate-400 absolute left-3 top-3" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Courses</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Pricing</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">About Us</a>
          </div>
          <div className="pt-4 pb-2 border-t border-slate-100 px-4 flex flex-col gap-3">
            <button className="w-full text-center px-4 py-2.5 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50">
              Log in
            </button>
            <button className="w-full text-center px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export { Navbar };