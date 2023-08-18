"use client"
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type State = {
  displayNavigation: boolean;
};

type AppContextProps = {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
};

const AppContext = createContext<AppContextProps>(null!);

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  // 存储全局状态
  const [state, setState] = useState({ displayNavigation: true });
  // 防止每次次组件渲染，子组件也跟着渲染
  const contextValue = useMemo(() => ({ state, setState }), [state, setState]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
