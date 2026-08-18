import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  Car,
  MapPin,
  Trash2,
  ArrowLeft,
  ClipboardList,
  Hash,
  CheckCircle2,
  XCircle,
} from "lucide-react";

function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    loadBookings();

    const updateBookings = () => {
      loadBookings();
    };

    window.addEventListener(
      "parkingBookingUpdated",
      updateBookings
    );

    return () => {
      window.removeEventListener(
        "parkingBookingUpdated",
        updateBookings
      );
    };
  }, [navigate]);

  const loadBookings = () => {
    const savedUser = JSON.parse(
      localStorage.getItem("parkingUser") || "null"
    );

    const allBookings = JSON.parse(
      localStorage.getItem("parkingBookings") || "[]"
    );

    if (!savedUser) {
      setBookings([]);
      return;
    }

    // Sirf current user ki bookings
    const userBookings = allBookings.filter(
      (booking) =>
        booking.userEmail?.toLowerCase() ===
        savedUser.email?.toLowerCase()
    );

    // Latest booking first
    userBookings.sort(
      (a, b) => b.id - a.id
    );

    setBookings(userBookings);
  };

  const cancelBooking = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    const allBookings = JSON.parse(
      localStorage.getItem("parkingBookings") || "[]"
    );

    const updatedBookings = allBookings.map(
      (booking) => {
        if (booking.id === id) {
          return {
            ...booking,
            status: "Cancelled",
            cancelledAt:
              new Date().toLocaleString(),
          };
        }

        return booking;
      }
    );

    localStorage.setItem(
      "parkingBookings",
      JSON.stringify(updatedBookings)
    );

    loadBookings();

    window.dispatchEvent(
      new Event("parkingBookingUpdated")
    );
  };

  const confirmedCount = bookings.filter(
    (booking) => booking.status !== "Cancelled"
  ).length;

  const cancelledCount = bookings.filter(
    (booking) => booking.status === "Cancelled"
  ).length;

  return (
    <div className="min-h-screen bg-[#030b17] px-6 pb-24 pt-32 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">

          <NavLink
            to="/find-parking"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Find Parking
          </NavLink>

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15">
              <ClipboardList
                size={28}
                className="text-blue-400"
              />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold md:text-4xl">
                My Bookings
              </h1>

              <p className="mt-1 text-gray-400">
                Manage your parking reservations
              </p>
            </div>

          </div>
        </div>

        {/* Stats */}
        {bookings.length > 0 && (
          <div className="mb-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-green-500/10 bg-[#071321] p-5">
              <p className="text-sm text-gray-500">
                Confirmed Bookings
              </p>

              <p className="mt-2 text-3xl font-bold text-green-400">
                {confirmedCount}
              </p>
            </div>

            <div className="rounded-2xl border border-red-500/10 bg-[#071321] p-5">
              <p className="text-sm text-gray-500">
                Cancelled Bookings
              </p>

              <p className="mt-2 text-3xl font-bold text-red-400">
                {cancelledCount}
              </p>
            </div>

          </div>
        )}

        {/* No Bookings */}
        {bookings.length === 0 ? (

          <div className="rounded-3xl border border-white/10 bg-[#071321] px-6 py-20 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">
              <ClipboardList
                size={36}
                className="text-blue-400"
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              No Bookings Yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-500">
              You haven't booked any parking spot yet.
              Find a parking space and make your first booking.
            </p>

            <NavLink
              to="/find-parking"
              className="mx-auto mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500"
            >
              Find Parking
            </NavLink>

          </div>

        ) : (

          <div className="space-y-6">

            <div>
              <p className="text-gray-400">
                {bookings.length}{" "}
                {bookings.length === 1
                  ? "booking"
                  : "bookings"}{" "}
                found
              </p>
            </div>

            {/* Booking Cards */}
            {bookings.map((booking) => {

              const isCancelled =
                booking.status === "Cancelled";

              return (
                <div
                  key={booking.id}
                  className={`overflow-hidden rounded-3xl border bg-[#071321] transition ${
                    isCancelled
                      ? "border-red-500/20 opacity-80"
                      : "border-white/10 hover:border-blue-500/30"
                  }`}
                >

                  <div className="p-6 md:p-8">

                    {/* Top */}
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">

                      <div>

                        <div className="flex flex-wrap items-center gap-3">

                          <h2 className="text-xl font-bold">
                            {booking.parkingName}
                          </h2>

                          {isCancelled ? (
                            <span className="flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                              <XCircle size={14} />
                              Cancelled
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                              <CheckCircle2 size={14} />
                              Confirmed
                            </span>
                          )}

                        </div>

                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                          <MapPin
                            size={16}
                            className="text-blue-400"
                          />
                          {booking.location}
                        </div>

                      </div>

                      <div className="text-left md:text-right">

                        <p className="text-sm text-gray-500">
                          Price
                        </p>

                        <p className="text-2xl font-bold text-green-400">
                          ₹{booking.price}
                          <span className="text-sm font-normal text-gray-500">
                            /hour
                          </span>
                        </p>

                      </div>

                    </div>

                    {/* Booking ID */}
                    <div className="mt-6 flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-500/5 px-4 py-3">

                      <Hash
                        size={17}
                        className="text-blue-400"
                      />

                      <span className="text-sm text-gray-500">
                        Booking ID:
                      </span>

                      <span className="text-sm font-bold text-blue-400">
                        {booking.bookingId ||
                          `PH-${booking.id}`}
                      </span>

                    </div>

                    {/* Details */}
                    <div className="mt-5 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">

                      <div className="rounded-xl bg-black/20 p-4">

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <CalendarDays
                            size={17}
                            className="text-blue-400"
                          />
                          Date
                        </div>

                        <p className="mt-2 font-semibold">
                          {booking.date}
                        </p>

                      </div>

                      <div className="rounded-xl bg-black/20 p-4">

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock3
                            size={17}
                            className="text-cyan-400"
                          />
                          Time
                        </div>

                        <p className="mt-2 font-semibold">
                          {booking.time}
                        </p>

                      </div>

                      <div className="rounded-xl bg-black/20 p-4">

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Car
                            size={17}
                            className="text-purple-400"
                          />
                          Vehicle
                        </div>

                        <p className="mt-2 font-semibold uppercase">
                          {booking.vehicleNumber}
                        </p>

                      </div>

                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">

                      <div className="text-xs text-gray-600">

                        <p>
                          Booked on:{" "}
                          {booking.bookedAt}
                        </p>

                        {booking.cancelledAt && (
                          <p className="mt-1 text-red-500/60">
                            Cancelled on:{" "}
                            {booking.cancelledAt}
                          </p>
                        )}

                      </div>

                      {!isCancelled && (
                        <button
                          onClick={() =>
                            cancelBooking(
                              booking.id
                            )
                          }
                          className="flex items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/20"
                        >
                          <Trash2 size={17} />
                          Cancel Booking
                        </button>
                      )}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
}

export default MyBookings;