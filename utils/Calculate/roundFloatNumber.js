class RoundFloatNumber {
  roundNumber(number) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  }

  calculateDiscountPercentage(price, compareTo) {
    return Math.round(this.roundNumber((price / compareTo - 1) * 100));
  }
}

export default RoundFloatNumber;
