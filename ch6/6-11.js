export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calcuateBasePrice(product, quantity);
  const discount = calculateDiscount(quantity, product);
  const shippingCost = calculateShippingCost(
    basePrice,
    shippingMethod,
    quantity
  );
  return basePrice - discount + shippingCost;
}

export function calcuateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}

export function calculateDiscount(quantity, product) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

export function calculateShippingCost(basePrice, shippingMethod, quantity) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
