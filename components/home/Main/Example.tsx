import examples from "@/data/example.json";
import { useMemo, useState } from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import Button from "@/components/common/Button";

export default function Example() {
  const [showMore, setShowMore] = useState(false);
  const list = useMemo(() => {
    if (showMore) return examples;
    else return examples.slice(0, 15);
  }, [showMore]);
  return (
    <>
      <div className="mt-20 mb-4 text-4xl">
        <MdOutlineTipsAndUpdates />
      </div>
      <ul className="flex justify-center flex-wrap gap-3.5">
        {list.map((item) => {
          return (
            <li key={item.act}>
              <Button>{item.act}</Button>
            </li>
          );
        })}
      </ul>
      {!showMore && (
        <>
          <div>...</div>
          <div className="flex items-center w-full space-x-3 ">
            <hr className="flex-1 border-t border-dotted border-gray-200 dark:border-gray-700" />
            <Button onClick={() => setShowMore(true)}>显示更多</Button>
            <hr className="flex-1 border-t border-dotted border-gray-200 dark:border-gray-700" />
          </div>
        </>
      )}
    </>
  );
}
