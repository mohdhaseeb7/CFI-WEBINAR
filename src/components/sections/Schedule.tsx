import { Calendar, Video } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function Schedule() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-16 px-6 sm:px-12 lg:px-20 border-y border-slate-100">
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Webinar Details
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 font-medium">
          Lock the date in your calendar. The live coding demonstration will start promptly.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Card 1: When */}
          <div className="flex flex-col items-center justify-center p-8 rounded-3xl border border-violet-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Date & Time</h3>
            <p className="mt-2 text-sm font-semibold text-gray-600">{WEBINAR_CONFIG.details.date}</p>
            <p className="mt-1 text-xs font-semibold text-violet-600">{WEBINAR_CONFIG.details.time}</p>
          </div>

          {/* Card 2: Where */}
          <div className="flex flex-col items-center justify-center p-8 rounded-3xl border border-violet-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 mb-4">
              <Video className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Location</h3>
            <p className="mt-2 text-sm font-semibold text-gray-600">{WEBINAR_CONFIG.details.location}</p>
            <p className="mt-1 text-xs font-semibold text-violet-600">{WEBINAR_CONFIG.details.locationDetail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
