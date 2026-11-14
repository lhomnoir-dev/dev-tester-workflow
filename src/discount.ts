/**
 * Calcule le prix d'un produit après application d'une réduction en pourcentage.
 * Le résultat est arrondi au centime.
 */
export function calculateDiscountedPrice(
  price: number,
  discountPercentage: number,
): number {
  if (!Number.isFinite(price) || price < 0) {
    throw new RangeError("Le prix doit être un nombre positif ou nul.");
  }

  if (
    !Number.isFinite(discountPercentage) ||
    discountPercentage < 0 ||
    discountPercentage > 100
  ) {
    throw new RangeError("La réduction doit être comprise entre 0 et 100 %.");
  }

  const discountedPrice = price * (1 - discountPercentage / 100);
  return Math.round((discountedPrice + Number.EPSILON) * 100) / 100;
}

/**
 * Applique un code promo sur un prix donné.
 * - Le code valide 'WELCOME10' applique une réduction de 10 %.
 * - En cas de code absent, invalide ou non reconnu, le prix initial est renvoyé.
 * - Le prix doit être un nombre positif ou nul (déclenche une RangeError sinon).
 */
export function applyDiscount(price: number, promoCode?: string | null): number {
  if (promoCode === "WELCOME10") {
    return calculateDiscountedPrice(price, 10);
  }

  return calculateDiscountedPrice(price, 0);
}
