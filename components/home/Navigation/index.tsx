"use client"
import { useAppContext } from "@/components/AppContext";
import Menubar from "./Menubar";
export default function Navigation() {
  const {
    state: { displayNavigation },
  } = useAppContext();
  console.log('displayNavigation:',displayNavigation)
  return (
    <nav
      className={`${
        displayNavigation ? "" : "hidden"
      } h-full w-[260px] p-2 bg-gray-900 text-gray-300`}
    >
      <Menubar />
    </nav>
  );
}
