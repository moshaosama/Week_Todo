import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...props: ClassValue[]) => {
  return twMerge(clsx(props));
};
