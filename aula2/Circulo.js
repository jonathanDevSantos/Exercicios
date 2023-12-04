class Circulo {
  raio;

  constructor(raio) {
    this.raio = raio;
  }

  static calcularArea(raio) {
    return Math.PI * raio ** 2;
  }

  static calcularCircuferencia(raio) {
    return 2 * Math.PI * raio;
  }
}

console.log(Circulo.calcularArea(10));
console.log(Circulo.calcularCircuferencia(10));
