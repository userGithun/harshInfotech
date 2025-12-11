import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import WhatsappButton from "./chatlayout/WhatsappButton";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen gap-0 ">
      <Navbar />
      <WhatsappButton />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
