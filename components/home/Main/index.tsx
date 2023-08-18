import Menu from "./Menu";
import Welcome from "@/components/home/Main/Welcom";
export default function Main() {
  return (
    <main className="flex-1 overflow-y-scroll p-2 bg-white dark:bg-gray-700 dark:text-gray-100">
      <Menu />
      <Welcome />
    </main>
  );
}
