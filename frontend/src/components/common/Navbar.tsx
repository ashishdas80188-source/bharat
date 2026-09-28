'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { HealthIndicator } from './HealthIndicator';
import { GraduationCap, Landmark, ShieldCheck, User as UserIcon, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" /> Official All-India National Admission Gateway
          </span>
          <span className="hidden md:inline text-slate-400">| Covering 28 States & 8 Union Territories</span>
        </div>
        <HealthIndicator />
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Edu<span className="text-blue-600">India</span>
            </span>
            <span className="block text-[10px] uppercase tracking-wider font-semibold text-amber-600">
              National Admission Portal
            </span>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/colleges" className="hover:text-blue-600 transition-colors">
            Explore Colleges
          </Link>
          <Link href="/courses" className="hover:text-blue-600 transition-colors">
            Courses & Streams
          </Link>
          <Link href="/admissions" className="hover:text-blue-600 transition-colors">
            Admission 2026-27
          </Link>
          <Link href="/rankings" className="hover:text-blue-600 transition-colors">
            NIRF Rankings
          </Link>
        </nav>

        {/* Actions / Auth */}
        <div className="flex items-center gap-3">
          <Link
            href="/college-portal"
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition"
          >
            <Landmark className="w-3.5 h-3.5 text-blue-700" />
            Institution Portal
          </Link>

          {isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              <Link
                href={user.role === 'STUDENT' ? '/student/dashboard' : user.role === 'COLLEGE_ADMIN' ? '/college-portal/dashboard' : '/admin/dashboard'}
                className="flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg shadow-sm transition"
              >
                <UserIcon className="w-3.5 h-3.5" />
                {user.fullName || 'Dashboard'}
              </Link>
              <button
                onClick={logout}
                title="Logout"
                className="p-2 text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-lg transition"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 transition"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg shadow-sm transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
