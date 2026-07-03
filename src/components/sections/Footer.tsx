import Image from "next/image";
import { Phone, Mail, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50/50 px-6 pt-10 pb-6 sm:px-12">
      <div className="mx-auto max-w-xl flex flex-col items-center gap-6 text-center">
        
        {/* Logo */}
        <Image
          src="/cfi-logo.png"
          alt="Code for India Foundation"
          width={320}
          height={128}
          className="h-16 w-auto sm:h-20"
          priority
        />

        {/* Accreditation Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100/50 border border-violet-200 px-3.5 py-1.5 text-xs font-bold text-violet-700">
          <Award className="h-4 w-4 text-violet-600" />
          Govt. of Telangana Accredited Institution
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500 font-semibold">
          <a href="tel:+919030391959" className="flex items-center gap-1.5 hover:text-violet-600 transition-colors">
            <Phone className="h-4 w-4 text-violet-400" />
            +91 9030 391 959
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="mailto:team@codeforindia.com" className="flex items-center gap-1.5 hover:text-violet-600 transition-colors">
            <Mail className="h-4 w-4 text-violet-400" />
            team@codeforindia.com
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Code For India Foundation. All rights reserved.
        </p>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-400 max-w-md mx-auto leading-relaxed border-t border-gray-200/50 pt-4 w-full">
          Disclaimer: Code For India is an educational platform providing career mentorship and foundation skills training. Free webinar attendance is subject to availability and limited seat scheduling.
        </p>

      </div>
    </footer>
  );
}
