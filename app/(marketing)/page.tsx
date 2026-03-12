import React from 'react';
import { Play, Star, Users, Clock, BookOpen, Shield, Zap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  // Mock data for featured courses
  const featuredCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Jenkins',
      rating: 4.9,
      students: '12.5k',
      duration: '45h 30m',
      price: '₹89.99',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      id: 2,
      title: 'Advanced UI/UX Design Masterclass',
      instructor: 'Marcus Chen',
      rating: 4.8,
      students: '8.2k',
      duration: '32h 15m',
      price: '₹79.99',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      id: 3,
      title: 'Data Science & Machine Learning with Python',
      instructor: 'Dr. Emily Ross',
      rating: 4.9,
      students: '15.1k',
      duration: '55h 00m',
      price: '₹99.99',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400',
    }
  ];

  return (
    
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-indigo-50 blur-3xl opacity-50"></div>
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-blue-50 blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm mb-8 border border-indigo-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              New: AI-Powered Learning Paths
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
              Master the skills of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">tomorrow</span>, today.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join millions of learners worldwide. Access highly-rated courses taught by industry experts and advance your career.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                Start Learning Free <ArrowRight className="h-5 w-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2">
                <Play className="h-5 w-5 text-indigo-600" /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="border-y border-slate-100 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-2">15K+</div>
              <div className="text-slate-600 font-medium">Video Courses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-2">2M+</div>
              <div className="text-slate-600 font-medium">Active Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-2">500+</div>
              <div className="text-slate-600 font-medium">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-2">4.8/5</div>
              <div className="text-slate-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why learn with LearnIQ?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We provide the best learning experience with features designed to help you succeed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform">
              <div className="h-14 w-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Learn Anywhere</h3>
              <p className="text-slate-600 leading-relaxed">Switch seamlessly between your computer, tablet, or mobile device. Your progress is always synced.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform">
              <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
              <p className="text-slate-600 leading-relaxed">Learn from industry experts who are passionate about teaching and bring real-world experience.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-transform">
              <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lifetime Access</h3>
              <p className="text-slate-600 leading-relaxed">Pay once and get lifetime access to the course content, including all future updates and additions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED COURSES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-lg text-slate-600">Explore our most popular courses hand-picked for you.</p>
            </div>
            <button className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-2">
              Browse all courses <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer flex flex-col">
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                    {course.category}
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-bold text-sm text-slate-800">{course.rating}</span>
                    <span className="text-slate-400 text-sm">({course.students})</span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 line-clamp-2 text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 flex-grow">By {course.instructor}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</div>
                    <div className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> 42 Lessons</div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="font-extrabold text-2xl text-slate-900">{course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION (CTA) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600 -z-20"></div>
        {/* Decorative background for CTA */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of learners and start building your future today. Get access to our entire catalog of top-tier courses.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              Get Started for Free
            </button>
            <button className="px-8 py-4 bg-indigo-700 text-white border border-indigo-500 rounded-xl font-bold text-lg hover:bg-indigo-800 transition-colors">
              View Pricing Plans
            </button>
          </div>
          
          <div className="mt-8 flex justify-center gap-6 text-sm text-indigo-200">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> No credit card required</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> 14-day money-back guarantee</span>
          </div>
        </div>
      </section>

    </div>
 
  );
}