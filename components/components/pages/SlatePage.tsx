import React from "react";
import SlateDropdown from "../components/SlateDropdown";
import BlendedPollChart from "../components/BlendedPollChart";
import StatBlocks from "../components/StatBlocks";
import DonorHeatMap from "../components/DonorHeatMap";
import RSSFeed from "../components/RSSFeed";
import CTAButtons from "../components/CTAButtons";

const SlatePage = () => {
  return (
    <main className="max-w-md mx-auto p-4 space-y-6">
      <h1 className="text-xl font-bold text-center">🗳 Marcus 2026 Reform Slate</h1>

      <SlateDropdown />
      <BlendedPollChart />
      <StatBlocks />
      <DonorHeatMap />
      <RSSFeed />
      <CTAButtons />
    </main>
  );
};

export default SlatePage;
