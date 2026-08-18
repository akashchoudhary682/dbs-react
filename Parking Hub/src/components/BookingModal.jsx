import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  CalendarDays,
  Clock3,
  Car,
  MapPin,
  CheckCircle2,
  LogIn,
  Hash,
} from "lucide-react";

function BookingModal({ parking, onClose }) {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleBooking = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert("Please login first to book a parking spot.");
      onClose();
      navigate("/login");
      return;
    }

    if (!date || !time || !vehicleNumber.trim()) {
      alert("Please fill all booking details.");
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem("parkingUser") || "null"
    );

    if (!savedUser) {
      alert("User information not found. Please login again.");
      onClose();
      navigate("/login");
      return;
    }

    const newBookingId =
      "PH-" +
      Date.now().toString().slice(-8);

    const booking = {
      id: Date.now(),
      bookingId: newBookingId,

      parkingName: parking.name,
      location: parking.location,
      price: parking.price,

      date,
      time,

      vehicleNumber:
        vehicleNumber.trim().toUpperCase(),

      userName: savedUser.name || "User",
      userEmail: savedUser.email || "",

      status: "Confirmed",

      bookedAt: new Date().toLocaleString(),
    };

    const existingBookings = JSON.parse(
      localStorage.getItem("parkingBookings") || "[]"
    );

    localStorage.setItem(
      "parkingBookings",
      JSON.stringify([
        ...existingBookings,
        booking,
      ])
    );

    setBookingId(newBookingId);
    setBookingSuccess(true);

    // FindParking ko update karne ke liye
    window.dispatchEvent(
      new Event("parkingBookingUpdated")
    );
  };

  if (bookingSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-3xl border border-green-500/20 bg-[#071321] p-8 text-center shadow-2xl">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2
              size={45}
              className="text-green-400"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-white">
            Booking Confirmed!
          </h2>

          <p className="mt-3 text-gray-400">
            Your parking spot at{" "}
            <span className="font-semibold text-white">
              {parking.name}
            </span>{" "}
            has been successfully booked.
          </p>

          {/* Booking ID */}
          <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Hash size={16} />
              Booking ID
            </div>

            <p className="mt-2 text-xl font-bold tracking-wider text-blue-400">
              {bookingId}
            </p>
          </div>

          <div className="mt-5 text-left text-sm text-gray-400">
            <p>
              <span className="text-gray-500">
                Date:
              </span>{" "}
              {date}
            </p>

            <p className="mt-2">
              <span className="text-gray-500">
                Time:
              </span>{" "}
              {time}
            </p>

            <p className="mt-2">
              <span className="text-gray-500">
                Vehicle:
              </span>{" "}
              {vehicleNumber.toUpperCase()}
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-7 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-500"
          >
            Done
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm">

      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/10 bg-[#071321] p-6 shadow-2xl md:p-8">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold text-white">
          Book Your Parking
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Complete your details to reserve your parking spot.
        </p>

        {/* Parking Details */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">

          <h3 className="text-lg font-bold text-white">
            {parking.name}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
            <MapPin
              size={16}
              className="text-blue-400"
            />

            {parking.location}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-400">
              Parking Price
            </span>

            <span className="text-xl font-bold text-green-400">
              ₹{parking.price}/hour
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-sm text-gray-400">
              Available Slots
            </span>

            <span className="font-semibold text-green-400">
              {parking.slots} slots
            </span>
          </div>

        </div>

        {!isLoggedIn && (
          <div className="mt-5 flex items-center gap-3 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-300">
            <LogIn size={20} />
            Please login before confirming your booking.
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleBooking}
          className="mt-6 space-y-5"
        >

          {/* Date */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
              <CalendarDays
                size={17}
                className="text-blue-400"
              />
              Booking Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              min={
                new Date()
                  .toISOString()
                  .split("T")[0]
              }
              required
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
              <Clock3
                size={17}
                className="text-cyan-400"
              />
              Arrival Time
            </label>

            <input
              type="time"
              value={time}
              onChange={(e) =>
                setTime(e.target.value)
              }
              required
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Vehicle */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
              <Car
                size={17}
                className="text-purple-400"
              />
              Vehicle Number
            </label>

            <input
              type="text"
              value={vehicleNumber}
              onChange={(e) =>
                setVehicleNumber(
                  e.target.value.toUpperCase()
                )
              }
              placeholder="Example: UP12 AB 1234"
              required
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 uppercase text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
            />
          </div>

          {/* Confirm */}
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookingModal;