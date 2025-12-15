import { Outlet } from "react-router";

import { MainHeader } from "~/components/main-header";

export default function Layout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
