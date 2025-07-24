import React from "react";

const StatBlocks = () => {
  const stats = [
    { label: "Polymarket Odds", value: "72%", color: "text-green-600" },
    { label: "Cash Gap", value: "-$410K", color: "text-red-500" },
    { label: "Candidate Age", value: "38", color: "text-gray-800" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4 text-center bg-white shadow rounded-lg">
      {stats.map((stat, i) => (
        <div key={i}>
          <p className="text-xs uppercase text-gray-500">{stat.label}</p>
          <p className={`text-xl font-semibold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatBlocks;
