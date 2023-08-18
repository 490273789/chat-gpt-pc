"use client";
import Main from "@/components/home/Main";
import Navigation from "@/components/home/Navigation";
import { useAppContext } from "@/components/AppContext";

export default function Home() {
  const {
    state: { themeModel },
  } = useAppContext();

  return (
    <main className={`${themeModel} h-full flex`}>
      <Navigation />
      <Main />
    </main>
  );
}
