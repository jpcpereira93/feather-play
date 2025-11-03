import { Outlet } from "react-router";
import { SiteBox } from "../components";

import { SetupGuideSideMenu } from "./components";

export default function SetupGuideLayout() {
  return (
    <div className="h-full w-full flex">
      <aside className="h-full w-fit md:w-1/4 lg:w-1/5">
        <SiteBox>
          <SetupGuideSideMenu />
        </SiteBox>
      </aside>
      <main className="h-full w-full p-6">
        <SiteBox rounded>
          <Outlet />
        </SiteBox>
      </main>
    </div>
  );
}
