import React, { useState } from 'react';
import { PlayCircle, CheckCircle, Circle, ArrowLeft, Menu, X, MessageSquare, FileText, Download, Play, Pause, Volume2, Maximize, Settings, ChevronDown, ChevronUp } from 'lucide-react';

export default function VideoPlayerPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeSection, setActiveSection] = useState<number | null>(0);
  const [activeLesson, setActiveLesson] = useState(1); // ID of the currently playing lesson
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock data for the learning interface
  const courseData = {
    title: 'The Complete 2024 Web Development Bootcamp',
    progress: 15, // percentage
    curriculum: [
      {
        id: 1,
        title: 'Introduction to Web Development',
        lessons: [
          { id: 1, title: 'Welcome to the course!', duration: '05:20', completed: true, type: 'video' },
          { id: 2, title: 'How the internet works', duration: '12:45', completed: true, type: 'video' },
          { id: 3, title: 'Setting up your development environment', duration: '15:30', completed: false, type: 'video' },
          { id: 4, title: 'Download Course Resources', duration: '1 page', completed: false, type: 'resource' },
        ]
      },
      {
        id: 2,
        title: 'HTML5 Foundations',
        lessons: [
          { id: 5, title: 'Introduction to HTML', duration: '10:00', completed: false, type: 'video' },
          { id: 6, title: 'Document Structure & Meta tags', duration: '18:20', completed: false, type: 'video' },
          { id: 7, title: 'HTML Coding Exercise 1', duration: '10 mins', completed: false, type: 'quiz' },
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* --- TOP NAVBAR --- */}
      <header className="h-16 bg-slate-900 text-white flex items-center justify-between px-4 sm:px-6 flex-shrink-0 z-20 shadow-md">
        <div className="flex items-center gap-4 truncate">
          <a href="#" className="p-2 hover:bg-slate-800 rounded-full transition-colors hidden sm:block">
            <ArrowLeft className="h-5 w-5" />
          </a>
          <div className="truncate text-sm sm:text-base font-medium border-l border-slate-700 pl-4">
            {courseData.title}
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Progress Indicator */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${courseData.progress}%` }}></div>
            </div>
            <span className="text-sm font-medium text-slate-300">Your progress: {courseData.progress}%</span>
          </div>
          
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
          >
            {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="hidden sm:inline">{isSidebarOpen ? 'Close Curriculum' : 'Course Content'}</span>
          </button>
        </div>
      </header>

      {/* --- MAIN LAYOUT --- */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Left Area (Video & Content Tabs) */}
        <div className={`flex-1 flex flex-col overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:mr-96' : ''}`}>
          
          {/* Video Player Container */}
          <div className="bg-black w-full aspect-video relative group flex-shrink-0">
            {/* Fake Video Player Image/Background */}
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200&h=675" 
              alt="Video frame" 
              className="w-full h-full object-cover opacity-60"
            />
            
            {/* Big Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-indigo-600/90 hover:bg-indigo-600 text-white rounded-full flex items-center justify-center transition-transform hover:scale-105"
                >
                  <Play className="h-10 w-10 ml-1 fill-current" />
                </button>
              </div>
            )}

            {/* Custom Video Controls Overlay (Visible on hover) */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-12 pb-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer relative">
                <div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full w-1/3"></div>
              </div>
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-indigo-400">
                    {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
                  </button>
                  <button className="hover:text-indigo-400"><Volume2 className="h-5 w-5" /></button>
                  <span className="text-sm font-medium">04:12 / 15:30</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-sm font-medium hover:text-indigo-400 bg-white/20 px-2 py-0.5 rounded">1x</button>
                  <button className="hover:text-indigo-400"><Settings className="h-5 w-5" /></button>
                  <button className="hover:text-indigo-400"><Maximize className="h-5 w-5" /></button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Tabs Area */}
          <div className="p-4 sm:p-8 max-w-5xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Setting up your development environment</h2>
            
            {/* Custom Tabs */}
            <div className="flex border-b border-slate-200 mb-8 overflow-x-auto no-scrollbar">
              {[
                { id: 'overview', label: 'Overview', icon: FileText },
                { id: 'qa', label: 'Q&A', icon: MessageSquare },
                { id: 'resources', label: 'Resources (2)', icon: Download },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id 
                      ? 'border-indigo-600 text-indigo-600' 
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" /> {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="prose prose-slate max-w-none text-slate-700">
                <p>In this lesson, we will set up everything you need to start coding. We will be downloading and installing a text editor (VS Code) and a web browser (Google Chrome).</p>
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Key Takeaways:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Download and install Visual Studio Code.</li>
                  <li>Install the recommended VS Code extensions (Live Server, Prettier).</li>
                  <li>Set up your file and folder structure for the course projects.</li>
                </ul>
                <div className="mt-8 p-4 bg-indigo-50 border border-indigo-100 rounded-xl flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full flex-shrink-0 text-indigo-600">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Mark as completed?</h4>
                    <p className="text-sm text-slate-600 mb-3">Keep track of your progress by marking lessons as complete once you finish them.</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                      Mark as Completed
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'qa' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Questions from other students</h3>
                  <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">Ask a Question</button>
                </div>
                {/* Mock Q&A Items */}
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex gap-4 p-4 border border-slate-200 rounded-xl">
                      <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        JD
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">John Doe</h4>
                        <p className="text-xs text-slate-500 mb-2">2 days ago</p>
                        <p className="text-slate-700 text-sm mb-3">I'm having trouble installing Live Server. It says command not found. Has anyone else experienced this issue on a Mac?</p>
                        <button className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:text-indigo-700">
                          <MessageSquare className="h-4 w-4" /> 3 replies
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-indigo-600" />
                    <span className="font-medium text-slate-700">VS_Code_Shortcuts_Cheatsheet.pdf</span>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-indigo-600 rounded-full transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-indigo-600" />
                    <span className="font-medium text-slate-700">Installation_Links.txt</span>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-indigo-600 rounded-full transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar (Curriculum Overlay/Drawer) */}
        <div 
          className={`absolute top-0 right-0 h-full w-full sm:w-96 bg-white border-l border-slate-200 shadow-2xl transition-transform duration-300 ease-in-out z-10 lg:translate-x-0 ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-900">Course Content</h3>
              <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="lg:hidden p-2 text-slate-500 hover:bg-slate-200 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {courseData.curriculum.map((section, idx) => (
                <div key={section.id} className="border-b border-slate-200">
                  {/* Section Header */}
                  <button 
                    onClick={() => setActiveSection(activeSection === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Section {section.id}: {section.title}</h4>
                      <div className="text-xs text-slate-500">
                        {section.lessons.filter(l => l.completed).length} / {section.lessons.length} | 54min
                      </div>
                    </div>
                    {activeSection === idx ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                  </button>
                  
                  {/* Section Lessons */}
                  {activeSection === idx && (
                    <div className="bg-white">
                      {section.lessons.map((lesson) => (
                        <button 
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson.id)}
                          className={`w-full flex items-start gap-3 p-4 text-left hover:bg-slate-50 transition-colors ${
                            activeLesson === lesson.id ? 'bg-indigo-50/50' : ''
                          }`}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-emerald-500" />
                            ) : (
                              <Circle className="h-5 w-5 text-slate-300" />
                            )}
                          </div>
                          <div className="flex-1">
                            <span className={`text-sm ${activeLesson === lesson.id ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                              {lesson.id}. {lesson.title}
                            </span>
                            <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                              {lesson.type === 'video' && <PlayCircle className="h-3 w-3" />}
                              {lesson.type === 'resource' && <FileText className="h-3 w-3" />}
                              {lesson.type === 'quiz' && <MessageSquare className="h-3 w-3" />}
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}