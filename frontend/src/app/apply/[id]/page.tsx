'use client';

import React, { useState, Suspense } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  Building2,
  User,
  BookOpen,
  FileCheck,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { COLLEGES_DATA } from '@/lib/data/colleges';

function ApplyContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const collegeId = params?.id as string;
  const initialCourse = searchParams.get('course') || '';

  const college = COLLEGES_DATA.find((c) => c.id === collegeId) || COLLEGES_DATA[0];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: 'Male',
    dob: '',
    category: 'General',
    state: college.state,
    selectedCourse: initialCourse || college.courses[0]?.name || '',
    tenthPercentage: '',
    twelfthPercentage: '',
    entranceExam: college.courses[0]?.entranceExam || 'JEE Main',
    entranceScore: '',
    agreeTerms: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [appNumber, setAppNumber] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submission simulation
      const randomAppNum = `EDU-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setAppNumber(randomAppNum);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 px-4">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
            ✓
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">Application Submitted Successfully!</h1>
            <p className="text-xs text-slate-500">
              Your application for admission to <strong className="text-slate-800">{college.name}</strong> has been registered.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">Application ID:</span>
              <strong className="font-mono text-blue-700 font-bold">{appNumber}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Applicant:</span>
              <strong className="text-slate-800">{formData.fullName || 'Student Applicant'}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Program:</span>
              <strong className="text-slate-800">{formData.selectedCourse}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Payment Status:</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                ₹{college.applicationFee} (Paid / Demo Verified)
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/colleges"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition"
            >
              Explore More Colleges
            </Link>
            <Link
              href="/"
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-6 py-3 rounded-xl transition"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Progress Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow">
              {step}/3
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                {step === 1 && 'Step 1: Personal Details'}
                {step === 2 && 'Step 2: Academic Qualifications'}
                {step === 3 && 'Step 3: Review & Payment'}
              </div>
              <div className="text-[11px] text-slate-500">Applying to {college.shortName}</div>
            </div>
          </div>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Fee: ₹{college.applicationFee}
          </span>
        </div>

        {/* Form Container */}
        <form onSubmit={handleNext} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Personal &amp; Contact Details</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name (As per 10th Certificate) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Select Program to Apply *</label>
                  <select
                    value={formData.selectedCourse}
                    onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-semibold bg-white cursor-pointer"
                  >
                    {college.courses.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} (₹{c.annualFee.toLocaleString('en-IN')}/yr)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Academic &amp; Entrance Scores</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">10th Board Percentage (%) *</label>
                  <input
                    type="number"
                    required
                    min="40"
                    max="100"
                    placeholder="e.g. 88.5"
                    value={formData.tenthPercentage}
                    onChange={(e) => setFormData({ ...formData, tenthPercentage: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">12th / Diploma Percentage (%) *</label>
                  <input
                    type="number"
                    required
                    min="40"
                    max="100"
                    placeholder="e.g. 85.0"
                    value={formData.twelfthPercentage}
                    onChange={(e) => setFormData({ ...formData, twelfthPercentage: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Entrance Examination</label>
                  <input
                    type="text"
                    value={formData.entranceExam}
                    onChange={(e) => setFormData({ ...formData, entranceExam: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Entrance Score / All India Rank</label>
                  <input
                    type="text"
                    placeholder="e.g. Rank 4250 / 92.4 %ile"
                    value={formData.entranceScore}
                    onChange={(e) => setFormData({ ...formData, entranceScore: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Review &amp; Pay Application Fee</h2>

              <div className="bg-slate-50 p-4 rounded-2xl space-y-2 text-xs border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Institution:</span>
                  <strong className="text-slate-800">{college.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Course:</span>
                  <strong className="text-slate-800">{formData.selectedCourse}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicant:</span>
                  <strong className="text-slate-800">{formData.fullName || 'Rahul Sharma'}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-800">Application Fee:</span>
                  <strong className="text-base font-bold text-blue-700">₹{college.applicationFee}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600 pt-2">
                <input
                  type="checkbox"
                  id="agree"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="rounded text-blue-600 cursor-pointer"
                />
                <label htmlFor="agree" className="cursor-pointer">
                  I certify all academic information provided is accurate according to my state board records.
                </label>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : (
              <Link
                href={`/colleges/${college.id}`}
                className="text-xs font-semibold text-slate-500 hover:underline"
              >
                Cancel
              </Link>
            )}

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition"
            >
              <span>{step === 3 ? `Pay ₹${college.applicationFee} & Submit` : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-xs text-slate-500">
          Loading application...
        </div>
      }
    >
      <ApplyContent />
    </Suspense>
  );
}
