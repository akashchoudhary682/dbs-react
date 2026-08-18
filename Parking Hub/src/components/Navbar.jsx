import { NavLink, useNavigate } from "react-router-dom";
import {
  CarFront,
  Menu,
  X,
  LogIn,
  UserPlus,
  LogOut,
  User,
  ClipboardList,
} from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [savedUser, setSavedUser] = useState(
    JSON.parse(localStorage.getItem("parkingUser") || "null")
  );

  // ================= CHECK LOGIN =================

  useEffect(() => {
    const checkLogin = () => {
      const loggedIn =
        localStorage.getItem("isLoggedIn") === "true";

      const user = JSON.parse(
        localStorage.getItem("parkingUser") || "null"
      );

      setIsLoggedIn(loggedIn);
      setSavedUser(user);
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  // ================= NAV LINKS =================

  const links = [
    { name: "Home", path: "/" },
    { name: "Find Parking", path: "/find-parking" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);

    setMenuOpen(false);

    navigate("/");
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030b17]/95 shadow-lg shadow-black/20 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* ================= LOGO ================= */}

        <NavLink
          to="/"
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500">
            <CarFront
              size={24}
              className="text-white"
            />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-white">
              <span className="text-white">
                Parking
              </span>

              <span className="ml-1 text-cyan-400">
                Hub
              </span>
            </h1>

            <p className="text-[9px] font-medium tracking-[3px] text-gray-400">
              SMART PARKING
            </p>
          </div>
        </NavLink>


        {/* ================= DESKTOP MENU ================= */}

        <div className="hidden items-center gap-1 md:flex">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative rounded-lg px-4 py-2.5 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  )}
                </>
              )}
            </NavLink>
          ))}

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="hidden items-center gap-2 md:flex">

          {!isLoggedIn ? (
            <>
              {/* LOGIN */}

              <NavLink
                to="/login"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-gray-300 transition duration-300 hover:border-blue-500/40 hover:bg-white/5 hover:text-white"
              >
                <LogIn size={17} />

                Login
              </NavLink>


              {/* SIGN UP */}

              <NavLink
                to="/signup"
                className="flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-400 transition duration-300 hover:bg-blue-500/20 hover:text-blue-300"
              >
                <UserPlus size={17} />

                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              {/* MY BOOKINGS */}

              <NavLink
                to="/my-bookings"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                <ClipboardList size={17} />

                My Bookings
              </NavLink>


              {/* USER NAME */}

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
                <User
                  size={17}
                  className="text-cyan-400"
                />

                <span className="max-w-[120px] truncate text-sm font-semibold text-white">
                  {savedUser?.name || "User"}
                </span>
              </div>


              {/* LOGOUT */}

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition duration-300 hover:bg-red-500/20"
              >
                <LogOut size={17} />

                Logout
              </button>
            </>
          )}


          {/* FIND PARKING */}

          <NavLink
            to="/find-parking"
            className="ml-1 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Find Parking
          </NavLink>

        </div>


        {/* ================= MOBILE BUTTON ================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#030b17] px-6 pb-6 md:hidden">

          <div className="flex flex-col gap-2 pt-4">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}


            {/* ================= MOBILE LOGGED OUT ================= */}

            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-gray-300 hover:bg-white/5"
                >
                  <LogIn size={17} />

                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-400"
                >
                  <UserPlus size={17} />

                  Sign Up
                </NavLink>
              </>
            ) : (
              <>
                {/* MOBILE MY BOOKINGS */}

                <NavLink
                  to="/my-bookings"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-300"
                >
                  <ClipboardList size={17} />

                  My Bookings
                </NavLink>


                {/* MOBILE USER */}

                <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
                  <User
                    size={17}
                    className="text-cyan-400"
                  />

                  {savedUser?.name || "User"}
                </div>


                {/* MOBILE LOGOUT */}

                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400"
                >
                  <LogOut size={17} />

                  Logout
                </button>
              </>
            )}


            {/* MOBILE FIND PARKING */}

            <NavLink
              to="/find-parking"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Find Parking
            </NavLink>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;