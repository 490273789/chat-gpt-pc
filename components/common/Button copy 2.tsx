import { ComponentPropsWithRef } from "react";
import { IconType } from "react-icons";
import clsx from "clsx";

type ButtonProps = {
  icon?: IconType;
  variant?: "default" | "outline" | "text" | "primary";
} & ComponentPropsWithRef<"button">;

export default function Button({
  children,
  className = "",
  icon: Icon, // 别名？
  variant = "default",
  ...props
}: ButtonProps) {
  const obj = { name: "wsn" };
  return (
    <button
      className={clsx(
        "inline-flex items-center min-w-[38px] min-h-[38px] rounded px-3 py-1.5",
        {
          "text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900":
            variant === "default",
          "border border-gray-300 dark:border-gray-600 text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700":
            variant === "outline",
          "bg-primary-500 text-white hover:bg-primary-600 hover:text-white shadow-sm":
            variant === "primary",
          "text-black dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700":
            variant === "text",
        },
        className,
      )}
      {...props}
    >
      {Icon && <Icon className={`text-lg ${children ? "mr-1" : ""}`} />}
      {children}
    </button>
  );
}
