import {
  CarFront,
  ShieldCheck,
  Clock3,
  MapPin,
  Users,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  ParkingSquare,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function AboutUs() {
  const features = [
    {
      icon: MapPin,
      title: "Easy To Find",
      text: "Discover nearby parking spaces quickly without wasting your time.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      text: "Find verified parking locations designed for a safer parking experience.",
    },
    {
      icon: Clock3,
      title: "Save Your Time",
      text: "Reserve your parking spot before reaching your destination.",
    },
    {
      icon: CarFront,
      title: "Driver Friendly",
      text: "A simple and convenient experience for everyday drivers.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#030b17] px-6 pb-24 pt-28 text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none fixed left-[-200px] top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none fixed right-[-200px] top-80 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />


      {/* ================= HERO ================= */}

      <section className="relative mx-auto max-w-7xl py-14">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold tracking-[2px] text-blue-400">

              <ParkingSquare size={15} />

              ABOUT PARKING HUB

            </span>


            <h1 className="animate-fade-up mt-6 text-5xl font-extrabold leading-tight md:text-6xl">

              Parking Should Be

              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Simple.
              </span>

            </h1>


            <p className="animate-fade-up mt-6 max-w-xl text-lg leading-8 text-gray-400">

              Parking Hub is designed to make finding and reserving parking
              easier, faster and more convenient for everyday drivers.

            </p>


            <div className="animate-fade-up mt-8 flex flex-wrap gap-4">

              <NavLink
                to="/find-parking"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30"
              >
                Find Parking
                <ArrowRight size={18} />
              </NavLink>


              <NavLink
                to="/contact"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-gray-300 transition hover:border-blue-500/40 hover:text-white"
              >
                Contact Us
              </NavLink>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="relative">

            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="group relative overflow-hidden rounded-[40px] border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1400&q=90"
                alt="Parking Hub"
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030b17] via-transparent to-transparent" />


              {/* FLOATING CARD */}

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#071321]/90 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">

                    <CarFront
                      size={25}
                      className="text-blue-400"
                    />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Our Goal
                    </p>

                    <p className="font-bold">
                      Making Parking Stress-Free

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="mx-auto mt-16 max-w-7xl">

        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#071321] sm:grid-cols-2 lg:grid-cols-4">

          <div className="border-b border-white/10 p-8 text-center transition hover:bg-white/5 lg:border-b-0 lg:border-r">

            <Users
              size={25}
              className="mx-auto text-blue-400"
            />

            <h2 className="mt-4 text-3xl font-extrabold">
              50K+
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Happy Drivers
            </p>

          </div>


          <div className="border-b border-white/10 p-8 text-center transition hover:bg-white/5 sm:border-r lg:border-b-0">

            <MapPin
              size={25}
              className="mx-auto text-cyan-400"
            />

            <h2 className="mt-4 text-3xl font-extrabold">
              1,200+
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Parking Locations
            </p>

          </div>


          <div className="border-b border-white/10 p-8 text-center transition hover:bg-white/5 lg:border-b-0 lg:border-r">

            <CarFront
              size={25}
              className="mx-auto text-purple-400"
            />

            <h2 className="mt-4 text-3xl font-extrabold">
              1M+
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Successful Bookings
            </p>

          </div>


          <div className="p-8 text-center transition hover:bg-white/5">

            <ShieldCheck
              size={25}
              className="mx-auto text-green-400"
            />

            <h2 className="mt-4 text-3xl font-extrabold">
              4.8★
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              User Rating
            </p>

          </div>

        </div>

      </section>


      {/* ================= OUR STORY ================= */}

      <section className="mx-auto max-w-7xl py-24">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="relative order-2 lg:order-1">

            <div className="absolute -inset-8 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="group relative overflow-hidden rounded-[35px] border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
                alt="Parking technology"
                className="h-[480px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030b17] via-transparent to-transparent" />

            </div>

          </div>


          {/* TEXT */}

          <div className="order-1 lg:order-2">

            <span className="text-sm font-semibold tracking-[3px] text-cyan-400">
              OUR STORY
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Solving A Simple
              <span className="block text-blue-500">
                Everyday Problem
              </span>
            </h2>


            <p className="mt-6 leading-8 text-gray-400">

              Finding a parking spot can often be frustrating. Drivers
              spend valuable time searching for available spaces, comparing
              locations and worrying about whether a spot will be available
              when they arrive.

            </p>


            <p className="mt-4 leading-8 text-gray-400">

              Parking Hub is built around a simple idea: make parking easier
              to discover and simpler to reserve.

            </p>


            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={20}
                  className="text-green-400"
                />

                <span className="text-gray-300">
                  Find nearby parking
                </span>

              </div>


              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={20}
                  className="text-green-400"
                />

                <span className="text-gray-300">
                  Compare parking options
                </span>

              </div>


              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={20}
                  className="text-green-400"
                />

                <span className="text-gray-300">
                  Reserve before arrival
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MISSION & VISION ================= */}

      <section className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2">

          {/* MISSION */}

          <div className="group rounded-3xl border border-white/10 bg-[#071321] p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-900/20 md:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">

              <Target
                size={28}
                className="text-blue-400"
              />

            </div>

            <h2 className="mt-7 text-2xl font-bold">
              Our Mission
            </h2>

            <p className="mt-4 leading-7 text-gray-400">

              Our mission is to simplify parking discovery by connecting
              drivers with convenient parking spaces and providing a
              smooth digital booking experience.

            </p>

          </div>


          {/* VISION */}

          <div className="group rounded-3xl border border-white/10 bg-[#071321] p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-900/20 md:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

              <Eye
                size={28}
                className="text-cyan-400"
              />

            </div>

            <h2 className="mt-7 text-2xl font-bold">
              Our Vision
            </h2>

            <p className="mt-4 leading-7 text-gray-400">

              We envision a future where finding parking is no longer a
              stressful part of travelling, shopping or reaching work.

            </p>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="mx-auto max-w-7xl py-24">

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold tracking-[3px] text-blue-400">
            WHAT WE OFFER
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Built Around
            <span className="text-blue-500"> You</span>
          </h2>

          <p className="mt-5 text-gray-400">
            Everything in Parking Hub is designed to make your parking
            journey easier.
          </p>

        </div>


        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                className="animate-fade-up group rounded-3xl border border-white/10 bg-[#071321] p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-500/30"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 transition duration-500 group-hover:scale-110">

                  <Icon
                    size={27}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {feature.text}
                </p>

              </div>

            );

          })}

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="mx-auto max-w-6xl">

        <div className="relative overflow-hidden rounded-[35px] border border-blue-500/20 bg-gradient-to-r from-blue-600/15 to-cyan-500/10 p-10 text-center md:p-14">

          <div className="absolute left-1/2 top-[-100px] h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Let's Make Parking Easier
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Stop wasting time searching for parking. Find your spot
              and park smarter with Parking Hub.
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

export default AboutUs;