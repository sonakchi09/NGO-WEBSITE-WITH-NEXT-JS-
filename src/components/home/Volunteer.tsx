"use client";

export default function VolunteerCTA() {
  return (
    <section className="w-full relative h-[400px] sm:h-[500px] md:h-[600px]">
      {/* Image with haze overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/volunteer.png"
          alt="Volunteers"
          className="w-full h-full object-cover"
        />
        {/* Hazy overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Buttons centered on image */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 h-full">
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition">
          Join as a volunteer
        </button>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition">
          Donate
        </button>
      </div>
    </section>
  );
}
