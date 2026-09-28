import React from 'react';
import Link from 'next/link';
import { GraduationCap, Phone, Mail, MapPin, ExternalLink, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Edu<span className="text-blue-400">India</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            India&apos;s unified higher education admission gateway. Discover accredited colleges, explore specialized courses, compare transparent fees, and submit official applications online.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Aligned with UGC &amp; AICTE Guidelines</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Discover</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/colleges" className="hover:text-white transition">All Colleges</Link></li>
            <li><Link href="/courses" className="hover:text-white transition">Degrees &amp; Streams</Link></li>
            <li><Link href="/rankings" className="hover:text-white transition">NIRF Rankings</Link></li>
            <li><Link href="/scholarships" className="hover:text-white transition">Govt Scholarships</Link></li>
            <li><Link href="/entrance-exams" className="hover:text-white transition">Entrance Exams</Link></li>
          </ul>
        </div>

        {/* Institutional & Admin */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Portals</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/college-portal/register" className="hover:text-white transition">College Registration</Link></li>
            <li><Link href="/college-portal/login" className="hover:text-white transition">Institution Login</Link></li>
            <li><Link href="/admin/login" className="hover:text-white transition">Admin Panel</Link></li>
            <li><Link href="/verification-guidelines" className="hover:text-white transition">Verification Process</Link></li>
            <li><Link href="/api-docs" className="hover:text-white transition flex items-center gap-1">Swagger API <ExternalLink className="w-3 h-3" /></Link></li>
          </ul>
        </div>

        {/* Contact & Helpline */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support &amp; Helpline</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>1800-XXX-EDU (Toll Free)</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>support@eduindia.gov.in</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>New Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2026 EduIndia. All rights reserved. Open Education Infrastructure Initiative.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
          <Link href="/security" className="hover:text-slate-400">Security &amp; Compliance</Link>
        </div>
      </div>
    </footer>
  );
};
