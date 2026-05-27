"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import HeaderNav from "./HeaderNav";

export default function Contact() {
  const [type, setType] = useState("suggestion");

  const options = [
    { id: "complaint", label: "💢 Complaint" },
    { id: "suggestion", label: "💡 Suggestion" },
    { id: "bug", label: "🐞 Bug Report" },
    { id: "other", label: "🎮 Other" },
  ];

  return (
    <main className="min-h-screen   bg-[#0b0717] text-white relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-purple-600/30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-fuchsia-500/20 blur-3xl rounded-full" />

      <div className=" w-full gap-5 ">
       {  /*<HeaderNav />*/}
       
        {/*Card cover */}
        <div className=" h-full flex  items-center justify-center align-middle justify-items-center mt-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-xl"
          >
            {/* Title */}
            <h1 className="text-5xl font-black text-center mb-10 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Contact Us
            </h1>

            {/* Card */}
            <div className=" bg-white/5 border border-purple-500/20 backdrop-blur-xl rounded-4xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              {/* Name */}
              <div className="mb-6">
                <label className="text-sm text-gray-300 flex items-center gap-2 mb-3">
                  <MessageSquare size={16} /> Type of Message
                </label>

                <div className="flex flex-wrap gap-3">
                  {options.map((opt) => {
                    const active = type === opt.id;

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setType(opt.id)}
                        className={`
                     cursor-pointer
                     hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                px-4 py-2 rounded-full
                text-sm font-medium
                border transition-all duration-300
                ${
                  active
                    ? "bg-purple-500/20 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "bg-black/30 border-purple-500/10 text-gray-300 hover:border-purple-400/40"
                }
              `}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                  <Mail size={16} /> Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-purple-500/20 outline-none focus:border-purple-400"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                  <MessageSquare size={16} /> Message
                </label>
                <textarea
                  dir="en"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-purple-500/20 outline-none focus:border-purple-400 resize-none"
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 25px rgba(168,85,247,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className=" cursor-pointer w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-200 font-semibold"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
