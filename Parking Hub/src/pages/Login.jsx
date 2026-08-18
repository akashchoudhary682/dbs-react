import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Car,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    // Saved user get karo
    const savedUser = localStorage.getItem("parkingUser");

    // Agar account nahi hai
    if (!savedUser) {
      setError(
        "Account not found. Please create an account first."
      );
      return;
    }

    const user = JSON.parse(savedUser);

    // Email aur password check
    if (
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
    ) {
      // Login save karo
      localStorage.setItem("isLoggedIn", "true");

      // Navbar ko turant update karne ke liye
      window.dispatchEvent(new Event("storage"));

      alert(`Welcome, ${user.name}!`);

      // Find Parking page par bhejo
      navigate("/find-parking");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050b18] px-4 py-12 text-white">

      <div className="w-full max-w-md">

        {/* ================= LOGO ================= */}

        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <Car size={32} />
          </div>

          <h1 className="text-3xl font-extrabold">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-400">
            Login to your Parking Hub account
          </p>

        </div>


        {/* ================= LOGIN BOX ================= */}

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-8">

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* ================= EMAIL ================= */}

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />

              </div>

            </div>


            {/* ================= PASSWORD ================= */}

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3.5 pl-11 pr-12 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >

                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}

                </button>

              </div>

            </div>


            {/* ================= ERROR ================= */}

            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}


            {/* ================= FORGOT PASSWORD ================= */}

            <div className="flex justify-end">

              <button
                type="button"
                onClick={() =>
                  alert(
                    "Forgot Password feature will be added later."
                  )
                }
                className="text-sm font-medium text-blue-500 hover:text-blue-400"
              >
                Forgot Password?
              </button>

            </div>


            {/* ================= LOGIN BUTTON ================= */}

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Login
            </button>

          </form>


          {/* ================= SIGNUP ================= */}

          <div className="mt-7 text-center text-sm text-gray-400">

            Don't have an account?{" "}

            <NavLink
              to="/signup"
              className="font-semibold text-blue-500 hover:text-blue-400"
            >
              Create Account
            </NavLink>

          </div>

        </div>


        {/* ================= BACK HOME ================= */}

        <div className="mt-6 text-center">

          <NavLink
            to="/"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            ← Back to Home
          </NavLink>

        </div>

      </div>

    </div>
  );
}

export default Login;