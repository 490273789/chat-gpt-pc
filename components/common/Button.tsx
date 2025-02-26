import { cn } from "@/common/util";
import { cva } from "class-variance-authority";
import { ComponentPropsWithRef } from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  icon?: IconType;
  variant?: "default" | "outline" | "text" | "primary";
} & ComponentPropsWithRef<"button">;

const button = cva(
  ["inline-flex items-center min-w-[38px] min-h-[38px] rounded px-3 py-1.5"],
  {
    variants: {
      intent: {
        default:
          "text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900",
        outline:
          "border border-gray-300 dark:border-gray-600 text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",
        primary:
          "bg-primary-500 text-white hover:bg-primary-600 hover:text-white shadow-sm disabled:bg-transparent disabled:text-gray-300 dark:disabled:text-gray-600",
        text: "text-black dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700",
      },
    },
  },
);
export default function Button({
  children,
  className = "",
  icon: Icon, // 别名？
  variant = "default",
  ...props
}: ButtonProps) {
  const obj = { name: "wsn" };
  return (
    <button className={cn(button({ intent: variant }), className)} {...props}>
      {Icon && <Icon className={`text-lg ${children ? "mr-1" : ""}`} />}
      {children}
    </button>
  );
}
