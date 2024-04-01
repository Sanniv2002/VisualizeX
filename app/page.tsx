import Header from "@/components/RouteHeader"
import Hero from "@/components/Hero";
import Herobuttons from "@/components/Herobuttons";


export default function Home() {
  return (
    <main className="flex flex-col bg-gray-900 h-screen">
      {Header("")}
      <div className="mt-40 mx-12 flex flex-col items-center gap-10">
        <Hero />
        <Herobuttons />
      </div>
    </main>
  );
}
