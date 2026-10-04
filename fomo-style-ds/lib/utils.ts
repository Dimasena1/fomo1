import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (shadcn convention). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as compact US currency: 1250 -> "$1,250". */
export function money(value: number, digits = 0) {
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: digits })}`;
}
