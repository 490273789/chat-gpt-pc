import { useAppContext } from "@/components/AppContext";
import Button from "../../common/Button";
import { HiPlus } from "react-icons/hi";
import { LuPanelLeft } from "react-icons/lu";
export default function Menubar() {
  const { setState } = useAppContext();
  return (
    <div className="flex space-x-3">
      <Button icon={HiPlus} variant="outline" className="flex-1">
        新建对话框
      </Button>
      <Button
        icon={LuPanelLeft}
        variant="outline"
        onClick={() => {
          setState((state) => ({ ...state, displayNavigation: false }));
        }}
      />
    </div>
  );
}
