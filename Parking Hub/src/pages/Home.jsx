import {
  ArrowRight,
  Search,
  MapPin,
  CalendarCheck,
  CarFront,
  ShieldCheck,
  Clock3,
  Smartphone,
  Star,
  Navigation,
  CheckCircle2,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Home() {
  const parkingSpots = [
    {
      name: "Central City Parking",
      location: "Main Road, City Center",
      price: 40,
      rating: 4.8,
      distance: "0.8 km",
      image:
        "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Metro Mall Parking",
      location: "Metro Station Road",
      price: 60,
      rating: 4.9,
      distance: "1.2 km",
      image:
        "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Premium Mall Parking",
      location: "Shopping District",
      price: 80,
      rating: 4.7,
      distance: "2.1 km",
      image:
        "https://images.unsplash.com/photo-1625047509248-ec889cbff17a?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#030b17] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden px-6 pt-28">

        {/* Glow */}

        <div className="pointer-events-none absolute left-[-200px] top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="pointer-events-none absolute right-[-150px] top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />


        {/* Decorative lines */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />


        <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-14 lg:grid-cols-2">


          {/* LEFT */}

          <div className="relative z-10 py-14">

            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              Smart Parking Made Simple

            </div>


            <h1 className="animate-fade-up mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">

              Find Parking.

              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">

                Park Smarter.

              </span>

            </h1>


            <p className="animate-fade-up mt-7 max-w-xl text-lg leading-8 text-gray-400">

              Discover nearby parking spaces, compare prices and reserve
              your spot before you arrive.

            </p>


            {/* SEARCH BOX */}

            <div className="animate-fade-up mt-9 max-w-2xl rounded-2xl border border-white/10 bg-[#071321]/90 p-2 shadow-2xl shadow-blue-900/20 backdrop-blur-xl">

              <div className="flex flex-col gap-2 sm:flex-row">

                <div className="flex flex-1 items-center gap-3 px-4 py-3">

                  <MapPin
                    size={20}
                    className="text-blue-400"
                  />

                  <input
                    type="text"
                    placeholder="Where do you want to park?"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                  />

                </div>


                <NavLink
                  to="/find-parking"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30"
                >

                  <Search size={18} />

                  Find Parking

                </NavLink>

              </div>

            </div>


            {/* TRUST */}

            <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-500">

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={17}
                  className="text-green-400"
                />

                Verified Parking

              </div>

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={17}
                  className="text-blue-400"
                />

                Secure Booking

              </div>

              <div className="flex items-center gap-2">

                <Clock3
                  size={17}
                  className="text-cyan-400"
                />

                Save Your Time

              </div>

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative hidden lg:block">

            <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="animate-float relative">

              <div className="overflow-hidden rounded-[40px] border border-white/10 shadow-2xl shadow-black/40">

                <img
                  src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1400&q=90"
                  alt="Smart Parking"
                  className="h-[600px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030b17] via-transparent to-transparent" />

              </div>


              {/* FLOATING CARD */}

              <div className="absolute -left-10 bottom-12 w-64 rounded-2xl border border-white/10 bg-[#071321]/90 p-5 shadow-2xl backdrop-blur-xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">

                    <CarFront
                      size={24}
                      className="text-green-400"
                    />

                  </div>

                  <div>

                    <p className="text-xs text-gray-500">
                      Parking Status
                    </p>

                    <p className="mt-1 font-bold text-green-400">
                      24 Spaces Available
                    </p>

                  </div>

                </div>

              </div>


              {/* RATING CARD */}

              <div className="absolute -right-8 top-16 rounded-2xl border border-white/10 bg-[#071321]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">

                <div className="flex items-center gap-2">

                  <Star
                    size={18}
                    fill="currentColor"
                    className="text-yellow-400"
                  />

                  <span className="font-bold">
                    4.9
                  </span>

                </div>

                <p className="mt-1 text-xs text-gray-500">
                  Trusted by drivers
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="relative px-6">

        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#071321] sm:grid-cols-2 lg:grid-cols-4">

          <div className="border-b border-white/10 p-8 text-center transition hover:bg-white/5 lg:border-b-0 lg:border-r">

            <h2 className="text-4xl font-extrabold text-blue-400">
              1,200+
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Parking Locations
            </p>

          </div>


          <div className="border-b border-white/10 p-8 text-center transition hover:bg-white/5 sm:border-r lg:border-b-0">

            <h2 className="text-4xl font-extrabold text-cyan-400">
              50K+
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Happy Drivers
            </p>

          </div>


          <div className="border-b border-white/10 p-8 text-center transition hover:bg-white/5 lg:border-b-0 lg:border-r">

            <h2 className="text-4xl font-extrabold text-purple-400">
              1M+
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Bookings
            </p>

          </div>


          <div className="p-8 text-center transition hover:bg-white/5">

            <h2 className="text-4xl font-extrabold text-green-400">
              4.8★
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Average Rating
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          POPULAR PARKING
      ====================================================== */}

      <section className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <span className="text-sm font-semibold tracking-[3px] text-blue-400">
              EXPLORE
            </span>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Popular Parking
            </h2>

            <p className="mt-4 max-w-xl text-gray-400">
              Discover highly-rated parking locations near you.
            </p>

          </div>


          <NavLink
            to="/find-parking"
            className="flex w-fit items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-cyan-400"
          >

            View All

            <ArrowRight size={18} />

          </NavLink>

        </div>


        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {parkingSpots.map((spot, index) => (

            <div
              key={spot.name}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
              className="animate-fade-up group overflow-hidden rounded-3xl border border-white/10 bg-[#071321] transition duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-900/20"
            >

              <div className="relative h-56 overflow-hidden">

                <img
                  src={spot.image}
                  alt={spot.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-transparent" />


                <div className="absolute left-4 top-4 rounded-full bg-green-500/90 px-3 py-1.5 text-xs font-semibold text-white">
                  Available
                </div>


                <div className="absolute bottom-4 left-4 rounded-xl bg-black/70 px-4 py-2 backdrop-blur-md">

                  <span className="font-bold">
                    ₹{spot.price}
                  </span>

                  <span className="text-xs text-gray-300">
                    /hour
                  </span>

                </div>

              </div>


              <div className="p-6">

                <div className="flex justify-between gap-3">

                  <div>

                    <h3 className="text-xl font-bold">
                      {spot.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">

                      <MapPin size={15} />

                      {spot.location}

                    </div>

                  </div>


                  <div className="flex items-center gap-1 text-sm text-yellow-400">

                    <Star
                      size={15}
                      fill="currentColor"
                    />

                    {spot.rating}

                  </div>

                </div>


                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

                  <div className="flex items-center gap-2 text-sm text-gray-500">

                    <Navigation size={15} />

                    {spot.distance}

                  </div>


                  <NavLink
                    to="/find-parking"
                    className="flex items-center gap-1 text-sm font-semibold text-blue-400 transition hover:text-cyan-400"
                  >

                    Book

                    <ArrowRight size={15} />

                  </NavLink>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="relative bg-[#050f1c] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-semibold tracking-[3px] text-cyan-400">
              HOW IT WORKS
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Park In
              <span className="text-blue-500"> 3 Simple Steps</span>
            </h2>

            <p className="mt-5 text-gray-400">
              Finding your perfect parking spot has never been easier.
            </p>

          </div>


          <div className="relative mt-16 grid gap-8 md:grid-cols-3">

            {/* LINE */}

            <div className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-cyan-500/0 md:block" />


            {/* STEP 1 */}

            <div className="group relative text-center">

              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-500/20 bg-blue-500/10 transition duration-500 group-hover:scale-110 group-hover:rotate-3">

                <Search
                  size={34}
                  className="text-blue-400"
                />

                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">
                  01
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold">
                Search
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                Enter your location and discover nearby parking spaces.
              </p>

            </div>


            {/* STEP 2 */}

            <div className="group relative text-center">

              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10 transition duration-500 group-hover:scale-110 group-hover:rotate-3">

                <CalendarCheck
                  size={34}
                  className="text-cyan-400"
                />

                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-600 text-xs font-bold">
                  02
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold">
                Reserve
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                Choose your preferred parking spot and reserve it instantly.
              </p>

            </div>


            {/* STEP 3 */}

            <div className="group relative text-center">

              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-purple-500/20 bg-purple-500/10 transition duration-500 group-hover:scale-110 group-hover:rotate-3">

                <CarFront
                  size={34}
                  className="text-purple-400"
                />

                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 text-xs font-bold">
                  03
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold">
                Park
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                Arrive at your location and enjoy a stress-free parking
                experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <span className="text-sm font-semibold tracking-[3px] text-blue-400">
              WHY PARKING HUB
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Everything You Need
              <span className="block text-blue-500">
                For Better Parking
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Parking Hub combines convenience, security and technology to
              create a smoother parking experience.
            </p>


            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-[#071321] p-5 transition hover:-translate-y-1 hover:border-blue-500/30">

                <ShieldCheck
                  size={25}
                  className="text-blue-400"
                />

                <h3 className="mt-4 font-bold">
                  Secure Parking
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Verified and secure parking locations.
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-[#071321] p-5 transition hover:-translate-y-1 hover:border-cyan-500/30">

                <Clock3
                  size={25}
                  className="text-cyan-400"
                />

                <h3 className="mt-4 font-bold">
                  Save Time
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Find parking before reaching your destination.
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-[#071321] p-5 transition hover:-translate-y-1 hover:border-purple-500/30">

                <Navigation
                  size={25}
                  className="text-purple-400"
                />

                <h3 className="mt-4 font-bold">
                  Easy Location
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Quickly discover parking around you.
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-[#071321] p-5 transition hover:-translate-y-1 hover:border-green-500/30">

                <Smartphone
                  size={25}
                  className="text-green-400"
                />

                <h3 className="mt-4 font-bold">
                  Easy Booking
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Simple booking experience from any device.
                </p>

              </div>

            </div>

          </div>


          {/* IMAGE */}

          <div className="relative">

            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="group relative overflow-hidden rounded-[35px] border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85"
                alt="Parking technology"
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030b17] via-transparent to-transparent" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 pb-20">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[35px] border border-blue-500/20 bg-gradient-to-r from-blue-600/15 to-cyan-500/10 p-10 text-center md:p-16">

          <div className="absolute left-1/2 top-[-100px] h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">

            <h2 className="text-4xl font-extrabold md:text-5xl">
              Ready To Park Smarter?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-gray-400">
              Find your perfect parking spot today and leave the parking
              stress behind.
            </p>

            <NavLink
              to="/find-parking"
              className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
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

export default Home;