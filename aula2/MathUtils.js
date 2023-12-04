class MathUtils {
  constructor() {}
  static PI() {
    return 3.14;
  }

  static sum(n1, n2) {
    return n1 + n2;
  }

  static sub(n1, n2) {
    return n1 - n2;
  }

  static mul(n1, n2) {
    return n1 * n2;
  }

  static div(n1, n2) {
    return n1 / n2;
  }
}

const m = new MathUtils();

console.log(MathUtils.PI());
console.log(MathUtils.sum(2, 5));
console.log(MathUtils.sub(10, 7));
console.log(MathUtils.mul(3, 2));
console.log(MathUtils.div(10, 2));
