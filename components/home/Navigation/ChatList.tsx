import { useMemo, useState } from "react";
import { Chat } from "@/types/chat";

import { groupByDate } from "@/common/util";
import ChatItem from "@/components/home/Navigation/ChatItem";

export default function ChatList() {
  const [chartList, setChartList] = useState<Chat[]>([
    {
      id: "1",
      title: "React入门实战教学",
      updateTime: Date.now(),
    },
    {
      id: "2",
      title: "知识小型React入门实战教学React入门实战教学",
      updateTime: Date.now(),
    },
    {
      id: "3",
      title: "Vue入门实战教学",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 500,
    },
    {
      id: "4",
      title: "英语入门实战教学",
      updateTime: Date.now(),
    },
    {
      id: "5",
      title: "语文入门实战教学",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "6",
      title: "李氏入门实战教学",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 40,
    },
    {
      id: "7",
      title: "React入门实战教学",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 10,
    },
    {
      id: "8",
      title: "React入门实战教学",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "9",
      title: "React入门实战教学",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "10",
      title: "React入门实战教学",
      updateTime: Date.now() + 2,
    },
  ]);

  const [selectChat, setSelectChat] = useState<Chat>();

  const groupList = useMemo(() => groupByDate(chartList), [chartList]);

  return (
    <div className="flex-1 mt-2 flex flex-col overflow-y-scroll">
      {groupList.map(([data, list]) => {
        return (
          <div key={data}>
            <div className="sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500">
              {data}
            </div>
            <ul>
              {list.map((item) => {
                const selected = selectChat?.id === item.id;
                return (
                  <ChatItem
                    key={item.id}
                    data={item}
                    selected={selected}
                    setSelectChat={setSelectChat}
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
