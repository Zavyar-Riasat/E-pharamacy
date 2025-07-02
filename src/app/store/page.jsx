'use client';
import { MedicineCarousel } from "@/components/MedicineCarousel";
import ArticlesSection from "@/components/article-section";
import FeaturesSection from "@/components/FeaturesSection";
import BrandMarqee from "@/components/BrandsMarquee";
import PrescriptionUpload from "@/components/perceptionUpload";
const page = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 items-start w-full max-w-7xl mx-auto px-2 py-6">
        <div className="lg:w-2/3 w-full flex-1">
          <MedicineCarousel />
        </div>
        <div className="flex-1 w-full lg:w-1/3">
          <PrescriptionUpload />
        </div>
      </div>
      <ArticlesSection />
      <FeaturesSection />
      <BrandMarqee />
    </>
  );
};

export default page;