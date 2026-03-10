import React from "react";
import Tags from "@/components/Tags";
import PriceCard from "@/components/PriceCard";
import Comparison from "@/components/Comparison";

const Pricing = () => {
  return (
    <div className="mt-14">
      {/* Hero Section */}
      <section className="flex flex-col items-center space-y-6">
        <Tags tag="Pricing" />
        <h1 className="text-5xl md:text-6xl font-light text-center text-neutral-100">
          Simple and <br /> transparent{" "}
          <span className="bg-linear-to-r from-[#ff5f2d] to-[#bf35ff] bg-clip-text text-transparent">
            Pricing.
          </span>{" "}
        </h1>
        <p className="text-sm md:text-base text-neutral-200/50">
          Simple plans, upfront costs, & zero surprises.
          <br />
          Pricing made easy & completely transparent.
        </p>
      </section>

      {/* Time Period Section */}
      <div
        className="hidden
       lg:block mt-8"
      >
        <TimePeriod />
      </div>

      {/* Pricing Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        <PriceCard data={freeplan} suggestion={false} />
        <PriceCard data={proPlan} suggestion={true} />
        <PriceCard data={enterprisePlan} suggestion={false} />
      </div>

      {/* Comparison Section */}
      <Comparison />
    </div>
  );
};

export default Pricing;

export const TimePeriod = () => {
  return (
    <div className="flex justify-center text-white">
      <section className="text-xs lg:text-sm w-fit bg-white/10 backdrop-blur-md rounded-3xl p-1 lg:p-2">
        <ul className="flex items-center justify-between gap-2 lg:gap-8">
          <li className="bg-linear-to-r from-[#ff5f2d] to-[#bf35ff] px-2 py-1 lg:px-4 lg:py-2 rounded-2xl">
            Monthly
          </li>
          <li className="px-2 py-1 lg:px-4 lg:py-2">Quarterly</li>
          <li className="px-2 py-1 lg:px-4 lg:py-2">Annually</li>
        </ul>
      </section>
    </div>
  );
};

const freeplan = {
  title: "Free",
  description: "Good for exploring automation",
  price: 0,
  button: "Get Started",
  features: [
    { name: "Unlimited Automations", filled: true },
    { name: "1000 DM", filled: true },
    { name: "1000 Contact", filled: true },
    { name: "Ask to follow", filled: false },
    { name: "Lead Generation", filled: false },
    { name: "Smart Follow-ups - Coming Soon", filled: false },
    { name: "Al Reply - Coming Soon", filled: false },
  ],
};

const proPlan = {
  title: "Pro",
  description: "Best for growing outreach and engagement.",
  price: 499,
  button: "Go Pro",
  features: [
    { name: "Unlimited Automation", filled: true },
    { name: "1000 DM", filled: true },
    { name: "1000 Contact", filled: true },
    { name: "Ask to follow", filled: true },
    { name: "Lead Generation", filled: true },
    { name: "Smart Follow-ups - Coming Soon", filled: true },
    { name: "Al Reply - Coming Soon", filled: true },
  ],
};

const enterprisePlan = {
  title: "Enterprise",
  description: "For teams and multi-account management.",
  button: "Talk to Us",
  features: [
    { name: "Add multiple Accounts", filled: true },
    { name: "Custom Solutions", filled: true },
    { name: "Early Access New Features", filled: true },
    { name: "Priority Support", filled: true },
  ],
};
