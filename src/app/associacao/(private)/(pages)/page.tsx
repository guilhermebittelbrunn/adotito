'use client';
import LastRequests from '../(ui-elements)/lastRequests';
import { OverviewCards } from '../(ui-elements)/overviewCards';
import RecentActivities from '../(ui-elements)/recentActivities';

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

export default function Home() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 space-y-6 xl:col-span-10">
                <OverviewCards />
            </div>

            <LastRequests />

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
