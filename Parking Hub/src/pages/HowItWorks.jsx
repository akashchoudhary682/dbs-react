import {
  Search,
  MapPin,
  CalendarDays,
  CarFront,
  CreditCard,
  CheckCircle2,
  Navigation,
  ShieldCheck,
  Clock3,
  ArrowRight,
  Smartphone,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Search Parking",
      description:
        "Enter your destination and discover available parking spaces around you.",
      icon: Search,
      color: "blue",
    },
    {
      number: "02",
      title: "Choose Your Spot",
      description:
        "Compare location, distance, price and available spaces before booking.",
      icon: MapPin,
      color: "cyan",
    },
    {
      number: "03",
      title: "Select Date & Time",
      description:
        "Choose when you want to park and how long you need the parking space.",
      icon: CalendarDays,
      color: "purple",
    },
    {
      number: "04",
      title: "Confirm Booking",
      description:
        "Enter your vehicle details and confirm your parking reservation.",
      icon: CheckCircle2,
      color: "green",
    },
    {
      number: "05",
      title: "Reach & Park",
      description:
        "Navigate to your reserved location and park without searching around.",
      icon: CarFront,
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#030b17] px-6 pb-24 pt-28 text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none fixed left-[-200px] top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none fixed right-[-200px] top-80 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />


      {/* ================= HERO ================= */}

      <section className="relative mx-auto max-w-7xl py-14 text-center">

        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold tracking-[2px] text-blue-400">

          <Navigation size={15} />

          HOW IT WORKS

        </span>


        <h1 className="animate-fade-up mt-6 text-5xl font-extrabold leading-tight md:text-6xl">

          Parking Made

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Simple
          </span>

        </h1>


        <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">

          From finding a parking spot to reaching your destination,
          Parking Hub makes the entire process simple and stress-free.

        </p>

      </section>


      {/* ================= MAIN PROCESS ================= */}

      <section className="relative mx-auto max-w-6xl py-12">

        <div className="relative">

          {/* CONNECTING LINE */}

          <div className="absolute left-7 top-8 hidden h-[calc(100%-70px)] w-px bg-gradient-to-b from-blue-500/60 via-cyan-500/40 to-transparent md:block" />


          <div className="space-y-8">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.number}
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                  className="animate-fade-up group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#071321] p-6 transition duration-500 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-900/20 md:flex-row md:items-center md:p-8"
                >

                  {/* NUMBER */}

                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">

                    <Icon
                      size={28}
                      className="text-blue-400 transition duration-500 group-hover:scale-110"
                    />

                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold">
                      {step.number}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">
                      {step.title}
                    </h2>

                    <p className="mt-2 max-w-2xl leading-7 text-gray-400">
                      {step.description}
                    </p>

                  </div>


                  {/* STEP INDICATOR */}

                  <div className="hidden items-center gap-2 text-sm text-gray-600 md:flex">

                    Step

                    <span className="font-bold text-blue-400">
                      {step.number}
                    </span>

                  </div>

                </div>

              );
            })}

          </div>

        </div>

      </section>


      {/* ================= VISUAL SECTION ================= */}

      <section className="mx-auto max-w-7xl py-20">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="relative">

            <div className="absolute -inset-8 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="group relative overflow-hidden rounded-[35px] border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1545179605-129e26c4b4b0?auto=format&fit=crop&w=1200&q=85"
                alt="Parking location"
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030b17] via-transparent to-transparent" />


              {/* FLOATING CARD */}

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#071321]/90 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">

                    <CheckCircle2
                      size={25}
                      className="text-green-400"
                    />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Your parking
                    </p>

                    <p className="font-bold text-green-400">
                      Reserved Successfully
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* CONTENT */}

          <div>

            <span className="text-sm font-semibold tracking-[3px] text-cyan-400">
              SIMPLE EXPERIENCE
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">

              Everything You Need,

              <span className="block text-blue-500">
                In One Place.
              </span>

            </h2>

            <p className="mt-5 leading-7 text-gray-400">

              Parking Hub is designed to remove unnecessary steps from
              your parking journey. Search, compare, book and park.

            </p>


            {/* FEATURES */}

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">

                  <Smartphone
                    size={21}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h3 className="font-semibold">
                    Works On Every Device
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Find and reserve parking from your phone, tablet or
                    desktop.
                  </p>

                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10">

                  <ShieldCheck
                    size={21}
                    className="text-green-400"
                  />

                </div>

                <div>

                  <h3 className="font-semibold">
                    Secure Experience
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Designed with secure and reliable parking discovery
                    in mind.
                  </p>

                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10">

                  <Clock3
                    size={21}
                    className="text-purple-400"
                  />

                </div>

                <div>

                  <h3 className="font-semibold">
                    Save Valuable Time
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Reserve before you arrive instead of searching after
                    reaching your destination.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PAYMENT ================= */}

      <section className="mx-auto max-w-7xl">

        <div className="rounded-3xl border border-white/10 bg-[#071321] p-8 md:p-12">

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>

              <span className="text-sm font-semibold tracking-[3px] text-blue-400">
                BOOK WITH CONFIDENCE
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                A Smooth Booking Experience
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Select your preferred location, choose your time and
                confirm your parking spot in just a few simple steps.
              </p>

              <div className="mt-7 space-y-3">

                <div className="flex items-center gap-3 text-sm text-gray-400">

                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />

                  Transparent parking prices

                </div>

                <div className="flex items-center gap-3 text-sm text-gray-400">

                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />

                  Easy booking process

                </div>

                <div className="flex items-center gap-3 text-sm text-gray-400">

                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />

                  Convenient parking locations

                </div>

              </div>

            </div>


            <div className="flex justify-center">

              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/5">

                <div className="absolute h-40 w-40 animate-pulse rounded-full border border-cyan-500/20" />

                <div className="absolute h-28 w-28 rounded-full bg-blue-500/10" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 shadow-xl shadow-blue-600/30">

                  <CarFront size={35} />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="mx-auto mt-20 max-w-5xl">

        <div className="relative overflow-hidden rounded-[35px] border border-blue-500/20 bg-gradient-to-r from-blue-600/15 to-cyan-500/10 p-10 text-center md:p-14">

          <div className="absolute left-1/2 top-[-100px] h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Ready To Find Your Spot?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Search available parking and reserve your space before you
              arrive.
            </p>

            <NavLink
              to="/find-parking"
              className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Find Parking
              <ArrowRight size={19} />
            </NavLink>

          </div>

        </div>

      </section>

    </div>
  );
}

export default HowItWorks;