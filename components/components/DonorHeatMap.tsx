import React from "react";

const DonorHeatMap = () => {
  const mockDonors = [
    { city: "San Francisco", top: "40%", left: "10%" },
    { city: "New York", top: "30%", left: "85%" },
    { city: "Chicago", top: "35%", left: "60%" },
    { city: "Austin", top: "55%", left: "45%" },
  ];

  return (
    <div className="relative w-full h-64 bg-gray-100 rounded-lg shadow overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Blank_US_Map.svg"
        alt="USA Map"
        className="w-full h-full object-cover"
      />
      {mockDonors.map((donor, i) => (
        <div
          key={i}
          className="absolute bg-red-600 rounded-full w-3 h-3 animate-pulse"
          style={{ top: donor.top, left: donor.left }}
          title={donor.city}
        ></div>
      ))}
    </div>
  );
};

export default DonorHeatMap;
