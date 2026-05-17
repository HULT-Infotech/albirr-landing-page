"use client";
import React from "react";
import Navbar from "./Navbar";

/**
 * Home-page variant of the Navbar with extra top spacing and full-width layout.
 * This wraps the shared Navbar so other pages can keep using the default Navbar.
 */
export default function NavHome() {
  return (
    <div className="pt-4 md:pt-6">
      <Navbar />
    </div>
  );
}
