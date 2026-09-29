'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Calendar, FileText, CheckCircle2, ArrowRight, Sparkles, HelpCircle, PhoneCall } from 'lucide-react';

export default function AdmissionsPage() {
  const steps = [
    {
      step: '01',
      title: 'Choose Degree & Check Eligibility',
      desc: 'Browse approved colleges across all 28 states. Check minimum 10+2 marks, entrance cutoffs, and seat intake.',
    },
    {
      step: '02',
      title: 'Unified Common Application',
      desc: 'Fill in your personal, academic, and entrance examination scores once on EduIndia.',
    },
    {
      step: '03',
      title: 'Encrypted Document Upload',
      desc: 'Upload 10th & 12th marksheets, caste/category certificate, and identity proof to private cloud storage.',
    },
    {
      step: '04',
      title: 'Fee Payment & Instant Receipt',
      desc: 'Pay direct institute application fees via secure gateway. Receive digital confirmation and tracking ID.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="gradient-hero text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Centralized Counseling &amp; Admission Guidelines 2026-2027
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            National Admission Portal 2026-27
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about eligibility cutoffs, entrance counseling schedules, and unified application submission.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="/colleges"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg transition flex items-center gap-2"
            >
              <span>Explore 12,000+ Colleges</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Step by step guide */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900">How Direct Admission Works</h2>
            <p className="text-xs text-slate-500 mt-1">Four simple steps without middleman charges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow">
                  {s.step}
                </span>
                <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents checklist */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              Application Checklist
            </span>
            <h2 className="text-2xl font-bold text-slate-900">Mandatory Documents Required</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ensure you have digital scans (PDF or JPEG under 2MB) of the following ready before submitting your college application:
            </p>

            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Class 10th Marksheet &amp; Passing Certificate
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Class 12th / Diploma Marksheet (or Board Admit Card)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> National / State Entrance Scorecard (JEE, NEET, OJEE, CAT, etc.)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Government Photo Identity Proof (Aadhaar / Voter ID / Passport)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Recent Passport-sized Photographs
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold">Need Counseling Support?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our national helpline provides unbiased guidance on cutoff predictions, branch choice filling, and fee concession schemes.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <PhoneCall className="w-4 h-4" /> Toll-Free Admission Helpline: 1800-2026-BHARAT
              </div>
              <div className="text-slate-400">Available Monday - Saturday: 9:00 AM - 7:00 PM IST</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
