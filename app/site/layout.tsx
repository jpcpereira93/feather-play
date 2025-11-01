import { Outlet } from "react-router";

import { SiteNavbar } from "~/site/components";

export default function HomeLayout() {
  return (
    <div className="h-screen w-screen">
      <div className="fixed inset-0 z-0 pointer-events-none bg-radial from-brand-500 via-brand-500/60 to-transparent opacity-20"></div>
      <SiteNavbar />
      <div className="h-full w-full fixed z-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
