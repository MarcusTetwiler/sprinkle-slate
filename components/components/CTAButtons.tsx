import React from "react";

const CTAButtons = () => {
  return (
    <div className="flex justify-between gap-2 mt-4">
      <button className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold shadow hover:bg-red-700 transition">
        ❤️ Follow
      </button>
      <button className="flex-1 bg-white text-gray-800 border py-2 rounded-lg font-semibold shadow hover:bg-gray-50 transition">
        💸 Donate
      </button>
      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
        📣 Share
      </button>
    </div>
  );
};

export default CTAButtons;
