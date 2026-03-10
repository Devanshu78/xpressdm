import React from "react";
import Button from "./Button";
import TickCircle from "./TickCircle";
import { TimePeriod } from "@/pages/Pricing";

type Data = {
  title: string;
  description: string;
  price?: number;
  button: string;
  buttonVariant?: "primary" | "secondary";
  features: { name: string; filled: boolean }[];
};

interface PriceCardProps {
  data: Data;
  suggestion?: boolean;
}

const PriceCard = ({ data, suggestion }: PriceCardProps) => {
  return (
    <>
      {suggestion ? (
        <div
          key={data.title}
          className="p-1 bg-linear-to-r from-[#FF5F2D]/30 to-[#BF35FF]/30 rounded-xl bg-clip-border"
        >
          <div className="w-full h-full bg-white/5 backdrop-blur-xl rounded-xl p-4 text-white z-100">
            <div className="flex justify-between items-center z-50">
              <h1 className="text-3xl">{data?.title}</h1>
              <div className="hidden lg:block">
                <Button className="text-xs! p-2! cursor-default!">
                  Most Popular
                </Button>
              </div>
              <div className="lg:hidden">
                <TimePeriod />
              </div>
            </div>
            <p className="text-sm text-neutral-200/50 mt-2">
              {data?.description}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <p className="text-3xl">&#x20B9; {data?.price}</p>
              <span className="text-sm text-neutral-200">
                / month <br /> per account
              </span>
            </div>

            <Button className="px-8! py-4! rounded-3xl! lg:w-full mt-8 font-semibold">
              {data.button}
            </Button>
            <hr className="mt-6" />
            <h2 className="text-xl mt-2">Features :</h2>
            <ul className="space-y-2 mt-6">
              {data?.features.map((feature) => (
                <li className="flex items-center gap-2" key={feature.name}>
                  <TickCircle filled={feature.filled} />
                  <p>{feature.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div
          key={data.title}
          className="w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 text-white"
        >
          <h1 className="text-3xl">{data?.title}</h1>
          <p className="text-sm text-neutral-200/50 mt-2">
            {data?.description}
          </p>

          {data.price !== undefined ? (
            <p className="text-3xl mt-4">&#x20B9; {data?.price}</p>
          ) : (
            <p className="text-3xl mt-4 text-transparent">&#x20B9; 0</p>
          )}

          <Button
            variant="secondary"
            className="px-8! py-4! rounded-3xl! lg:w-full mt-10 font-semibold"
          >
            {data.button}
          </Button>
          <hr className="mt-6" />
          <h2 className="text-xl mt-2">Features :</h2>
          <ul className="space-y-2 mt-6">
            {data?.features.map((feature) => (
              <li className="flex items-center gap-2" key={feature.name}>
                <TickCircle filled={feature.filled} />
                <p>{feature.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default PriceCard;
