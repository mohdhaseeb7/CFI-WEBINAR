import Image from "next/image";
import { Phone, Mail, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50/50 px-6 py-16 sm:px-12 lg:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10">
        
        {/* Logos row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <Image
            src="/cfi-logo.png"
            alt="Code for India Foundation"
            width={200}
            height={80}
            className="h-10 w-auto"
          />
          <span className="text-2xl text-gray-300">·</span>
          <Image
            src="/codein-logo.svg"
            alt="code.in"
            width={160}
            height={48}
            className="h-9 w-auto"
          />
        </div>

        {/* Accreditation Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100/50 border border-violet-200 px-4 py-1.5 text-xs font-bold text-violet-700">
          <Award className="h-4 w-4 text-violet-600" />
          Govt. of Telangana Accredited Institution
        </div>

        {/* Contact and Legal Info */}
        <div className="flex flex-col items-center gap-4 text-center border-t border-gray-200/50 pt-8 w-full">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-semibold">
            <a href="tel:+919030391959" className="flex items-center gap-1.5 hover:text-violet-600 transition-colors">
              <Phone className="h-4 w-4 text-violet-400" />
              +91 9030 391 959
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a href="mailto:team@codeforindia.com" className="flex items-center gap-1.5 hover:text-violet-600 transition-colors">
              <Mail className="h-4 w-4 text-violet-400" />
              team@codeforindia.com
            </a>
          </div>
          
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Code For India Foundation. All rights reserved.
            </p>
            <p className="text-[10px] text-gray-400 max-w-md mx-auto leading-relaxed">
              Disclaimer: Code For India is an educational platform providing career mentorship and foundation skills training. Free webinar attendance is subject to availability and limited seat scheduling.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
