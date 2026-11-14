import { describe, expect, it } from "vitest";
import { calculateDiscountedPrice } from "../src/discount.js";

describe("calculateDiscountedPrice", () => {
  it("applique une réduction en pourcentage au prix", () => {
    expect(calculateDiscountedPrice(100, 20)).toBe(80);
  });

  it("arrondit le prix réduit au centime", () => {
    expect(calculateDiscountedPrice(19.99, 15)).toBe(16.99);
  });

  it("renvoie le prix initial sans réduction", () => {
    expect(calculateDiscountedPrice(12.5, 0)).toBe(12.5);
  });

  it("renvoie zéro avec une réduction de 100 %", () => {
    expect(calculateDiscountedPrice(12.5, 100)).toBe(0);
  });

  it("rejette un prix négatif", () => {
    expect(() => calculateDiscountedPrice(-1, 10)).toThrow(RangeError);
  });

  it("rejette une réduction hors de l'intervalle de 0 à 100 %", () => {
    expect(() => calculateDiscountedPrice(100, 101)).toThrow(RangeError);
  });
});