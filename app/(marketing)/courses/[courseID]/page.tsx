import React, { useState } from 'react';
import { PlayCircle, Check, Clock, BookOpen, Award, Monitor, Star, ChevronDown, ChevronUp, Globe, Users, Share, Heart } from 'lucide-react';

export default function CourseDetailsPage() {
  const [activeSection, setActiveSection] = useState<number | null>(0);

  // Mock data object simulating what your future backend API will return
  const courseData = {
    breadcrumbs: ['Development', 'Web Development', 'Full Stack'],
    title: 'The Complete 2024 Web Development Bootcamp',
    subtitle: 'Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.',
    rating: 4.9,
    reviewsCount: '12,543',
    studentsCount: '85,402',
    language: 'English',
    captions: 'English [Auto], Spanish [Auto]',
    price: 89.99,
    previewImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400',
    stats: { sections: 32, lectures: 142, totalLength: '45h 30m' },
    whatYouWillLearn: [
      'Build 16 web development projects for your portfolio',
      'Learn the latest technologies, including Javascript, React, Node and even Web3.',
      'After the course you will be able to build ANY website you want.',
      'Build fully-fledged websites and web apps for your startup or business.',
      'Master frontend development with React',
      'Master backend development with Node'
    ],
    requirements: [
      'No programming experience needed - I\'ll teach you everything you need to know',
      'A computer with access to the internet',
      'No paid software required'
    ],
    descriptionParagraphs: [
      'Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of the internet!',
      'At 45+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.',
      "Here's why:"
    ],
    descriptionBullets: [
      'The course is taught by the lead instructor at a top programming bootcamp.',
      'The course has been updated to be 2024 ready and you\'ll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.',
      'This course doesn\'t cut any corners, there are beautiful animated explanation videos and tens of real-world projects which you will get to build.'
    ],
    instructor: {
      name: 'Sarah Jenkins',
      title: 'Developer and Lead Instructor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
      rating: 4.9,
      reviews: '150,000+',
      students: '500,000+',
      courses: 5,
      bio: 'I\'m Sarah, I\'m a developer with a passion for teaching. I\'m the lead instructor at the London App Brewery, London\'s leading Programming Bootcamp. I\'ve helped hundreds of thousands of students learn to code and change their lives by becoming a developer.'
    },
    curriculum: [
      {
        title: 'Introduction to Web Development',
        lectures: 4,
        duration: '45 mins',
        items: [
          { title: 'Welcome to the course!', duration: '05:20', isPreview: true },
          { title: 'How the internet works', duration: '12:45', isPreview: true },
          { title: 'Setting up your development environment', duration: '15:30', isPreview: false },
          { title: 'Command Line basics', duration: '11:05', isPreview: false },
        ]
      },
      {
        title: 'HTML5 Foundations',
        lectures: 6,
        duration: '2 hours 15 mins',
        items: [
          { title: 'Introduction to HTML', duration: '10:00', isPreview: false },
          { title: 'Document Structure & Meta tags', duration: '18:20', isPreview: false },
          { title: 'Text formatting and Semantic HTML', duration: '25:10', isPreview: false },
          { title: 'Links, Images, and Multimedia', duration: '22:45', isPreview: false },
          { title: 'HTML Forms and Inputs', duration: '35:00', isPreview: false },
          { title: 'HTML Tables', duration: '24:00', isPreview: false },
        ]
      },
      {
        title: 'CSS3 Styling & Layouts',
        lectures: 8,
        duration: '4 hours 30 mins',
        items: [
          { title: 'CSS Basics and Selectors', duration: '15:00', isPreview: false },
          { title: 'The Box Model', duration: '20:00', isPreview: false },
          { title: 'Flexbox Deep Dive', duration: '45:00', isPreview: false },
          { title: 'CSS Grid Crash Course', duration: '50:00', isPreview: false },
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* --- HERO SECTION (Dark Background) --- */}
      <div className="bg-slate-900 text-white pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content (2/3 width on desktop) */}
            <div className="lg:col-span-2 flex flex-col items-start">
              
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-sm text-indigo-200 font-medium mb-6">
                {courseData.breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span>›</span>}
                    <a href="#" className={idx === courseData.breadcrumbs.length - 1 ? "text-white" : "hover:text-white transition-colors"}>
                      {crumb}
                    </a>
                  </React.Fragment>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                {courseData.title}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                {courseData.subtitle}
              </p>

              {/* Course Meta Info */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm mb-6">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-bold text-white text-base">{courseData.rating}</span>
                  <span className="text-slate-300 underline">({courseData.reviewsCount} ratings)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Users className="h-5 w-5" />
                  <span>{courseData.studentsCount} students</span>
                </div>
              </div>

              <div className="text-sm text-slate-300 flex flex-wrap items-center gap-x-6 gap-y-2">
                <div>Created by <a href="#" className="text-indigo-300 hover:text-white underline font-medium">{courseData.instructor.name}</a></div>
                <div className="flex items-center gap-1.5"><Globe className="h-4 w-4" /> {courseData.language}</div>
                <div className="flex items-center gap-1.5"><Monitor className="h-4 w-4" /> {courseData.captions}</div>
              </div>
              
              {/* Mobile Only: Action buttons */}
              <div className="lg:hidden w-full mt-8 space-y-3">
                <div className="text-4xl font-extrabold mb-4">${courseData.price}</div>
                <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-indigo-700">Add to Cart</button>
                <div className="text-center text-xs text-slate-400">30-Day Money-Back Guarantee</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- MAIN CONTENT & SIDEBAR --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12 relative">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What you'll learn */}
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {courseData.whatYouWillLearn.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum/Syllabus */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Course content</h2>
              <div className="flex items-center justify-between text-sm text-slate-600 mb-4 pb-2 border-b border-slate-200">
                <span>{courseData.stats.sections} sections • {courseData.stats.lectures} lectures • {courseData.stats.totalLength} total length</span>
                <button 
                  onClick={() => setActiveSection(activeSection === null ? 0 : null)} 
                  className="text-indigo-600 font-medium hover:text-indigo-800"
                >
                  {activeSection !== null ? 'Collapse all' : 'Expand all'}
                </button>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden">
                {courseData.curriculum.map((section, idx) => (
                  <div key={idx} className="border-b border-slate-200 last:border-0">
                    <button 
                      onClick={() => setActiveSection(activeSection === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        {activeSection === idx ? <ChevronUp className="h-5 w-5 text-slate-500" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
                        <span className="font-bold text-slate-900">{section.title}</span>
                      </div>
                      <span className="text-sm text-slate-500 hidden sm:block">
                        {section.lectures} lectures • {section.duration}
                      </span>
                    </button>
                    
                    {activeSection === idx && (
                      <div className="bg-white p-2">
                        {section.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg group">
                            <div className="flex items-start gap-3">
                              <PlayCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${item.isPreview ? 'text-indigo-600' : 'text-slate-400'}`} />
                              <span className={`text-sm ${item.isPreview ? 'text-indigo-600 font-medium' : 'text-slate-700'}`}>
                                {item.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                              {item.isPreview && <span className="text-indigo-600 underline cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">Preview</span>}
                              <span className="text-slate-500">{item.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                {courseData.stats.sections - 3} more sections
              </button>
            </div>

            {/* Requirements & Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-8">
                {courseData.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <div className="text-slate-700 space-y-4 leading-relaxed">
                {courseData.descriptionParagraphs.map((para, i) => (
                  <p key={i}>
                    {i === 2 ? <strong>{para}</strong> : para}
                  </p>
                ))}
                <ul className="list-disc pl-5 space-y-1">
                  {courseData.descriptionBullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructor Profile */}
            <div className="pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold mb-6">Instructor</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <img src={courseData.instructor.avatar} alt={courseData.instructor.name} className="w-24 h-24 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 underline cursor-pointer mb-1">{courseData.instructor.name}</h3>
                  <p className="text-slate-600 font-medium mb-3">{courseData.instructor.title}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700 mb-4">
                    <div className="flex items-center gap-1.5"><Star className="h-4 w-4" /> {courseData.instructor.rating} Instructor Rating</div>
                    <div className="flex items-center gap-1.5"><Award className="h-4 w-4" /> {courseData.instructor.reviews} Reviews</div>
                    <div className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {courseData.instructor.students} Students</div>
                    <div className="flex items-center gap-1.5"><PlayCircle className="h-4 w-4" /> {courseData.instructor.courses} Courses</div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {courseData.instructor.bio}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden -mt-48 z-10 flex flex-col">
              
              {/* Video Preview Image */}
              <div className="relative h-56 bg-slate-800 flex items-center justify-center cursor-pointer group">
                <img src={courseData.previewImage} alt="Course Preview" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlayCircle className="h-10 w-10 text-white fill-white/80" />
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center font-bold text-white z-10 drop-shadow-md">
                  Preview this course
                </div>
              </div>

              {/* Pricing & Actions */}
              <div className="p-6">
                <div className="text-4xl font-extrabold text-slate-900 mb-6">${courseData.price}</div>
                
                <div className="space-y-3 mb-4">
                  <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all">
                    Add to Cart
                  </button>
                  <button className="w-full bg-white text-slate-900 border border-slate-300 py-3.5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors">
                    Buy Now
                  </button>
                </div>
                
                <p className="text-center text-xs text-slate-500 mb-6">30-Day Money-Back Guarantee</p>

                {/* What's included */}
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">This course includes:</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-3"><Monitor className="h-4 w-4" /> {courseData.stats.totalLength} on-demand video</li>
                    <li className="flex items-center gap-3"><Clock className="h-4 w-4" /> Full lifetime access</li>
                    <li className="flex items-center gap-3"><Globe className="h-4 w-4" /> Access on mobile and TV</li>
                    <li className="flex items-center gap-3"><Award className="h-4 w-4" /> Certificate of completion</li>
                  </ul>
                </div>
                
                {/* Utilities */}
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-200 text-sm font-medium text-slate-600">
                  <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors"><Share className="h-4 w-4" /> Share</button>
                  <button className="flex items-center gap-2 hover:text-rose-600 transition-colors"><Heart className="h-4 w-4" /> Wishlist</button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}