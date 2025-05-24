"use client"
import React from "react";
import { OverviewCards } from "./_components/overviewCards";
import LastRequests from "./_components/lastRequests";
import RecentActivities from "./_components/recentActivities";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-12">
        <OverviewCards />
      </div>

      <LastRequests/>

      <RecentActivities />

      {/* <div className="col-span-12 xl:col-span-5">
         <MonthlyTarget /> 
      </div> */}
      {/* 
      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div> */}
    </div>
  );
}
