import AnalyticsMetrics from "tailadmin/components/analytics/AnalyticsMetrics";
import TopChannel from "tailadmin/components/analytics/TopChannel";
import TopPages from "tailadmin/components/analytics/TopPages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Analytics",
  description: "Admin analytics overview",
};

export default function AnalyticsPage() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <AnalyticsMetrics />
      </div>
      <div className="col-span-12 xl:col-span-6">
        <TopChannel />
      </div>
      <div className="col-span-12 xl:col-span-6">
        <TopPages />
      </div>
    </div>
  );
}
