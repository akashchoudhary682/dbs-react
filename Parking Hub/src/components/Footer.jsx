import { Link } from "react-router-dom";
import {
  CarFront,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#020814] text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>

          <Link to="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
              <CarFront size={23} />
            </div>

            <div>
              <h2 className="text-xl font-extrabold">
                Parking<span className="text-blue-500">Hub</span>
              </h2>

              <p className="text-[9px] tracking-[3px] text-gray-500">
                SMART PARKING
              </p>
            </div>

          </Link>

          <p className="mt-6 max-w-xs text-sm leading-7 text-gray-500">
            Find, reserve and park with confidence. Parking Hub makes
            your parking experience simple and stress-free.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div>

          <h3 className="font-semibold">
            Quick Links
          </h3>

          <div className="mt-5 flex flex-col gap-3">

            <Link
              to="/"
              className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              to="/find-parking"
              className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-blue-400"
            >
              Find Parking
            </Link>

            <Link
              to="/how-it-works"
              className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-blue-400"
            >
              How It Works
            </Link>

            <Link
              to="/about"
              className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-blue-400"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-blue-400"
            >
              Contact
            </Link>

          </div>

        </div>


        {/* SERVICES */}
        <div>

          <h3 className="font-semibold">
            Parking Hub
          </h3>

          <div className="mt-5 flex flex-col gap-3">

            <span className="text-sm text-gray-500">
              Easy Parking Search
            </span>

            <span className="text-sm text-gray-500">
              Online Reservation
            </span>

            <span className="text-sm text-gray-500">
              Secure Parking
            </span>

            <span className="text-sm text-gray-500">
              Transparent Pricing
            </span>

            <span className="text-sm text-gray-500">
              24/7 Availability
            </span>

          </div>

        </div>


        {/* CONTACT */}
        <div>

          <h3 className="font-semibold">
            Contact Us
          </h3>

          <div className="mt-5 space-y-4">

            <div className="flex gap-3">

              <Mail
                size={18}
                className="mt-1 shrink-0 text-blue-400"
              />

              <span className="text-sm text-gray-500">
                support@parkinghub.com
              </span>

            </div>


            <div className="flex gap-3">

              <Phone
                size={18}
                className="mt-1 shrink-0 text-blue-400"
              />

              <span className="text-sm text-gray-500">
                +91 98765 43210
              </span>

            </div>


            <div className="flex gap-3">

              <MapPin
                size={18}
                className="mt-1 shrink-0 text-blue-400"
              />

              <span className="text-sm leading-6 text-gray-500">
                New Delhi,
                <br />
                India
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-600 md:flex-row">

          <p>
            © 2026 Parking Hub. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <span className="cursor-pointer transition hover:text-gray-300">
              Privacy Policy
            </span>

            <span className="cursor-pointer transition hover:text-gray-300">
              Terms
            </span>

            <button
              onClick={goTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 transition hover:border-blue-500 hover:text-blue-400"
            >
              <ArrowUp size={17} />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;