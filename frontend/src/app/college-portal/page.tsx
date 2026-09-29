'use client';

import React from 'react';
import Link from 'next/link';
import { Landmark, Users, CheckCircle2, ShieldCheck, ArrowRight, BarChart3, UploadCloud, Bell } from 'lucide-react';

export default function CollegePortalPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="gradient-hero text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <Landmark className="w-4 h-4" /> EduIndia Higher Education Institution Gateway
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Centralized Institution Admission Portal
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Manage your college courses, configure intake seat matrix, verify student certificates, and publish real-time merit lists directly to nationwide applicants.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg transition"
            >
              Onboard Your Institution
            </Link>
            <Link
              href="/login"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs px-6 py-3.5 rounded-xl transition"
            >
              Institution Admin Login
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Direct Applicant Pool</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Receive verified applicants matching your minimum eligibility and entrance exam cutoff criteria across all states.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Certificate Verification</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Direct access to student S3-uploaded 10th/12th marksheets, rank cards, and identity proofs in a high-security vault.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Seat Matrix Management</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Update round-wise counseling allocations, branch change preferences, and fee payment receipts instantly.
          </p>
        </div>
      </div>
    </div>
  );
}
