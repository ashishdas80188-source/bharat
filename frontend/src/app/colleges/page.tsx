'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Sparkles,
  SlidersHorizontal,
  Building2,
  TrendingUp,
  Award,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Filter,
  DollarSign,
  X,
  ExternalLink,
} from 'lucide-react';
import { COLLEGES_DATA, College } from '@/lib/data/colleges';

const ALL_STATES = [
  'All India',
  'Odisha',
  'Delhi NCR',
  'Karnataka',
  'Maharashtra',
  'Tamil Nadu',
  'Uttar Pradesh',
  'Telangana',
  'West Bengal',
  'Gujarat',
  'Rajasthan',
  'Kerala',
  'Madhya Pradesh',
  'Punjab',
  'Bihar',
  'Assam',
];

const STREAMS = [
  'All Streams',
  'Engineering & Tech',
  'Computer Applications',
  'Management & BBA/MBA',
  'Medical & Dental',
  'Law & Jurisprudence',
  'Pharmacy & Biotech',
  'Design & Arts',
];

const INSTITUTION_TYPES = ['All Types', 'Autonomous', 'National Importance', 'Government', 'Deemed', 'Private'];

function CollegesSearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get('query') || '';
  const initialState = searchParams.get('state') || 'All India';
  const initialStream = searchParams.get('stream') || 'All Streams';
  const initialFilter = searchParams.get('filter') || '';

  const [query, setQuery] = useState(initialQuery);
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedStream, setSelectedStream] = useState(initialStream);
  const [selectedType, setSelectedType] = useState('All Types');
  const [sortBy, setSortBy] = useState<'nirf' | 'rating' | 'feeAsc' | 'packageDesc'>('nirf');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Sync state when URL params change
  React.useEffect(() => {
    if (searchParams.get('query')) setQuery(searchParams.get('query') || '');
    if (searchParams.get('state')) setSelectedState(searchParams.get('state') || 'All India');
    if (searchParams.get('stream')) setSelectedStream(searchParams.get('stream') || 'All Streams');
  }, [searchParams]);

  const filteredColleges = useMemo(() => {
    return COLLEGES_DATA.filter((college) => {
      // 1. Text Search (matches name, shortName, city, description, or course names)
      if (query.trim()) {
        const q = query.toLowerCase().trim();
        const matchesName = college.name.toLowerCase().includes(q) || college.shortName.toLowerCase().includes(q);
        const matchesCity = college.city.toLowerCase().includes(q);
        const matchesState = college.state.toLowerCase().includes(q);
        const matchesCourse = college.courses.some(
          (c) => c.name.toLowerCase().includes(q) || c.degree.toLowerCase().includes(q)
        );
        const matchesStream = college.streams.some((s) => s.toLowerCase().includes(q));

        if (!matchesName && !matchesCity && !matchesState && !matchesCourse && !matchesStream) {
          return false;
        }
      }

      // 2. State Filter
      if (selectedState !== 'All India' && college.state.toLowerCase() !== selectedState.toLowerCase()) {
        return false;
      }

      // 3. Stream Filter
      if (selectedStream !== 'All Streams' && !college.streams.includes(selectedStream)) {
        return false;
      }

      // 4. Type Filter
      if (selectedType !== 'All Types' && college.type !== selectedType) {
        return false;
      }

      // 5. Popular quick tag filter
      if (initialFilter) {
        const tag = initialFilter.toLowerCase();
        if (tag.includes('iit') && !college.name.toLowerCase().includes('iit') && !college.name.toLowerCase().includes('nit')) {
          return false;
        }
        if (tag.includes('naac a++') && college.naacGrade !== 'A++') {
          return false;
        }
        if (tag.includes('mba') && !college.streams.includes('Management & BBA/MBA')) {
          return false;
        }
        if (tag.includes('medical') && !college.streams.includes('Medical & Dental')) {
          return false;
        }
        if (tag.includes('autonomous') && college.type !== 'Autonomous') {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'nirf') {
        return (a.nirfRank || 999) - (b.nirfRank || 999);
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'feeAsc') {
        const feeA = a.courses[0]?.annualFee || 0;
        const feeB = b.courses[0]?.annualFee || 0;
        return feeA - feeB;
      }
      if (sortBy === 'packageDesc') {
        return b.highestPackageLPA - a.highestPackageLPA;
      }
      return 0;
    });
  }, [query, selectedState, selectedStream, selectedType, sortBy, initialFilter]);

  const handleReset = () => {
    setQuery('');
    setSelectedState('All India');
    setSelectedStream('All Streams');
    setSelectedType('All Types');
    router.push('/colleges');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <div className="gradient-hero text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" /> All-India Central College Registry 2026-27
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Explore Verified Colleges &amp; Institutes
              </h1>
              <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
                Compare official cutoffs, NAAC accreditations, real placement records, and apply directly with zero extra charges.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 font-semibold">
                Showing {filteredColleges.length} Verified Institutions
              </span>
            </div>
          </div>

          {/* Unified Search Form */}
          <div className="bg-white p-2.5 rounded-2xl shadow-xl border border-slate-200 text-slate-900 grid grid-cols-1 md:grid-cols-12 gap-2">
            {/* Search Input */}
            <div className="md:col-span-5 flex items-center gap-3 px-3 py-2 bg-slate-50 rounded-xl">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search by college name, e.g. GIET Bhubaneswar, IIT..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-400 font-medium"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* State Select */}
            <div className="md:col-span-3 flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border-t md:border-t-0 md:border-l border-slate-200">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
              >
                {ALL_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state === 'All India' ? '📍 All India' : `📍 ${state}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Stream Select */}
            <div className="md:col-span-3 flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border-t md:border-t-0 md:border-l border-slate-200">
              <GraduationCap className="w-4 h-4 text-amber-600 shrink-0" />
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
              >
                {STREAMS.map((str) => (
                  <option key={str} value={str}>
                    {str}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter Toggle Mobile */}
            <div className="md:col-span-1 flex items-center">
              <button
                onClick={() => setShowFiltersMobile(!showFiltersMobile)}
                className="w-full h-full min-h-[42px] flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="md:hidden">Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Active Filters Pill Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filters:
            </span>

            {selectedState !== 'All India' && (
              <span className="inline-flex items-center gap-1.5 text-xs bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full border border-blue-200">
                State: {selectedState}
                <button onClick={() => setSelectedState('All India')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedStream !== 'All Streams' && (
              <span className="inline-flex items-center gap-1.5 text-xs bg-amber-50 text-amber-800 font-semibold px-2.5 py-1 rounded-full border border-amber-200">
                Stream: {selectedStream}
                <button onClick={() => setSelectedStream('All Streams')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedType !== 'All Types' && (
              <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-800 font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                Type: {selectedType}
                <button onClick={() => setSelectedType('All Types')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {query && (
              <span className="inline-flex items-center gap-1.5 text-xs bg-purple-50 text-purple-700 font-semibold px-2.5 py-1 rounded-full border border-purple-200">
                &ldquo;{query}&rdquo;
                <button onClick={() => setQuery('')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {(selectedState !== 'All India' || selectedStream !== 'All Streams' || selectedType !== 'All Types' || query) && (
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-red-600 hover:text-red-700 underline ml-2"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 ml-auto">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="nirf">NIRF Ranking (Top First)</option>
              <option value="rating">Rating &amp; Reviews</option>
              <option value="packageDesc">Highest CTC (LPA)</option>
              <option value="feeAsc">Lowest Annual Fee</option>
            </select>
          </div>
        </div>

        {/* Grid of Colleges */}
        {filteredColleges.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto text-2xl font-bold">
              🔍
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Colleges Match Your Search</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We couldn&apos;t find institutions matching &ldquo;{query}&rdquo; in {selectedState}. Try searching for &ldquo;GIET Bhubaneswar&rdquo;, &ldquo;IIT&rdquo;, or change the state filter to &ldquo;All India&rdquo;.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CollegeCard({ college }: { college: College }) {
  const primaryCourse = college.courses[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row">
      {/* Left Media & Key Badges */}
      <div className="lg:w-72 shrink-0 relative bg-slate-100 min-h-[200px] lg:min-h-full flex flex-col justify-between p-4 overflow-hidden">
        {/* Cover background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${college.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-slate-900 shadow backdrop-blur-md">
            Est. {college.established}
          </span>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 shadow">
            NAAC {college.naacGrade}
          </span>
        </div>

        {/* Bottom Placement Highlights */}
        <div className="relative z-10 space-y-1 text-white">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" /> ₹{college.highestPackageLPA} LPA Highest CTC
          </div>
          <div className="text-[11px] text-slate-300 font-medium">
            ₹{college.medianPackageLPA} LPA Median Package
          </div>
        </div>
      </div>

      {/* Center Details */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div>
          {/* Top Title Bar */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                  {college.type}
                </span>
                {college.nirfRank && (
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200 flex items-center gap-1">
                    <Award className="w-3 h-3" /> NIRF Rank #{college.nirfRank}
                  </span>
                )}
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {college.city}, {college.state}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                <Link href={`/colleges/${college.id}`} className="hover:text-blue-600 transition">
                  {college.name}
                </Link>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">{college.affiliation}</p>
            </div>

            {/* Rating */}
            <div className="text-right">
              <div className="inline-flex items-center gap-1 bg-emerald-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
                ★ {college.rating.toFixed(1)}
              </div>
              <span className="block text-[10px] text-slate-400 mt-0.5">({college.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
            {college.description}
          </p>

          {/* Key Courses and Accreditations Tags */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-400">Programs:</span>
            {college.courses.slice(0, 3).map((c) => (
              <span
                key={c.name}
                className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
              >
                {c.degree} ({c.duration})
              </span>
            ))}
            {college.courses.length > 3 && (
              <span className="text-[11px] font-medium text-blue-600">+{college.courses.length - 3} more</span>
            )}
          </div>
        </div>

        {/* Recruiters strip */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span className="font-semibold text-slate-700">Top Recruiters:</span>
          {college.topRecruiters.slice(0, 5).map((recruiter) => (
            <span key={recruiter} className="bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded text-[11px]">
              {recruiter}
            </span>
          ))}
        </div>
      </div>

      {/* Right Pricing & Direct Apply CTA */}
      <div className="lg:w-64 shrink-0 bg-slate-50/80 border-t lg:border-t-0 lg:border-l border-slate-200 p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Annual Tuition (Est.)
          </div>
          <div className="text-2xl font-extrabold text-slate-900">
            ₹{primaryCourse ? (primaryCourse.annualFee).toLocaleString('en-IN') : 'N/A'}
            <span className="text-xs font-normal text-slate-500"> / year</span>
          </div>

          <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded border border-emerald-200/60">
            <CheckCircle2 className="w-3.5 h-3.5" /> Admissions Open 2026-27
          </div>

          <div className="text-[10px] text-slate-500">
            Application Deadline: <strong className="text-slate-700">{college.applicationDeadline}</strong>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <Link
            href={`/apply/${college.id}`}
            className="w-full flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md transition"
          >
            <span>Apply Now (₹{college.applicationFee})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={`/colleges/${college.id}`}
            className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold py-2 px-4 rounded-xl transition"
          >
            <span>View Full Details</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CollegesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="flex items-center gap-3 text-slate-600 font-medium">
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            Loading Colleges Registry...
          </div>
        </div>
      }
    >
      <CollegesSearchContent />
    </Suspense>
  );
}
