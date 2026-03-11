import Navbar from "@/components/Navbar";
import Pricing from "@/pages/Pricing";

export default function Home() {
  return (
    <div
      className="min-h-dvh bg-[#060B13] bg-linear-180-to-br from-orange-500/20 via-transparent to-[#BF35FF]
      bg-[radial-gradient(ellipse_50%_10%_at_90%_18%,#8625B350_0%,#060B1340_100%)]
      md:bg-[radial-gradient(ellipse_50%_50%_at_50%_30%,#FF5F2D40_0%,#060B1320_100%),radial-gradient(ellipse_50%_50%_at_50%_80%,#FF5F2D40_0%,#060B1320_100%)]"
    >
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 lg:px-0">
        <Pricing />
      </main>
    </div>
  );
}
