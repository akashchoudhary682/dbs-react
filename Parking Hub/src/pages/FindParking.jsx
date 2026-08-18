import { useEffect, useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Car,
  Clock3,
  IndianRupee,
  SlidersHorizontal,
  X,
} from "lucide-react";
import BookingModal from "../components/BookingModal";

function FindParking() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");
  const [selectedParking, setSelectedParking] = useState(null);
  const [, setRefresh] = useState(0);

  const parkingSpots = [
    {
      id: 1,
      name: "City Center Parking",
      location: "Main Market",
      price: 30,
      slots: 25,
      distance: "0.5 km",
      timing: "24 Hours",
    },
    {
      id: 2,
      name: "Mall Road Parking",
      location: "Mall Road",
      price: 40,
      slots: 18,
      distance: "1.2 km",
      timing: "6 AM - 11 PM",
    },
    {
      id: 3,
      name: "Railway Station Parking",
      location: "Railway Station",
      price: 25,
      slots: 35,
      distance: "1.8 km",
      timing: "24 Hours",
    },
    {
      id: 4,
      name: "Bus Stand Parking",
      location: "Bus Stand",
      price: 20,
      slots: 30,
      distance: "2.1 km",
      timing: "24 Hours",
    },
    {
      id: 5,
      name: "Hospital Parking",
      location: "Civil Lines",
      price: 35,
      slots: 20,
      distance: "2.5 km",
      timing: "24 Hours",
    },
    {
      id: 6,
      name: "Shopping Complex Parking",
      location: "Gandhi Nagar",
      price: 50,
      slots: 15,
      distance: "3.2 km",
      timing: "8 AM - 10 PM",
    },
  ];

  // ================= AVAILABLE SLOTS =================

  const getAvailableSlots = (spot) => {
    const bookings = JSON.parse(
      localStorage.getItem("parkingBookings") || "[]"
    );

    const activeBookings = bookings.filter(
      (booking) =>
        booking.parkingName === spot.name &&
        booking.status !== "Cancelled"
    );

    return Math.max(
      0,
      spot.slots - activeBookings.length
    );
  };

  // ================= UPDATE AFTER BOOKING =================

  useEffect(() => {
    const updatePage = () => {
      setRefresh((value) => value + 1);
    };

    window.addEventListener(
      "parkingBookingUpdated",
      updatePage
    );

    window.addEventListener(
      "storage",
      updatePage
    );

    return () => {
      window.removeEventListener(
        "parkingBookingUpdated",
        updatePage
      );

      window.removeEventListener(
        "storage",
        updatePage
      );
    };
  }, []);

  // ================= LOCATIONS =================

  const locations = [
    "All",
    ...new Set(
      parkingSpots.map(
        (spot) => spot.location
      )
    ),
  ];

  // ================= FILTER =================

  const filteredParking = useMemo(() => {
    let result = parkingSpots.filter((spot) => {
      const text = search.toLowerCase();

      const matchesSearch =
        spot.name
          .toLowerCase()
          .includes(text) ||
        spot.location
          .toLowerCase()
          .includes(text);

      const matchesLocation =
        locationFilter === "All" ||
        spot.location === locationFilter;

      let matchesPrice = true;

      if (priceFilter === "Under ₹30") {
        matchesPrice = spot.price < 30;
      }

      if (priceFilter === "₹30 - ₹40") {
        matchesPrice =
          spot.price >= 30 &&
          spot.price <= 40;
      }

      if (priceFilter === "Above ₹40") {
        matchesPrice = spot.price > 40;
      }

      return (
        matchesSearch &&
        matchesLocation &&
        matchesPrice
      );
    });

    if (sortBy === "Price: Low to High") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "Price: High to Low") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sortBy === "Distance") {
      result.sort(
        (a, b) =>
          parseFloat(a.distance) -
          parseFloat(b.distance)
      );
    }

    if (sortBy === "Available Slots") {
      result.sort(
        (a, b) =>
          getAvailableSlots(b) -
          getAvailableSlots(a)
      );
    }

    return result;
  }, [
    search,
    locationFilter,
    priceFilter,
    sortBy,
  ]);

  // ================= RESET =================

  const resetFilters = () => {
    setSearch("");
    setLocationFilter("All");
    setPriceFilter("All");
    setSortBy("Recommended");
  };

  return (
    <div className="min-h-screen bg-[#030b17] px-6 pb-24 pt-32 text-white">

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-10">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            <Car size={16} />
            Smart Parking
          </div>

          <h1 className="text-4xl font-extrabold md:text-5xl">
            Find Your{" "}
            <span className="text-blue-500">
              Parking Spot
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Search and find the best parking space
            near you. Book your spot in just a few
            clicks.
          </p>

        </div>


        {/* ================= SEARCH ================= */}

        <div className="rounded-3xl border border-white/10 bg-[#071321] p-5">

          <div className="relative">

            <Search
              size={21}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search parking by name or location..."
              className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-12 pr-4 text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
            />

          </div>

        </div>


        {/* ================= FILTERS ================= */}

        <div className="mt-6 rounded-3xl border border-white/10 bg-[#071321] p-5">

          <div className="mb-5 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <SlidersHorizontal
                size={19}
                className="text-blue-400"
              />

              <h2 className="font-semibold">
                Filters
              </h2>

            </div>

            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-white"
            >
              <X size={15} />
              Reset
            </button>

          </div>


          <div className="grid gap-4 md:grid-cols-3">

            {/* LOCATION */}

            <div>

              <label className="mb-2 block text-sm text-gray-500">
                Location
              </label>

              <select
                value={locationFilter}
                onChange={(e) =>
                  setLocationFilter(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
              >

                {locations.map((location) => (
                  <option
                    key={location}
                    value={location}
                    className="bg-[#071321]"
                  >
                    {location}
                  </option>
                ))}

              </select>

            </div>


            {/* PRICE */}

            <div>

              <label className="mb-2 block text-sm text-gray-500">
                Price
              </label>

              <select
                value={priceFilter}
                onChange={(e) =>
                  setPriceFilter(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
              >

                <option
                  value="All"
                  className="bg-[#071321]"
                >
                  All Prices
                </option>

                <option
                  value="Under ₹30"
                  className="bg-[#071321]"
                >
                  Under ₹30
                </option>

                <option
                  value="₹30 - ₹40"
                  className="bg-[#071321]"
                >
                  ₹30 - ₹40
                </option>

                <option
                  value="Above ₹40"
                  className="bg-[#071321]"
                >
                  Above ₹40
                </option>

              </select>

            </div>


            {/* SORT */}

            <div>

              <label className="mb-2 block text-sm text-gray-500">
                Sort By
              </label>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
              >

                <option
                  value="Recommended"
                  className="bg-[#071321]"
                >
                  Recommended
                </option>

                <option
                  value="Price: Low to High"
                  className="bg-[#071321]"
                >
                  Price: Low to High
                </option>

                <option
                  value="Price: High to Low"
                  className="bg-[#071321]"
                >
                  Price: High to Low
                </option>

                <option
                  value="Distance"
                  className="bg-[#071321]"
                >
                  Distance
                </option>

                <option
                  value="Available Slots"
                  className="bg-[#071321]"
                >
                  Available Slots
                </option>

              </select>

            </div>

          </div>

        </div>


        {/* ================= RESULT ================= */}

        <div className="mt-8">

          <h2 className="text-xl font-bold">
            Available Parking
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {filteredParking.length} parking
            {filteredParking.length === 1
              ? " spot"
              : " spots"}{" "}
            found
          </p>

        </div>


        {/* ================= CARDS ================= */}

        {filteredParking.length === 0 ? (

          <div className="mt-6 rounded-3xl border border-white/10 bg-[#071321] px-6 py-20 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">

              <Search
                size={34}
                className="text-blue-400"
              />

            </div>

            <h2 className="mt-6 text-2xl font-bold">
              No Parking Found
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-500">
              We couldn't find any parking spot
              matching your search.
            </p>

            <button
              onClick={resetFilters}
              className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Clear Filters
            </button>

          </div>

        ) : (

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredParking.map((spot) => {

              const availableSlots =
                getAvailableSlots(spot);

              const isFull =
                availableSlots === 0;

              return (

                <div
                  key={spot.id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#071321] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                >

                  {/* TOP */}

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">

                      <Car
                        size={24}
                        className="text-blue-400"
                      />

                    </div>

                    {isFull ? (

                      <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                        Full
                      </span>

                    ) : (

                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                        Available
                      </span>

                    )}

                  </div>


                  {/* NAME */}

                  <h3 className="mt-5 text-xl font-bold">
                    {spot.name}
                  </h3>


                  {/* LOCATION */}

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">

                    <MapPin
                      size={16}
                      className="text-blue-400"
                    />

                    {spot.location}

                  </div>


                  {/* PRICE + SLOTS */}

                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-black/20 p-3">

                      <div className="flex items-center gap-2 text-xs text-gray-500">

                        <IndianRupee
                          size={14}
                          className="text-green-400"
                        />

                        Price

                      </div>

                      <p className="mt-1 font-semibold">

                        ₹{spot.price}

                        <span className="text-xs font-normal text-gray-500">
                          /hour
                        </span>

                      </p>

                    </div>


                    <div className="rounded-xl bg-black/20 p-3">

                      <div className="flex items-center gap-2 text-xs text-gray-500">

                        <Car
                          size={14}
                          className="text-purple-400"
                        />

                        Slots

                      </div>

                      <p
                        className={`mt-1 font-semibold ${
                          isFull
                            ? "text-red-400"
                            : "text-green-400"
                        }`}
                      >
                        {availableSlots}
                      </p>

                    </div>

                  </div>


                  {/* DISTANCE */}

                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">

                    <MapPin size={15} />

                    {spot.distance} away

                  </div>


                  {/* TIMING */}

                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">

                    <Clock3 size={15} />

                    {spot.timing}

                  </div>


                  {/* BOOK */}

                  <button
                    disabled={isFull}
                    onClick={() => {
                      if (!isFull) {
                        setSelectedParking({
                          ...spot,
                          slots: availableSlots,
                        });
                      }
                    }}
                    className={`mt-5 w-full rounded-xl py-3.5 font-semibold transition ${
                      isFull
                        ? "cursor-not-allowed bg-gray-700 text-gray-500"
                        : "bg-blue-600 text-white hover:bg-blue-500"
                    }`}
                  >
                    {isFull
                      ? "Parking Full"
                      : "Book Now"}
                  </button>

                </div>

              );
            })}

          </div>

        )}

      </div>


      {/* ================= BOOKING MODAL ================= */}

      {selectedParking && (

        <BookingModal
          parking={selectedParking}
          onClose={() =>
            setSelectedParking(null)
          }
        />

      )}

    </div>
  );
}

export default FindParking;