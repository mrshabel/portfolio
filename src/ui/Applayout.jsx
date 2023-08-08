import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Applayout() {
  return (
    <div className="md:grid md:grid-cols-[5rem_1fr] md:grid-rows-[3rem_1fr] px-5 md:px-12 pb-4 h-[100vh] ">
      <div className="md:col-span-2 md:row-span-1 ">
        <Header />
      </div>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="md:px-24 pb-5 mt-10">
        <Outlet />
      </main>
    </div>
  );
}
