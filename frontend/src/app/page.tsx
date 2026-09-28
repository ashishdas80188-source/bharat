'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Sparkles,
  BookOpen,
  Code2,
  Stethoscope,
  Briefcase,
  Scale,
  Pill,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  CreditCard,
  Building2,
  TrendingUp,
  Award,
} from 'lucide-react';

const streamCategories = [
  {
    name: 'Engineering & Tech',
    degrees: 'B.Tech, M.Tech, Diploma',
    icon: Code2,
    count: '4,500+ Colleges',
    badgeColor: 'bg-blue-100 text-blue-800',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'Management & BBA/MBA',
    degrees: 'MBA, PGDM, BBA, BMS',
    icon: Briefcase,
    count: '3,200+ Colleges',
    badgeColor: 'bg-purple-100 text-purple-800',
    color: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Computer Applications',
    degrees: 'BCA, MCA, Data Science',
    icon: BookOpen,
    count: '2,800+ Colleges',
    badgeColor: 'bg-cyan-100 text-cyan-800',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    name: 'Medical & Dental',
    degrees: 'MBBS, BDS, BAMS, Nursing',
    icon: Stethoscope,
    count: '1,400+ Colleges',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    name: 'Law & Jurisprudence',
    degrees: 'BA LLB, BBA LLB, LLM',
    icon: Scale,
    count: '950+ Colleges',
    badgeColor: 'bg-amber-100 text-amber-800',
    color: 'from-amber-600 to-orange-700',
  },
  {
    name: 'Pharmacy & Biotech',
    degrees: 'B.Pharm, M.Pharm, Pharm.D',
    icon: Pill,
    count: '1,800+ Colleges',
    badgeColor: 'bg-rose-100 text-rose-800',
    color: 'from-rose-600 to-pink-700',
  },
];

const indianStates = [
  'All India', 'Delhi NCR', 'Maharashtra', 'Karnataka', 'Tamil Nadu',
  'Uttar Pradesh', 'Telangana', 'West Bengal', 'Gujarat', 'Rajasthan',
  'Kerala', 'Madhya Pradesh', 'Punjab', 'Bihar', 'Odisha', 'Assam'
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All India');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Centralized Admission Portal 2026-2027
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none">
            One Platform. Every College. <br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              Your Future.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal">
            Discover verified colleges across all 28 Indian States &amp; 8 Union Territories.
            Compare eligibility, real fee structures, NIRF rankings, and apply directly.
          </p>

          {/* Unified Search Box */}
          <div className="pt-4 max-w-3xl mx-auto">
            <div className="bg-white p-2 sm:p-3 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 border border-slate-200 text-slate-900">
              <div className="flex-1 flex items-center gap-3 px-3 py-2 bg-slate-50 sm:bg-transparent rounded-xl">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search by college name, degree (e.g. B.Tech CS, MBA, MBBS)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-400 font-medium"
                />
              </div>

              <div className="flex items-center gap-2 px-3 py-2 border-t sm:border-t-0 sm:border-l border-slate-200 bg-slate-50 sm:bg-transparent rounded-xl">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
                >
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <Link
                href={`/colleges?query=${encodeURIComponent(searchQuery)}&state=${encodeURIComponent(selectedState)}`}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-all shrink-0"
              >
                <span>Find Colleges</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Filter Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-300">
              <span className="text-slate-400 font-medium">Popular:</span>
              {['IITs & NITs', 'Top MBA PGDM', 'Govt Medical Colleges', 'Autonomous Institutes', 'NAAC A++'].map(
                (tag) => (
                  <Link
                    key={tag}
                    href={`/colleges?filter=${encodeURIComponent(tag)}`}
                    className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition"
                  >
                    {tag}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Key Stats Bar */}
      <section className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="space-y-1">
            <p className="text-3xl font-extrabold text-blue-600">28 &amp; 8</p>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">States &amp; UTs Covered</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <p className="text-3xl font-extrabold text-slate-900">12,000+</p>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Accredited Colleges</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <p className="text-3xl font-extrabold text-emerald-600">100%</p>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Verified Institution Profiles</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <p className="text-3xl font-extrabold text-amber-500">₹0</p>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Extra Platform Surcharge</p>
          </div>
        </div>
      </section>

      {/* Discipline / Stream Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Browse By Stream
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Explore Programs Across Disciplines
          </h2>
          <p className="text-sm text-slate-600">
            Select your discipline to find top-ranked colleges, cutoff trends, and active admission sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {streamCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={`/colleges?stream=${encodeURIComponent(cat.name)}`}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${cat.badgeColor}`}>
                    {cat.count}
                  </span>
                </div>
                <div className="mt-5 space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{cat.degrees}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Courses &amp; Cutoffs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Step-by-Step Workflow */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Seamless Admission Journey
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              How EduIndia Simplifies College Admissions
            </h2>
            <p className="text-sm text-slate-600">
              Four transparent steps from college discovery to receiving your official admission letter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center text-lg shadow-inner">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Search &amp; Filter</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Filter across 28 states, accreditation (NIRF/NAAC), seat availability, and total fee breakdown.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center text-lg shadow-inner">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Fill Application</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Input your 10th, 12th, or entrance scores once. Auto-fill across multiple applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center text-lg shadow-inner">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Secure S3 Upload</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Upload your certificates and marksheets directly to encrypted private cloud buckets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center text-lg shadow-inner">
                4
              </div>
              <h3 className="text-base font-bold text-slate-900">Pay &amp; Track Status</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pay official application fees via Razorpay and track review, shortlist, and acceptance stages live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Colleges & Universities CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" /> For Colleges &amp; Higher Education Institutions
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Manage Your Admissions &amp; Receive Verified Applicants
            </h2>
            <p className="text-sm text-slate-300">
              Register your institution, configure course seat intakes, review submitted applicant documents, and streamline your admission rounds with our verified management dashboard.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/college-portal/register"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition text-center"
            >
              Register Institution
            </Link>
            <Link
              href="/college-portal/login"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition text-center"
            >
              Institution Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
