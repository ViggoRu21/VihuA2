import { describe, it, expect } from 'vitest';
import moment from 'moment';
import { getCurrentYear, add, isWithinRange, isDateBefore, sameDay } from '../dateUtils.ts';
import { DATE_UNIT_TYPES } from '../constants';

describe("Date Utils", () => {
  // Add your tests here

    // getCurrentYear test

      it("Should get current year", () => {
        const currentYear = new Date().getFullYear();
        expect(getCurrentYear()).toBe(currentYear);
      });

    // add test

      it("Should add days to a given date", () => {
        const date = new Date(2025, 1, 1);
        const result = add(date, 5, DATE_UNIT_TYPES.DAYS);
        expect(moment(result).isSame(moment(date).add(5, 'days'))).toBe(true);
      });

    // isWithinRange tests suite

      it("Should check if a date is within given range", () => {
        const date = new Date(2025, 5, 15);
        const from = new Date(2025, 5, 10);
        const to = new Date(2025, 5, 20);
        expect(isWithinRange(date, from, to)).toBe(true);
      });

      it("Should return false if date is outside range", () => {
        const date = new Date(2025, 5, 25);
        const from = new Date(2025, 5, 10);
        const to = new Date(2025, 5, 20);
        expect(isWithinRange(date, from, to)).toBe(false);
      });

    // isDateBefore test suite

      it("Should determine if a date is before another date", () => {
        const date1 = new Date(2025, 1, 1);
        const date2 = new Date(2025, 1, 2);
        expect(isDateBefore(date1, date2)).toBe(true);
      });

      it("Should return false if a date is not before another date", () => {
        const date1 = new Date(2025, 1, 3);
        const date2 = new Date(2025, 1, 2);
        expect(isDateBefore(date1, date2)).toBe(false);
      });

    // isSameDay test suite

      it("Should check if two dates are the same day", () => {
        const date1 = new Date(2025, 1, 1);
        const date2 = new Date(2025, 1, 1);
        expect(sameDay(date1, date2)).toBe(true);
      });

      it("Should return false if two dates are not the same day", () => {
        const date1 = new Date(2025, 1, 1);
        const date2 = new Date(2025, 1, 2);
        expect(sameDay(date1, date2)).toBe(false);
      });

});
