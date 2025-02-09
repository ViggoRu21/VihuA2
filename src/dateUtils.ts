import { getYear, addDays, isWithinInterval, isBefore, isSameDay } from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear() {
  return getYear(new Date());
}

export function add(date: string | Date, number: number, type = DATE_UNIT_TYPES.DAYS) {
  return addDays(new Date(date), number);
}

export function isWithinRange(date: string | Date, from: string | Date, to: string | Date) {
  return isWithinInterval(new Date(date), { start: new Date(from), end: new Date(to) });
}

export function isDateBefore(date: string | Date, compareDate: string | Date) {
  return isBefore(new Date(date), new Date(compareDate));
}

export function sameDay(date: string | Date, compareDate: string | Date) {
  return isSameDay(new Date(date), new Date(compareDate));
}
