import React from "react";

const SlateDropdown = () => {
  return (
    <div className="p-4 border rounded-md bg-white shadow">
      <button className="w-full text-left font-semibold">View Slate ▼</button>
      {/* Dropdown content (mocked) */}
      <div className="mt-2 space-y-2">
        <div className="border-t pt-2">
          <p className="text-sm">• Jane Doe — TX-07</p>
          <p className="text-sm">• Andre Park — NV-03</p>
        </div>
      </div>
    </div>
  );
};

export default SlateDropdown;
