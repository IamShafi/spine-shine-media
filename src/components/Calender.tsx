"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Globe, ArrowLeft } from "lucide-react";
// import { button } from '@/components/ui/button'

export function SchedulingCalendar() {
  const [step, setStep] = useState<"date" | "time" | "details">("date");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 14));
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTimezone, setSelectedTimezone] = useState(
    "GMT+6:00 Asia/Dhaka"
  );
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const isPastDate = (day: number) => {
    const checkDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  const handleDateSelect = (day: number) => {
    if (!isPastDate(day)) {
      setSelectedDate(day);
      setSelectedTime(null);
      setStep("time");
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
  };

  const handleBackStep = () => {
    if (step === "time") {
      setStep("date");
      setSelectedDate(null);
    } else if (step === "details") {
      setStep("time");
    }
  };

  const handleScheduleCall = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      const selectedDateObj = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        selectedDate
      );
      const formattedDate = selectedDateObj.toLocaleDateString("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const bookingData = {
        date: selectedDateObj,
        time: selectedTime,
        timezone: selectedTimezone,
        formattedDate,
        lead: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          additionalInfo: formData.additionalInfo,
        },
      };

      const response = await fetch("/api/schedule-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert(
          `Call scheduled for ${formattedDate} at ${selectedTime}! Confirmation email sent.`
        );
        setStep("date");
        setSelectedDate(null);
        setSelectedTime(null);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          additionalInfo: "",
        });
      } else {
        throw new Error("Failed to schedule call");
      }
    } catch (error) {
      console.error("[v0] Error scheduling call:", error);
      alert("Failed to schedule call. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const timeSlots = [
    "12:30 AM",
    "01:30 AM",
    "02:30 AM",
    "03:00 AM",
    "03:30 AM",
    "05:00 AM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "10:00 PM",
  ];

  const timezones = [
    "GMT+6:00 Asia/Dhaka",
    "GMT-5:00 America/New_York",
    "GMT+0:00 Europe/London",
    "GMT+5:30 Asia/Kolkata",
    "GMT+8:00 Asia/Singapore",
  ];

  return (
    <section className="calenderContainer relative overflow-hidden px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        {step === "date" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-sm">
                <div
                  className="border-2 border-border rounded-lg p-6 backdrop-blur"
                  style={{
                    backgroundColor: "#FFD70021",
                    width: "516px",
                    height: "731px",
                  }}
                >
                  {/* header */}
                  <div className="bg-transparent flex items-center justify-between mb-6">
                    <div className="bg-transparent text-center flex-1">
                      <h3 className="text-xl font-bold text-white">
                        {currentDate.toLocaleString("default", {
                          month: "long",
                        })}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {currentDate.getFullYear()}
                      </p>
                    </div>
                    <button
                      onClick={handlePrevMonth}
                      className="p-1 hover:bg-yellow-500/20 rounded transition-colors"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-1 hover:bg-yellow-500/20 rounded transition-colors"
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-semibold text-gray-300"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* days */}
                  <div className="bg-[#FFD70021] grid grid-cols-7 gap-2 mb-6">
                    {days.map((day, idx) => {
                      const isDisabled = day === null || isPastDate(day);
                      return (
                        <button
                          key={idx}
                          onClick={() => day && handleDateSelect(day)}
                          className={`
                            aspect-square rounded-full flex items-center justify-center text-sm font-medium
                            transition-all duration-200
                            ${
                              isDisabled
                                ? "text-gray-600 cursor-not-allowed"
                                : day === selectedDate
                                ? "text-white font-bold"
                                : "text-gray-300 hover:bg-yellow-500/10 cursor-pointer"
                            }
                          `}
                          style={
                            day === selectedDate
                              ? { backgroundColor: "#589C5F" }
                              : {}
                          }
                          disabled={isDisabled}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* <div className="bg-transparent text-center text-sm text-gray-400 pt-4 border-t border-yellow-500/20">
                    <p>Select a future date to continue</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "time" && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleBackStep}
              className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl p-8">
              <h2 className="text-white text-3xl font-bold text-center mb-2">
                {selectedDate !== null &&
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    selectedDate
                  ).toLocaleDateString("default", { weekday: "long" })}
              </h2>
              <p className="text-purple-200 text-center mb-8">
                {selectedDate !== null &&
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    selectedDate
                  ).toLocaleDateString("default", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
              </p>

              <div className="mb-8">
                <label className="block text-white font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Time zone
                </label>
                <select
                  value={selectedTimezone}
                  onChange={(e) => setSelectedTimezone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-purple-700 text-white border border-purple-500/50 focus:border-purple-400 focus:outline-none"
                >
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
              </div>

              <h3 className="text-white text-xl font-bold text-center mb-2">
                Choose Time Slot
              </h3>
              <p className="text-purple-200 text-center mb-6">
                Duration : 10 Mins
              </p>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`
                      w-full py-4 px-6 rounded-lg border-2 font-semibold text-lg transition-all duration-200
                      ${
                        selectedTime === time
                          ? "bg-purple-700 border-white text-white"
                          : "bg-purple-600 border-purple-500 text-white hover:border-purple-400"
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleBackStep}
              className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl p-8">
              <h2 className="text-white text-3xl font-bold mb-2">
                INFLOW Partnership Discovery - 1
              </h2>

              <div className="bg-purple-700 rounded-xl p-6 mb-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs">
                    ⏱
                  </div>
                  <span className="text-white font-semibold">10 Mins</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs">
                    📅
                  </div>
                  <span className="text-white font-semibold">
                    {selectedTime} -{" "}
                    {new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      selectedDate
                    ).toLocaleDateString("default", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs">
                    🌍
                  </div>
                  <span className="text-white font-semibold">
                    {selectedTimezone}
                  </span>
                </div>
              </div>

              <form onSubmit={handleScheduleCall} className="space-y-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-6">
                    Enter Details
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-purple-700 text-white border border-purple-500/50 focus:border-purple-400 focus:outline-none"
                        placeholder="Shirajus"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-purple-700 text-white border border-purple-500/50 focus:border-purple-400 focus:outline-none"
                        placeholder="Shafi"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-purple-700 text-white border border-purple-500/50 focus:border-purple-400 focus:outline-none"
                        placeholder="01969-484203"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-purple-700 text-white border border-purple-500/50 focus:border-purple-400 focus:outline-none"
                        placeholder="salekin68@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Additional Information
                    </label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          additionalInfo: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-purple-700 text-white border border-purple-500/50 focus:border-purple-400 focus:outline-none resize-none"
                      rows={4}
                      placeholder="Is there anything you would like us to know before your appointment?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 rounded-lg transition-all duration-200"
                >
                  {isLoading ? "Scheduling..." : "Schedule Meeting"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
