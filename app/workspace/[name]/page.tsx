'use client'
import Workspace from "@/components/Workspace";
import Header from "@/components/RouteHeader"

export default function Page({
  params,
}: {
  params: {
    name: string;
  };
}) {
  return <div className="bg-gray-900 h-screen overflow-y-auto">
    {Header(`/ temp / Workspace / ${params.name}`)}
    <div className="px-10 2xl:px-40 py-20">
      <Workspace />
    </div>
  </div>;
}
