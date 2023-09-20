import { Chat } from "@/types/chat";

export function groupByDate(chatList: Chat[]) {
  const groupMap = new Map<string, Chat[]>();
  chatList.forEach((item) => {
    const now = new Date();
    const updateTime = new Date(item.updateTime);
    let key = "未知时间";
    const dayDiff = Math.floor(
      (now.getTime() - updateTime.getTime()) / (1000 * 60 * 60 * 24),
    );

    // 根据时间计算不同时间段的key
    if (dayDiff === 0 && now.getDate() === updateTime.getDate()) key = "今天";
    else if (dayDiff <= 7) key = "最近7天";
    else if (dayDiff <= 31) key = "最近一个月";
    else if (now.getFullYear() === updateTime.getFullYear())
      key = `${updateTime.getMonth() + 1}个月以前`;
    else key = `${updateTime.getFullYear()}年`;

    // 根据不同的时间段添加Map数据
    if (groupMap.has(key)) groupMap.get(key)?.push(item);
    else groupMap.set(key, [item]);
  });

  // Map使用forEach，item为map的每一项的值
  // 对时间段中的每一项进行排序
  groupMap.forEach((item) => item.sort((a, b) => b.updateTime - a.updateTime));

  // Array.from(groupMap)二维数组 第一层为Map的每一项，第二层数组的index 0 是 每一项的key，index 1是每一项的value
  // 对时间段进行排序
  return Array.from(groupMap).sort(
    ([, list1], [, list2]) =>
      list2[list2.length - 1].updateTime - list1[list1.length - 1].updateTime,
  );
}

export function sleep(time: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("time is up");
    }, time),
  );
}
