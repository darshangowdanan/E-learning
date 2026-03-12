import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />
      
      {/* Dummy Main Content Area to push footer down */}
      {/* <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Unlock Your <span className="text-indigo-600">Potential</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            This is a placeholder for your Landing Page content. The Navbar is sticky at the top, and the Footer is pushed to the bottom.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">
              Explore Courses
            </button>
          </div>
        </div>
      </main> */}
         {children}
      <Footer />
    </div>
  );
}
