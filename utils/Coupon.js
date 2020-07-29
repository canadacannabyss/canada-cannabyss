class Coupon {
  constructor(subtotal) {
    this.subtotal = subtotal;
  }

  apply(couponCode) {
    this.subtotal;
    console.log("couponCode:", couponCode);
    return parseFloat((this.subtotal * 0.95).toFixed(2));
  }
}

export default Coupon;
