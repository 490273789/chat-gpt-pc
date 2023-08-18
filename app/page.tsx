import Main from "@/components/home/Main";
import Navigation from "@/components/home/Navigation";

export default function Home() {
  return (
    <main className="h-full flex">
      <Navigation />
      <Main />
    </main>
  );
}
