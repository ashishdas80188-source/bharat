'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Code2,
  Briefcase,
  BookOpen,
  Stethoscope,
  Scale,
  Pill,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Search,
} from 'lucide-react';
import { COLLEGES_DATA } from '@/lib/data/colleges';

const ALL_DISCIPLINES = [
  {
    name: 'Engineering & Technology',
    slug: 'Engineering & Tech',
    degrees: ['B.Tech CSE', 'B.Tech AI & ML', 'B.Tech ECE', 'B.Tech Mechanical', 'M.Tech'],
    avgSalary: '₹6.5 - 24 LPA',
    duration: '4 Years',
    exams: ['JEE Main', 'JEE Advanced', 'OJEE', 'WBJEE', 'MHT CET'],
    collegesCount: '4,500+ Institutes',
    color: 'from-blue-600 to-indigo-700',
    icon: Code2,
  },
  {
    name: 'Management & Business',
    slug: 'Management & BBA/MBA',
    degrees: ['MBA', 'PGDM', 'BBA', 'Executive MBA'],
    avgSalary: '₹8.0 - 32 LPA',
    duration: '2 - 3 Years',
    exams: ['CAT', 'MAT', 'XAT', 'CMAT', 'OJEE MBA'],
    collegesCount: '3,200+ Institutes',
    color: 'from-purple-600 to-pink-600',
    icon: Briefcase,
  },
  {
    name: 'Computer Applications & IT',
    slug: 'Computer Applications',
    degrees: ['BCA', 'MCA', 'B.Sc Data Science', 'Cybersecurity'],
    avgSalary: '₹5.5 - 18 LPA',
    duration: '2 - 3 Years',
    exams: ['NIMCET', 'OJEE MCA', 'MAH MCA CET', 'CUET UG'],
    collegesCount: '2,800+ Institutes',
    color: 'from-cyan-600 to-blue-600',
    icon: BookOpen,
  },
  {
    name: 'Medical & Dental Sciences',
    slug: 'Medical & Dental',
    degrees: ['MBBS', 'BDS', 'BAMS', 'B.Sc Nursing', 'MD/MS'],
    avgSalary: '₹9.0 - 28 LPA',
    duration: '4.5 - 5.5 Years',
    exams: ['NEET UG', 'NEET PG', 'INI-CET'],
    collegesCount: '1,400+ Institutes',
    color: 'from-emerald-600 to-teal-700',
    icon: Stethoscope,
  },
  {
    name: 'Law & Jurisprudence',
    slug: 'Law & Jurisprudence',
    degrees: ['BA LLB', 'BBA LLB', 'LLM', 'Corporate Law'],
    avgSalary: '₹7.0 - 22 LPA',
    duration: '3 - 5 Years',
    exams: ['CLAT', 'AILET', 'LSAT India'],
    collegesCount: '950+ Institutes',
    color: 'from-amber-600 to-orange-700',
    icon: Scale,
  },
  {
    name: 'Pharmacy & Biotechnology',
    slug: 'Pharmacy & Biotech',
    degrees: ['B.Pharm', 'M.Pharm', 'Pharm.D', 'Biotech Engg'],
    avgSalary: '₹5.0 - 16 LPA',
    duration: '4 - 6 Years',
    exams: ['GPAT', 'NIPER JEE', 'NEET / State CET'],
    collegesCount: '1,800+ Institutes',
    color: 'from-rose-600 to-pink-700',
    icon: Pill,
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = ALL_DISCIPLINES.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.degrees.some((deg) => deg.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Header */}
      <div className="gradient-hero text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Academic Programs &amp; Degree Explorer 2026-27
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Explore Degree Programs &amp; Streams
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Discover undergraduate, postgraduate, and diploma degrees across India with cutoff ranks, fee ranges, and matching accredited colleges.
          </p>

          <div className="max-w-md mx-auto pt-4">
            <div className="bg-white p-2 rounded-xl flex items-center gap-2 text-slate-800 shadow-lg">
              <Search className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
              <input
                type="text"
                placeholder="Search degree (e.g. B.Tech, MBA, MCA, MBBS)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Disciplines Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full">
                      {item.collegesCount}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Duration: {item.duration}</p>
                  </div>

                  {/* Degrees */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Popular Degrees</span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.degrees.map((deg) => (
                        <span key={deg} className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-md">
                          {deg}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Salary & Entrance */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Avg Package</span>
                      <strong className="text-emerald-700 font-bold">{item.avgSalary}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Entrance Exams</span>
                      <strong className="text-slate-800 font-semibold">{item.exams.slice(0, 2).join(', ')}</strong>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/colleges?stream=${encodeURIComponent(item.slug)}`}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-sm"
                >
                  <span>Explore Colleges ({item.slug})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
