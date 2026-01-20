export default function DonationCategories() {
  return (
    <section id="donation" className="w-full py-20 sm:py-24 bg-[#f8f2ed]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-lg text-[#F4A261] font-medium mb-2">
          Donation
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#111d51]">
          Your Donation Brings Smiles And <br className="hidden sm:block" />
          Transforms Lives
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { icon: "🎓", title: "Education", text: "Empowering future leaders through access to quality education." },
            { icon: "🏥", title: "Healthcare", text: "Providing essential healthcare services to underserved communities." },
            { icon: "🌱", title: "Environmental", text: "Promoting sustainability and protecting natural resources." },
            { icon: "🍲", title: "Hunger", text: "Fighting hunger by providing nutritious food to those in need." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#F4A261] shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#f8f2ed] rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.text}</p>
              <a className="text-sm text-black font-medium cursor-pointer">
                See All Campaigns →
              </a>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#2E8B57] text-white px-8 py-3 rounded-full font-medium hover:bg-red-900 transition">
          View All Campaigns →
        </button>
      </div>
    </section>
  );
}
