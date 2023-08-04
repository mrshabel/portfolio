import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Applayout() {
  return (
    <div className="app-layout px-12 pb-4 h-[100vh] ">
      <div className="col-span-2 ">
        <Header />
      </div>
      <Sidebar />
      <main className="md:px-24">
        <Outlet />
      </main>
    </div>
  );
}
