import HeroSection from "../components/home/HeroSection";
import CampaignPreview from "../components/home/CampaignPreview";
import AboutPreview from "../components/home/AboutPreview";
import DonationCategories from "../components/home/DonationCategories";
import ImpactChart from "../components/home/ImpactChart";
import BlogPreview from "../components/home/BlogPreview";
import Volunteer from "../components/home/Volunteer";

export default function HomePage() {
  return (
    <body className="bg-white">
    
      <HeroSection />
      <CampaignPreview />
      <AboutPreview />
      <DonationCategories />
      <ImpactChart />
      <BlogPreview />
      <Volunteer />
    
    </body>
  );
}
