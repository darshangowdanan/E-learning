import React, { useState } from 'react';
import { Search, Filter, Star, Clock, BookOpen, ChevronDown, ChevronLeft, ChevronRight, X, LayoutGrid, List } from 'lucide-react';

export default function CourseListingPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Extended Mock Data
  const courses = [
    { id: 1, title: 'Complete Web Development Bootcamp', instructor: 'Sarah Jenkins', rating: 4.9, reviews: '12.5k', duration: '45h 30m', lessons: 142, price: '$89.99', category: 'Web Development', level: 'Beginner', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400' },
    { id: 2, title: 'Advanced UI/UX Design Masterclass', instructor: 'Marcus Chen', rating: 4.8, reviews: '8.2k', duration: '32h 15m', lessons: 85, price: '$79.99', category: 'Design', level: 'Advanced', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=400' },
    { id: 3, title: 'Data Science & Machine Learning with Python', instructor: 'Dr. Emily Ross', rating: 4.9, reviews: '15.1k', duration: '55h 00m', lessons: 210, price: '$99.99', category: 'Data Science', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400' },
    { id: 4, title: 'Mobile App Development with React Native', instructor: 'David Kim', rating: 4.7, reviews: '4.5k', duration: '28h 40m', lessons: 95, price: '$69.99', category: 'Mobile Dev', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600&h=400' },
    { id: 5, title: 'Digital Marketing Fundamentals', instructor: 'Jessica Alba', rating: 4.6, reviews: '9.8k', duration: '18h 20m', lessons: 64, price: '$49.99', category: 'Marketing', level: 'Beginner', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600&h=400' },
    { id: 6, title: 'Python for Finance: Investment Fundamentals', instructor: 'Robert Frost', rating: 4.8, reviews: '3.2k', duration: '22h 10m', lessons: 78, price: '$84.99', category: 'Finance', level: 'Advanced', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600&h=400' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Browse Courses</h1>
              <p className="text-lg text-slate-600 max-w-2xl">Discover thousands of online courses from top experts. Learn new skills to advance your career.</p>
            </div>
            {/* Main Search Bar */}
            <div className="w-full md:w-96 relative">
              <input 
                type="text" 
                placeholder="What do you want to learn?" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all shadow-sm"
              />
              <Search className="absolute left-4 top-4 h-6 w-6 text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- SIDEBAR FILTERS (Desktop) --- */}
          <div className="hidden lg:block w-1/4 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              
              {/* Filter Category: Topic */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                  Categories <ChevronDown className="h-4 w-4 text-slate-500" />
                </h3>
                <div className="space-y-3">
                  {['Web Development', 'Data Science', 'Mobile Dev', 'Design', 'Marketing', 'Finance'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                      <span className="text-slate-600 group-hover:text-slate-900">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Category: Level */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                  Level <ChevronDown className="h-4 w-4 text-slate-500" />
                </h3>
                <div className="space-y-3">
                  {['Beginner', 'Intermediate', 'Advanced', 'All Levels'].map((level) => (
                    <label key={level} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                      <span className="text-slate-600 group-hover:text-slate-900">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Category: Price */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                  Price <ChevronDown className="h-4 w-4 text-slate-500" />
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="h-5 w-5 border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                    <span className="text-slate-600 group-hover:text-slate-900">Paid</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="h-5 w-5 border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                    <span className="text-slate-600 group-hover:text-slate-900">Free</span>
                  </label>
                </div>
              </div>

            </div>
          </div>

          {/* --- MAIN CONTENT AREA --- */}
          <div className="w-full lg:w-3/4">
            
            {/* Toolbar (Mobile Filters, Sort, View Toggle) */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                >
                  <Filter className="h-4 w-4" /> Filters
                </button>
                <span className="text-slate-500 font-medium">{courses.length} results</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 hidden sm:inline">Sort by:</span>
                  <select className="border-none bg-slate-50 py-2 pl-3 pr-8 rounded-lg text-slate-700 font-medium focus:ring-2 focus:ring-indigo-600 cursor-pointer">
                    <option>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                  </select>
                </div>
                
                {/* View Toggles (Grid vs List) */}
                <div className="hidden sm:flex bg-slate-100 p-1 rounded-lg">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <LayoutGrid className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Course Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  className={`bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-pointer flex ${viewMode === 'grid' ? 'flex-col' : 'flex-col sm:flex-row'}`}
                >
                  {/* Card Image */}
                  <div className={`relative overflow-hidden bg-slate-200 ${viewMode === 'grid' ? 'h-48 w-full' : 'h-48 sm:h-auto sm:w-64 flex-shrink-0'}`}>
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                      {course.category}
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-bold text-sm text-slate-800">{course.rating}</span>
                      <span className="text-slate-400 text-sm">({course.reviews})</span>
                    </div>
                    
                    <h3 className={`font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1 ${viewMode === 'grid' ? 'text-lg line-clamp-2' : 'text-xl'}`}>
                      {course.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4">By {course.instructor}</p>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 mb-6 mt-auto">
                      <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</div>
                      <div className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {course.lessons} Lessons</div>
                      <div className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded text-xs font-medium text-slate-600">{course.level}</div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="font-extrabold text-2xl text-slate-900">{course.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-lg font-bold shadow-md shadow-indigo-200">1</button>
              <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-600 rounded-lg font-medium hover:bg-slate-50">2</button>
              <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-600 rounded-lg font-medium hover:bg-slate-50">3</button>
              <span className="text-slate-400 px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-600 rounded-lg font-medium hover:bg-slate-50">8</button>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* --- MOBILE FILTERS MODAL --- */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)}></div>
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Duplicate the filter categories here for mobile */}
              <div>
                <h3 className="font-bold mb-4">Categories</h3>
                <div className="space-y-3">
                  {['Web Development', 'Data Science', 'Mobile Dev', 'Design'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3">
                      <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-indigo-600" />
                      <span className="text-slate-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4">Level</h3>
                <div className="space-y-3">
                  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <label key={level} className="flex items-center gap-3">
                      <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-indigo-600" />
                      <span className="text-slate-600">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <button onClick={() => setIsMobileFiltersOpen(false)} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}