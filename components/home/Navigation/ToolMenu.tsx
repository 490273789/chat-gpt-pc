import Button from "@/components/common/Button";
import { MdDarkMode, MdInfo, MdLightMode } from "react-icons/md";
import { useAppContext } from "@/components/AppContext";
import { ActionType } from "@/reducers/AppReducer";

export default function ToolMenu() {
  const {
    state: { themeModel },
    dispatch,
  } = useAppContext();
  return (
    <div className="absolute bottom-0 left-0 right-0 flex p-2 justify-between bg-gray-800">
      <Button
        icon={themeModel === "dark" ? MdLightMode : MdDarkMode}
        variant="text"
        onClick={() => {
          dispatch({
            type: ActionType.UPDATE,
            field: "themeModel",
            value: themeModel === "dark" ? "light" : "dark",
          });
        }}
      />
      <Button icon={MdInfo} variant="text" />
    </div>
  );
}
