import { AiOutlineEdit } from "react-icons/ai";
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md";
import { PiChatBold, PiTrashBold } from "react-icons/pi";
import { Chat } from "@/types/chat";
import { useEffect, useState } from "react";

type Props = {
  data: Chat;
  selected: boolean;
  setSelectChat: (value: Chat) => void;
};
export default function ChatItem({ data, selected, setSelectChat }: Props) {
  const [edit, setEdit] = useState(false);

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setEdit(false);
    setDeleting(false);
  }, [selected]);

  return (
    <li
      className={`group relative flex items-center p-3 space-x-3 rounded-md hover:bg-gray-800 cursor-pointer ${
        selected ? "bg-gray-800 pr-[3.5rem]" : ""
      }`}
      onClick={() => setSelectChat(data)}
    >
      <div>{deleting ? <PiTrashBold /> : <PiChatBold />}</div>
      {edit ? (
        <input
          autoFocus={true}
          className="flex-1 min-w-0 outline-none bg-transparent"
          value={data.title}
        />
      ) : (
        <div className="relative flex-1 whitespace-nowrap overflow-hidden">
          {data.title}
          <span
            className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 bg-gradient-to-l ${
              selected ? "from-gray-800" : "from-gray-900"
            }`}
          ></span>
        </div>
      )}

      {selected && (
        <div className="absolute right-1 flex">
          {edit || deleting ? (
            <>
              <button
                className="p-1 hover:text-white"
                onClick={(e) => {
                  if (edit) {
                    setEdit(false);
                  } else if (deleting) {
                    setDeleting(false);
                  }

                  e.stopPropagation();
                }}
              >
                <MdCheck />
              </button>
              <button
                className="p-1 hover:text-white"
                onClick={(e) => {
                  if (edit) {
                    setEdit(false);
                  } else if (deleting) {
                    setDeleting(false);
                  }
                  e.stopPropagation();
                }}
              >
                <MdClose />
              </button>
            </>
          ) : (
            <>
              <button
                className="p-1 hover:text-white"
                onClick={(e) => {
                  setEdit(true);
                  e.stopPropagation();
                }}
              >
                <AiOutlineEdit />
              </button>
              <button
                className="p-1 hover:text-white"
                onClick={(e) => {
                  setDeleting(true);
                  e.stopPropagation();
                }}
              >
                <MdDeleteOutline />
              </button>
            </>
          )}
        </div>
      )}
    </li>
  );
}
