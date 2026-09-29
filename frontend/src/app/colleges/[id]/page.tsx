'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Award,
  TrendingUp,
  Building2,
  CheckCircle2,
  Calendar,
  DollarSign,
  FileText,
  Users,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Sparkles,
  Phone,
  Mail,
  Globe,
  Share2,
  Download,
} from 'lucide-react';
import { COLLEGES_DATA } from '@/lib/data/colleges';

export default function CollegeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const college = COLLEGES_DATA.find((c) => c.id === id) || COLLEGES_DATA[0];
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const selectedCourse = college.courses[selectedCourseIndex] || college.courses[0];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* College Hero Header */}
      <div className="relative bg-slate-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${college.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-4 font-medium">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>/</span>
            <span className="text-amber-400">{college.shortName}</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-blue-600 text-white px-3 py-1 rounded-md">
                  {college.type}
                </span>
                {college.nirfRank && (
                  <span className="text-xs font-bold bg-amber-400 text-slate-950 px-3 py-1 rounded-md flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> NIRF Rank #{college.nirfRank}
                  </span>
                )}
                <span className="text-xs font-bold bg-emerald-500 text-white px-3 py-1 rounded-md">
                  NAAC Grade {college.naacGrade}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {college.name}
              </h1>

              <p className="text-slate-300 text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                {college.city}, {college.state} | {college.affiliation}
              </p>

              <p className="text-sm text-slate-200 italic max-w-2xl">
                &ldquo;{college.tagline}&rdquo;
              </p>
            </div>

            {/* Quick Action Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white space-y-4 shrink-0 w-full lg:w-80">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs text-slate-300">Application Fee</span>
                <span className="text-xl font-bold text-amber-400">₹{college.applicationFee}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs text-slate-300">Admission Status</span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">
                  Open 2026-27
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs text-slate-300">Last Date</span>
                <span className="text-xs font-semibold text-slate-200">{college.applicationDeadline}</span>
              </div>

              <Link
                href={`/apply/${college.id}`}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-lg transition"
              >
                <span>Apply Online 2026</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metric Highlights Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">₹{college.highestPackageLPA} LPA</p>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Highest Placement</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹{college.medianPackageLPA} LPA</p>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Average Package</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">{college.rating} / 5.0</p>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Verified Rating ({college.reviewsCount})</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-500">{college.courses.length} Programs</p>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Approved Courses</p>
          </div>
        </div>
      </div>

      {/* Detail Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* About Section */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" /> About {college.name}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {college.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="block text-[11px] text-slate-500">Established</span>
                <strong className="text-sm text-slate-800">{college.established}</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="block text-[11px] text-slate-500">Campus Location</span>
                <strong className="text-sm text-slate-800">{college.city}</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="block text-[11px] text-slate-500">State</span>
                <strong className="text-sm text-slate-800">{college.state}</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="block text-[11px] text-slate-500">Accreditation</span>
                <strong className="text-sm text-emerald-700">NAAC {college.naacGrade}</strong>
              </div>
            </div>
          </section>

          {/* Courses, Fees & Cutoffs */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" /> Courses, Seats &amp; Fee Structure (2026-27)
                </h2>
                <p className="text-xs text-slate-500 mt-1">Official intake approved by AICTE / UGC regulatory councils</p>
              </div>
            </div>

            {/* Course Selector Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {college.courses.map((c, idx) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedCourseIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition ${
                    selectedCourseIndex === idx
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {c.degree} ({c.duration})
                </button>
              ))}
            </div>

            {/* Selected Course Card */}
            {selectedCourse && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 p-6 rounded-2xl border border-blue-100 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">{selectedCourse.name}</h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full w-fit">
                    Intake: {selectedCourse.seats} Seats
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="block text-xs text-slate-500 font-medium">Annual Tuition Fee</span>
                    <strong className="text-xl font-bold text-slate-900">
                      ₹{selectedCourse.annualFee.toLocaleString('en-IN')}
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Per academic year</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="block text-xs text-slate-500 font-medium">Entrance Exam</span>
                    <strong className="text-sm font-bold text-blue-700">{selectedCourse.entranceExam}</strong>
                    <span className="text-[11px] text-slate-500 block mt-0.5">{selectedCourse.cutoffRank || 'Merit based'}</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="block text-xs text-slate-500 font-medium">Course Duration</span>
                    <strong className="text-sm font-bold text-slate-800">{selectedCourse.duration}</strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Full-Time Degree</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-700">Eligibility Criteria:</span>
                  <p className="text-slate-600">{selectedCourse.eligibility}</p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/apply/${college.id}?course=${encodeURIComponent(selectedCourse.name)}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl shadow transition"
                  >
                    <span>Apply for {selectedCourse.degree}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </section>

          {/* Campus Facilities & Infrastructure */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> Campus Facilities &amp; Amenities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {college.facilities.map((fac) => (
                <div key={fac} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Placements & Top Conglomerates */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" /> Industry Partners &amp; Hiring Network
            </h2>
            <p className="text-xs text-slate-500">
              Leading multinational corporations and research labs that regularly participate in campus placement drives:
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {college.topRecruiters.map((rec) => (
                <span
                  key={rec}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 transition"
                >
                  🏢 {rec}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Apply Card */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-6 rounded-2xl shadow-xl space-y-4 sticky top-24">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" /> EduIndia Verified Application
            </div>

            <h3 className="text-xl font-bold">Ready to Join {college.shortName}?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Submit your academic details and documents once. Official application review and seat allotment guarantee.
            </p>

            <div className="space-y-2 pt-2">
              <Link
                href={`/apply/${college.id}`}
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-lg transition text-sm"
              >
                <span>Proceed to Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No hidden agency commissions
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> S3 Encrypted Document Storage
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Real-time admission counseling tracking
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
