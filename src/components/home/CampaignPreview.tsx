import CampaignCard from "../../components/campaign/CampaignCard";

export default function CampaignPreview() {
  return (
    <section id="campaigns" className="w-full bg-gray-200 py-10 pl-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* increased left padding */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold">
            Campaigns
          </span>
          <h2 className="mt-0 text-3xl md:text-4xl font-bold max-w-2xl mx-auto text-[#111d51]">
            Together For Change: Join Our Mission <br />
            To Make A Difference
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3 mt-0">
          <CampaignCard
            category="Pure Water"
            title="Clean Water, Bright Futures"
            image="/images/blog1.jpg"
          />
          <CampaignCard
            category="Healthy Food"
            title="Nourishing Hope, One Meal At A Time"
            image="/images/blog2.jpg"
          />
          <CampaignCard
            category="Medical Care"
            title="Healing Lives, Spreading Smiles"
            image="/images/blog3.jpg"
          />
        </div>
      </div>
    </section>
  );
}
