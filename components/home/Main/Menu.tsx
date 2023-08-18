"use client"
import { useAppContext } from "@/components/AppContext";
import Button from "../../common/Button";
import { LuPanelLeft } from "react-icons/lu";

export default function Menu() {
  const a = useAppContext()
  console.log(a)
  const {
    state: { displayNavigation },
    setState,
  } = useAppContext();
  return (
    <Button
      icon={LuPanelLeft}
      variant="outline"
      className={`${displayNavigation ? "hidden" : ""} fixed left-2 top-2`}
      onClick={() => {
        setState((state) => ({ ...state, displayNavigation: true }));
      }}
    />
  );
}
