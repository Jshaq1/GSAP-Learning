"use client";
import Image from "next/image";
import { Hero } from "@/components";
import { FC } from "react";

export default function Home() {
  return (
    <main className="h-screen w-full mx-auto">
      <Hero />
    </main>
  );
}
