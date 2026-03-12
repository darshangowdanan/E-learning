import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, Award, Settings, PlayCircle, 
  Clock, Trophy, ChevronRight, LogOut, Bell, Search, Menu, X 
} from 'lucide-react';

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock User & Course Data
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150',
    stats: {
      coursesEnrolled: 4,
      coursesCompleted: 1,
      learningHours: 32,
      certificates: 1
    }
  };

  const inProgressCourses = [
    {
      id: 1,
      title: 'The Complete 2024 Web Development Bootcamp',
      instructor: 'Sarah Jenkins',
      progress: 45,
      totalLessons: 142,
      completedLessons: 64,
      lastWatched: 'Section 4: CSS Flexbox',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      id: 2,
      title: 'Advanced UI/UX Design Masterclass',
      instructor: 'Marcus Chen',
      progress: 12,
      totalLessons: 85,
      completedLessons: 10,
      lastWatched: 'Color Theory Basics',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=400'
    }
  ];

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'my-courses', label: 'My Courses', icon: BookOpen },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex text-slate-900">
      
      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden lg:flex w-64 bg-slate-900 text-slate-300 flex-col fixed h-full z-20">
        <div className="h-16 flex items-center gap-2 px-6 bg-slate-950 border-b border-slate-800">
          <div className="bg-indigo-500 p-1.5 rounded-lg shadow-sm">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-white tracking-tight">LearnIQ</span>
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
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-colors">
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* --- MOBILE SIDEBAR (Drawer) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <aside className="relative w-64 bg-slate-900 text-slate-300 h-full flex flex-col shadow-2xl">
            <div className="h-16 flex items-center justify-between px-6 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="bg-indigo-500 p-1.5 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">LearnIQ</span>
              </div>
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
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold hidden sm:block capitalize">
              {activeTab.replace('-', ' ')}
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search your courses..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all w-64"
              />
            </div>
            
            <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-rose-500 rounded-full border border-white"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer group">
              <img src={userData.avatar} alt="Profile" className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-indigo-200 transition-all" />
              <div className="hidden md:block text-sm">
                <p className="font-bold text-slate-900 leading-none">{userData.name}</p>
                <p className="text-slate-500 text-xs mt-1">Student</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-8 flex-1 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="max-w-6xl mx-auto space-y-8">
              
              {/* Welcome Section */}
              <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-indigo-200">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10 text-center sm:text-left">
                  <h2 className="text-3xl font-bold mb-2">Welcome back, {userData.name.split(' ')[0]}! 👋</h2>
                  <p className="text-indigo-100 text-lg">You've learned for {userData.stats.learningHours} hours this week. Keep it up!</p>
                </div>
                <button className="relative z-10 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors whitespace-nowrap shadow-sm">
                  Resume Learning
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Enrolled</p>
                    <p className="text-2xl font-bold text-slate-900">{userData.stats.coursesEnrolled}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Completed</p>
                    <p className="text-2xl font-bold text-slate-900">{userData.stats.coursesCompleted}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Hours Spent</p>
                    <p className="text-2xl font-bold text-slate-900">{userData.stats.learningHours}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Certificates</p>
                    <p className="text-2xl font-bold text-slate-900">{userData.stats.certificates}</p>
                  </div>
                </div>
              </div>

              {/* In Progress Courses */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">In Progress</h3>
                  <button className="text-indigo-600 font-medium hover:text-indigo-700 text-sm">View All</button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {inProgressCourses.map(course => (
                    <div key={course.id} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5 hover:shadow-md transition-shadow group">
                      {/* Thumbnail */}
                      <div className="relative w-full sm:w-40 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="h-10 w-10 text-white fill-white/80" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-slate-900 line-clamp-2 leading-tight mb-1 group-hover:text-indigo-600 transition-colors">
                            {course.title}
                          </h4>
                          <p className="text-xs text-slate-500 mb-3">Up next: {course.lastWatched}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="font-medium text-slate-700">{course.progress}% Complete</span>
                            <span className="text-slate-500">{course.completedLessons}/{course.totalLessons} Lessons</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${course.progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended / New Features area placeholder */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                 <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2"><Award className="h-6 w-6 text-amber-400" /> Earn Your First Certificate</h3>
                    <p className="text-slate-300">You are 85% through the Web Development Bootcamp. Finish strong and earn your certificate this week!</p>
                 </div>
                 <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors whitespace-nowrap">
                   Continue Course
                 </button>
              </div>

            </div>
          )}

          {/* Placeholders for other tabs */}
          {activeTab !== 'dashboard' && (
             <div className="flex flex-col items-center justify-center h-full text-center py-20">
               <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-400">
                 {activeTab === 'my-courses' && <BookOpen className="h-10 w-10" />}
                 {activeTab === 'certificates' && <Award className="h-10 w-10" />}
                 {activeTab === 'settings' && <Settings className="h-10 w-10" />}
               </div>
               <h2 className="text-2xl font-bold text-slate-900 capitalize mb-2">{activeTab.replace('-', ' ')}</h2>
               <p className="text-slate-500 max-w-md">This section is currently under construction. Once we connect the backend, your data will populate here.</p>
             </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Reusable dummy component needed for the layout logic
const CheckCircle = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
)