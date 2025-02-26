"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
  useRef,
  useReducer,
} from "react";
import { Action, initState, reducer, State } from "@/reducers/AppReducer";

type AppContextProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

// note：createContext的参数是他的默认值，当后代组件消费context但是匹配不到provider的时候会试用其默认值

const AppContext = createContext<AppContextProps>(null!);

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  // 存储全局状态
  const [state, dispatch] = useReducer(reducer, initState);
  // 防止每次组件渲染，子组件也跟着渲染
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
