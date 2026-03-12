import Link from 'next/link';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';

export default function SignUpPage() {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Create an account</h2>
        <p className="text-slate-500">Sign up to start learning with us.</p>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {/* Social Buttons Omitted for Brevity (Copy from original) */}
        <button className="flex items-center justify-center gap-2 w-full py-2.5 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
          Continue with Google
        </button>
      </div>

      <div className="relative flex items-center py-2 mb-6">
        <div className="flex-grow border-t border-slate-200"></div>
        <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">Or continue with email</span>
        <div className="flex-grow border-t border-slate-200"></div>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <div className="relative">
            <User className="h-5 w-5 text-slate-400 absolute left-3 top-3" />
            <input type="text" className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg bg-slate-50" placeholder="John Doe" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <div className="relative">
            <Mail className="h-5 w-5 text-slate-400 absolute left-3 top-3" />
            <input type="email" className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg bg-slate-50" placeholder="you@example.com" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <div className="relative">
            <Lock className="h-5 w-5 text-slate-400 absolute left-3 top-3" />
            <input type="password" className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg bg-slate-50" placeholder="••••••••" />
          </div>
        </div>

        <button className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium mt-6">
          Create Account <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-slate-600">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
          Log in
        </Link>
      </div>
    </>
  );
}