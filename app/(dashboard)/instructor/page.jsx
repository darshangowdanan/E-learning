import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, BarChart3, DollarSign, MessageSquare, 
  Settings, LogOut, Bell, Search, Menu, X, Plus, Users, Star, 
  TrendingUp, Edit3, MoreVertical, Eye
} from 'lucide-react';

export default function InstructorDashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock Instructor Data
  const instructorData = {
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
    stats: {
      totalRevenue: '$12,450.00',
      revenueGrowth: '+14.5%',
      totalStudents: '85,402',
      studentsGrowth: '+820 this month',
      averageRating: '4.8',
      ratingCount: '12.5k',
      activeCourses: 5
    }
  };

  const myCourses = [
    {
      id: 1,
      title: 'The Complete 2024 Web Development Bootcamp',
      price: '$89.99',
      students: 45200,
      rating: 4.9,
      revenue: '$8,400',
      status: 'Published',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=150&h=100'
    },
    {
      id: 2,
      title: 'Advanced React Native Mastery',
      price: '$99.99',
      students: 12400,
      rating: 4.7,
      revenue: '$3,150',
      status: 'Published',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=150&h=100'
    },
    {
      id: 3,
      title: 'Next.js 14 Full-Stack Architecture',
      price: '$79.99',
      students: 0,
      rating: 0,
      revenue: '$0',
      status: 'Draft',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=150&h=100'
    }
  ];

  const recentQuestions = [
    {
      id: 1,
      student: 'Michael T.',
      course: 'Web Development Bootcamp',
      question: 'I am getting an error when connecting to MongoDB in section 12. Can someone help?',
      time: '2 hours ago',
      isUnread: true
    },
    {
      id: 2,
      student: 'Emma W.',
      course: 'Advanced React Native',
      question: 'Does this course cover the new Expo router architecture?',
      time: '5 hours ago',
      isUnread: false
    }
  ];

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'Course Management', icon: BookOpen },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'qa', label: 'Q&A / Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex text-slate-900">
      
      {/* --- SIDEBAR --- */}
      <aside className="hidden lg:flex w-64 bg-slate-900 text-slate-300 flex-col fixed h-full z-20">
        <div className="h-16 flex items-center gap-2 px-6 bg-slate-950 border-b border-slate-800">
          <div className="bg-indigo-500 p-1.5 rounded-lg shadow-sm">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-white tracking-tight">LearnIQ <span className="text-xs text-indigo-400 font-normal ml-1">Instructor</span></span>
        </div>

        <div className="flex-1 py-8 px-4 space-y-2">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === link.id 
                  ? 'bg-indigo-600 text-white font-medium shadow-md shadow-indigo-900/20' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <link.icon className={`h-5 w-5 ${activeTab === link.id ? 'text-white' : 'text-slate-400'}`} />
              {link.label}
              {link.id === 'qa' && <span className="ml-auto bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800 flex flex-col gap-2">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
            Switch to Student View
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-colors mt-2">
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* --- MOBILE SIDEBAR --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <aside className="relative w-64 bg-slate-900 text-slate-300 h-full flex flex-col shadow-2xl">
            <div className="h-16 flex items-center justify-between px-6 bg-slate-950 border-b border-slate-800">
              <span className="font-bold text-xl text-white">LearnIQ</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
              {sidebarLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setActiveTab(link.id); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === link.id ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'
                  }`}
                >
                  <link.icon className="h-5 w-5" /> {link.label}
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen overflow-x-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold hidden sm:block">Instructor Dashboard</h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button className="hidden md:flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition-colors">
              <Plus className="h-4 w-4" /> New Course
            </button>
            
            <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-rose-500 rounded-full border border-white"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer">
              <img src={instructorData.avatar} alt="Profile" className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-8 flex-1 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="max-w-6xl mx-auto space-y-8">
              
              {/* Header section with Create Course CTA for mobile */}
              <div className="flex md:hidden justify-between items-center">
                <h2 className="text-xl font-bold">Overview</h2>
                <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors">
                  <Plus className="h-4 w-4" /> Create
                </button>
              </div>

              {/* KPI Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Revenue Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                      <TrendingUp className="h-3 w-3" /> {instructorData.stats.revenueGrowth}
                    </span>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium mb-1">Total Revenue</h3>
                  <p className="text-3xl font-extrabold text-slate-900">{instructorData.stats.totalRevenue}</p>
                </div>

                {/* Students Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                      <Users className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                      {instructorData.stats.studentsGrowth}
                    </span>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium mb-1">Total Students</h3>
                  <p className="text-3xl font-extrabold text-slate-900">{instructorData.stats.totalStudents}</p>
                </div>

                {/* Rating Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-amber-50 text-amber-500 rounded-xl">
                      <Star className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                      {instructorData.stats.ratingCount} reviews
                    </span>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium mb-1">Instructor Rating</h3>
                  <p className="text-3xl font-extrabold text-slate-900">{instructorData.stats.averageRating}</p>
                </div>

                {/* Active Courses Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                      <BookOpen className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium mb-1">Active Courses</h3>
                  <p className="text-3xl font-extrabold text-slate-900">{instructorData.stats.activeCourses}</p>
                </div>
              </div>

              {/* Split Content: Courses Table & Q/A Sidebar */}
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Courses List (Takes up 2 cols on Desktop) */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">Your Courses</h3>
                    <button className="text-indigo-600 font-medium hover:text-indigo-700 text-sm">View All</button>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    {/* Desktop Table Header */}
                    <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      <div className="col-span-5">Course</div>
                      <div className="col-span-2 text-center">Status</div>
                      <div className="col-span-2 text-right">Students</div>
                      <div className="col-span-2 text-right">Revenue</div>
                      <div className="col-span-1 text-center">Action</div>
                    </div>

                    {/* Course Rows */}
                    <div className="divide-y divide-slate-100">
                      {myCourses.map(course => (
                        <div key={course.id} className="grid sm:grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 transition-colors">
                          
                          {/* Course Info */}
                          <div className="sm:col-span-5 flex items-center gap-4">
                            <img src={course.image} alt={course.title} className="w-20 h-14 object-cover rounded-lg border border-slate-200" />
                            <div>
                              <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{course.title}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs font-medium text-slate-500">{course.price}</span>
                                {course.rating > 0 && (
                                  <>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span className="flex items-center gap-1 text-xs text-amber-500 font-medium">
                                      <Star className="h-3 w-3 fill-current" /> {course.rating}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Mobile View Labels (Hidden on Desktop) */}
                          <div className="sm:hidden grid grid-cols-2 gap-2 mt-2 text-sm border-t border-slate-100 pt-2">
                            <div className="text-slate-500">Status:</div>
                            <div className="font-medium text-right">{course.status}</div>
                            <div className="text-slate-500">Students:</div>
                            <div className="font-medium text-right">{course.students.toLocaleString()}</div>
                            <div className="text-slate-500">Revenue:</div>
                            <div className="font-medium text-emerald-600 text-right">{course.revenue}</div>
                          </div>

                          {/* Desktop Stats (Hidden on Mobile) */}
                          <div className="hidden sm:block col-span-2 text-center">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              course.status === 'Published' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800'
                            }`}>
                              {course.status}
                            </span>
                          </div>
                          <div className="hidden sm:block col-span-2 text-right text-sm font-medium text-slate-700">
                            {course.students.toLocaleString()}
                          </div>
                          <div className="hidden sm:block col-span-2 text-right text-sm font-bold text-slate-900">
                            {course.revenue}
                          </div>

                          {/* Actions */}
                          <div className="hidden sm:flex col-span-1 justify-center">
                            <button className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
                              <MoreVertical className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Q&A / Notifications */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">Recent Q&A</h3>
                    <button className="text-indigo-600 font-medium hover:text-indigo-700 text-sm">See All</button>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 space-y-4">
                    {recentQuestions.map(q => (
                      <div key={q.id} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                              {q.student.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 leading-none">{q.student}</p>
                              <p className="text-xs text-slate-500 mt-0.5">{q.time}</p>
                            </div>
                          </div>
                          {q.isUnread && <span className="w-2 h-2 bg-rose-500 rounded-full mt-1"></span>}
                        </div>
                        <p className="text-xs text-indigo-600 font-medium mb-1 line-clamp-1">{q.course}</p>
                        <p className="text-sm text-slate-700 line-clamp-2">{q.question}</p>
                        <div className="mt-3 flex gap-2">
                          <button className="text-xs font-medium px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-md hover:bg-indigo-100 transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Action Card */}
                  <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                    <h4 className="font-bold text-lg mb-2 relative z-10">Creator Resources</h4>
                    <p className="text-indigo-200 text-sm mb-4 relative z-10">Learn how to improve audio quality and increase course engagement.</p>
                    <button className="relative z-10 w-full py-2 bg-white text-indigo-900 text-sm font-bold rounded-lg hover:bg-slate-100 transition-colors">
                      View Guide
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {activeTab !== 'dashboard' && (
             <div className="flex flex-col items-center justify-center h-full text-center py-20">
               <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-400">
                 {activeTab === 'courses' && <Edit3 className="h-10 w-10" />}
                 {activeTab === 'analytics' && <BarChart3 className="h-10 w-10" />}
                 {activeTab === 'earnings' && <DollarSign className="h-10 w-10" />}
                 {activeTab === 'qa' && <MessageSquare className="h-10 w-10" />}
               </div>
               <h2 className="text-2xl font-bold text-slate-900 capitalize mb-2">{activeTab.replace('-', ' ')}</h2>
               <p className="text-slate-500 max-w-md">This section is currently under construction. Once we connect the backend, your management tools will appear here.</p>
             </div>
          )}
        </div>
      </main>
    </div>
  );
}