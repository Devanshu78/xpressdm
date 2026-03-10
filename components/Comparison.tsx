import React from "react";
import Tags from "./Tags";

const Comparison = () => {
  const rows = [
    {
      label: "Pricing",
      free: "0",
      pro: "₹399 (Changes based on plan duration)",
    },
    { label: "Automations", free: "Unlimited", pro: "Unlimited" },
    { label: "DM Sent Limit", free: "1000", pro: "Unlimited" },
    { label: "Contacts Limit", free: "1000", pro: "Unlimited" },
    { label: "Ask to Follow", free: "✕", pro: "✓" },
    { label: "Lead Generation", free: "✕", pro: "✓" },
    { label: "Collect Email", free: "✕", pro: "✓" },
    { label: "Rerun", free: "✕", pro: "✓" },
    { label: "Support", free: "Email", pro: "Priority" },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-8 max-w-5xl mx-auto">
      <Tags tag="Feature Comparison" />

      {/* Table */}
      <div className="w-full m-8 rounded-2xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-3 text-sm text-gray-200">
          {/* Header */}
          <div className="p-4 border-b text-base border-r border-white/10 font-medium">
            Compare our plans
          </div>
          <div className="p-4 border-b text-base  border-white/10 font-semibold text-center">
            Free
          </div>
          <div className="p-4 bg-white/10 border-b border-white/10 font-semibold text-center backdrop-blur-md border-l border-r">
            <span className="bg-clip-text text-base text-transparent bg-linear-to-r from-[#ff5f2d] to-[#bf35ff]">
              Pro
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <React.Fragment key={row.label}>
              <div className="p-2 lg:p-4 text-xs md:text-base border-b border-r border-white/10 text-gray-300">
                {row.label}
              </div>

              <div className="p-2 lg:p-4 text-xs md:text-base border-b border-white/10 text-center text-gray-300">
                {row.free}
              </div>

              <div className="p-2 lg:p-4 text-xs md:text-base border-b bg-white/10  border-white/10 text-center backdrop-blur-md border-l border-r ">
                {row.pro}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparison;
