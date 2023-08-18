"use client";
import { useAppContext } from "@/components/AppContext";
import Menubar from "./Menubar";
import ToolMenu from "@/components/home/Navigation/ToolMenu";
import ChatList from "@/components/home/Navigation/ChatList";
export default function Navigation() {
  const {
    state: { displayNavigation },
  } = useAppContext();
  console.log("displayNavigation:", displayNavigation);
  return (
    <nav
      className={`dark relative flex flex-col h-full w-[260px] p-2 pb-[54px] bg-gray-900 text-gray-300 ${
        displayNavigation ? "" : "hidden"
      }`}
    >
      <Menubar />
      <ChatList />
      <ToolMenu />
    </nav>
  );
}
