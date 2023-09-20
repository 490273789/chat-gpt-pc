import ChatInput from "./ChatInput";
import Menu from "./Menu";
import Welcome from "@/components/home/Main/Welcome";
import MessageList from "./MessageList";

export default function Main() {
  return (
    <div className="relative flex-1 ">
      <main className="overflow-y-auto p-2 h-full w-full bg-white dark:bg-gray-800 dark:text-gray-100">
        <Menu />
        {/* <Welcome /> */}
        <MessageList />
        <ChatInput />
      </main>
    </div>
  );
}
