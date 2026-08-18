import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-[#050b18] px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold text-blue-500">CONTACT US</p>

          <h1 className="text-4xl font-extrabold md:text-5xl">
            Get In Touch With Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Have a question, suggestion, or need help with parking?
            Our team is here to help you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-500">
              <MapPin size={24} />
            </div>

            <h3 className="text-lg font-bold">Our Location</h3>

            <p className="mt-2 text-sm text-gray-400">
              Muzaffarnagar, Uttar Pradesh, India
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-500">
              <Mail size={24} />
            </div>

            <h3 className="text-lg font-bold">Email Us</h3>

            <p className="mt-2 text-sm text-gray-400">
              support@parkinghub.com
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-500">
              <Phone size={24} />
            </div>

            <h3 className="text-lg font-bold">Call Us</h3>

            <p className="mt-2 text-sm text-gray-400">
              +91 98765 43210
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid gap-8 rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-2 md:p-10">
          {/* Left Side */}
          <div>
            <p className="font-semibold text-blue-500">SEND MESSAGE</p>

            <h2 className="mt-3 text-3xl font-extrabold">
              We’d Love To Hear From You
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Whether you have a question about our parking services,
              bookings, or anything else, feel free to contact us.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-blue-500">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-400">
                    support@parkinghub.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-blue-500">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-gray-400">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-blue-500">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-gray-400">
                    Muzaffarnagar, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;