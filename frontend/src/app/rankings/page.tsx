'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, Trophy, MapPin, TrendingUp, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { COLLEGES_DATA } from '@/lib/data/colleges';

export default function RankingsPage() {
  const [category, setCategory] = useState<'all' | 'Engineering' | 'Management' | 'Medical'>('all');

  const rankedColleges = [...COLLEGES_DATA].sort((a, b) => (a.nirfRank || 999) - (b.nirfRank || 999));

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="gradient-hero text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5" /> Ministry of Education (GoI) NIRF Rankings 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Official All-India College NIRF Rankings
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive national institutional ranking framework scores evaluated on Teaching, Learning, Research, and Placement outcomes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-slate-900">National Leaderboard</h2>
            <div className="text-xs text-slate-500">Updated for Academic Year 2026-2027</div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">NIRF Rank</th>
                  <th className="px-6 py-4">Institution Name</th>
                  <th className="px-6 py-4">State</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">NAAC Grade</th>
                  <th className="px-6 py-4">Highest CTC</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rankedColleges.map((college) => (
                  <tr key={college.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-800 font-extrabold text-xs border border-amber-200">
                        #{college.nirfRank || 'NA'}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      <Link href={`/colleges/${college.id}`} className="hover:text-blue-600 transition">
                        {college.name}
                      </Link>
                      <span className="block text-xs font-normal text-slate-400">{college.shortName}</span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">
                      {college.city}, {college.state}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded">
                        {college.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {college.naacGrade}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-emerald-600 text-xs">
                      ₹{college.highestPackageLPA} LPA
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/colleges/${college.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
