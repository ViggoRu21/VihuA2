import moment from "moment";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear() {
  return moment().year();
}

export function add(date: moment.MomentInput, number: moment.DurationInputArg1, type = DATE_UNIT_TYPES.DAYS) {
  return moment(date).add(number, type).toDate();
}

export function isWithinRange(date: moment.MomentInput, from: moment.MomentInput, to: moment.MomentInput) {
  return moment(date).isBetween(from, to);
}

export function isDateBefore(date: moment.MomentInput, compareDate: moment.MomentInput) {
  return moment(date).isBefore(compareDate);
}

export function isSameDay(date: moment.MomentInput, compareDate: moment.MomentInput) {
  return moment(date).isSame(compareDate);
}
