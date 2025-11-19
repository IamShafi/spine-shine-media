"use client";

export default function ScrollButton() {
  const handleScroll = () => {
    const section = document.getElementById("calendar-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="cursor-pointer w-[278px] h-[96px] bg-[linear-gradient(135.37deg,rgba(255,215,0,0.27)_0%,rgba(255,215,0,0.04)_100%)] border-b-[3px] border-border-bottom px-[25px] py-[22px] rounded-full font-poppins text-[20px] text-[#FFD700] font-600 z-10"
    >
      Apply To Work With us{" "}
      <span className="text-[15px] text-[#FFFFFFAB] bg-transparent">
        To See If We Can Help
      </span>
    </button>
  );
}
