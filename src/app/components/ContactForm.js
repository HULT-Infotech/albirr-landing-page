"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[700px] flex items-center py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/form_d.png"
          alt="Contact Background"
          fill
          sizes="100vw"
          quality={100}
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side: Form Card */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-10 rounded-[2rem] shadow-2xl">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div className="grid grid-cols-[70px_1fr] items-center gap-4">
                  <label className="text-white text-sm font-medium">Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="h-[46px] rounded-full border border-white/40 bg-white/5 px-5 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/70 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="grid grid-cols-[70px_1fr] items-center gap-4">
                  <label className="text-white text-sm font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your mail id"
                    className="h-[46px] rounded-full border border-white/40 bg-white/5 px-5 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/70 transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="grid grid-cols-[70px_1fr] items-center gap-4">
                  <label className="text-white text-sm font-medium">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-[46px] rounded-full border border-white/40 bg-white/5 px-5 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/70 transition-all"
                  />
                </div>

                {/* Place */}
                <div className="grid grid-cols-[70px_1fr] items-center gap-4">
                  <label className="text-white text-sm font-medium">
                    Place
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your place"
                    className="h-[46px] rounded-full border border-white/40 bg-white/5 px-5 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/70 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="grid grid-cols-[70px_1fr] items-start gap-4">
                  <label className="text-white text-sm font-medium pt-3">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Enter your message"
                    className="rounded-[1.7rem] border border-white/40 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none resize-none focus:border-white/70 transition-all"
                  ></textarea>
                </div>

                {/* Button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-[#1d2f66] hover:bg-[#162550] text-white text-xs font-semibold px-8 py-3 rounded-full transition-all shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="text-white lg:pl-16 order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-[64px] font-bold leading-[1.1] mb-8">
              We would love to{" "}
              <span className="text-[#FE9860]">hear from </span>
              <span className="text-[#FE9860]">you.</span>
            </h2>

            <p className="text-white/90 text-lg md:text-xl font-medium mb-12">
              For any queries, get in touch
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6">
              {/* Email Pill */}
              <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-white/60 w-max transition-all hover:bg-white/5">
                <Mail className="w-5 h-5 text-white" />

                <span className="text-base font-medium tracking-tight">
                  schoolalbirr@gmail.com
                </span>
              </div>

              {/* Phone Pill */}
              <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#e3a1bf] via-[#f48a6a] to-[#a137e3] w-max shadow-xl transition-all hover:scale-105 active:scale-95">
                <Phone className="w-5 h-5 text-white" />

                <span className="text-base font-medium tracking-tight">
                  +91 9061 559 827
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
