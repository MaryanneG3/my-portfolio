"use client";

import Sidebar from "@/components/sections/Sidebar";
import { contactContent } from "@/lib/contactDetails";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const { title, content } = contactContent;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending your message...");
    setIsSuccess(false);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message: msg }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully! I'll get back to you soon.");
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        setStatus(`Error: ${data.error || "Failed to send message"}`);
        setIsSuccess(false);
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full w-full">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        src="/videos/light-bg-enhanced.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center h-full w-full bg-gradient-to-b from-purple-50/70 to-purple-500/30 lg:from-purple-50/50 lg:to-purple-500/20">
        <Sidebar />

        <motion.div
          className="flex flex-col justify-center items-center h-[90%] lg:h-full w-full lg:w-[80%] px-4 py-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start w-full max-h-[85vh] lg:max-h-[92vh] overflow-y-auto pr-4 md:pr-8 lg:pr-9 custom-scrollbar">
            <div className="flex flex-col justify-start items-center w-full h-full py-2 gap-5 lg:gap-10 lg:py-6 pl-2 pr-4 md:px-8">
              <div className="flex flex-col items-start justify-around w-full gap-10 pr-4 md:pr-8 lg:pr-9">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-purple-950">
                  {title}
                </h1>
                {content?.map((item, index) =>
                  item.label === "Send me an email" ? (
                    <div
                      key={index}
                      id="email-address"
                      className="flex flex-col justify-start items-start gap-4 pl-2 md:pl-8 lg:pl-10 h-full w-full"
                    >
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-950">
                        {item.label}
                      </h2>

                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3 w-full max-w-lg"
                      >
                        {/* Name Input */}
                        <div className="w-full">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-purple-700 mb-1"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-purple-300 bg-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Enter your name"
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* Email Input */}
                        <div className="w-full">
                          <label
                            htmlFor="userEmail"
                            className="block text-sm font-medium text-purple-700 mb-1"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-purple-300 bg-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Enter your email address"
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* Message Input */}
                        <div className="w-full">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-purple-700 mb-1"
                          >
                            Your Message
                          </label>
                          <textarea
                            name="message"
                            id="message"
                            rows={6}
                            required
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            className="w-full p-2 border border-purple-300 bg-white rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Write your message here..."
                            disabled={isSubmitting}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`self-start px-4 py-2 rounded-md transition-all duration-200 ${
                            isSubmitting
                              ? "bg-purple-400 text-white cursor-not-allowed"
                              : "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800"
                          }`}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {/* Status Message */}
                        {status && (
                          <div
                            className={`mt-2 p-3 rounded-md ${
                              isSuccess
                                ? "bg-green-50 text-green-800"
                                : "bg-red-50 text-red-800"
                            }`}
                          >
                            {status}
                          </div>
                        )}
                      </form>
                    </div>
                  ) : (
                    <div
                      key={index}
                      id={item.label.toLowerCase().replace(/\s+/g, "-")}
                      className="flex flex-col justify-start items-start gap-2 pl-2 md:pl-8 lg:pl-10 h-full w-full"
                    >
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-950">
                        {item.label}
                      </h2>
                      {item.label === "GitHub" || item.label === "LinkedIn" ? (
                        <Link
                          href={item.value}
                          className="text-black underline hover:cursor-pointer hover:font-semibold text-sm md:text-md lg:text-lg"
                          target="_blank"
                        >
                          {item.value}
                        </Link>
                      ) : item.label === "Phone number" ? (
                        <a
                          href={`tel:${item.value}`}
                          className="text-black hover:cursor-pointer hover:font-semibold text-sm md:text-md lg:text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm md:text-md lg:text-lg hover:cursor-pointer hover:font-semibold">
                          {item.value}
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
