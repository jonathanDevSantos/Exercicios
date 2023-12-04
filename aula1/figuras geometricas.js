class Quadrado {
  lado;
  cor;
  constructor(lado, cor) {
    this.lado = lado;
    this.cor = cor;
  }

  imprimirQuadrado() {
    return `<div style='
    height: ${this.lado}px; 
    width: ${this.lado}px; 
    background-color:${this.cor};
    '></div>`;
  }

  calcularAreaQuadrado() {
    return this.lado * this.lado;
  }
}

class Triangulo {
  base;
  altura;
  cor;

  constructor(base, altura, cor) {
    this.base = base;
    this.altura = altura;
    this.cor = cor;
  }

  calcularAreaTriangulo() {
    return (this.base * this.altura) / 2;
  }

  imprimirTriangulo() {
    return `<div style='
    width: 0;
    height: 0;
    border-top-width: ${this.base}px;
    border-top-style: solid;
    border-top-color: transparent;
    border-right-width: ${this.base}px;
    border-right-style: solid;
    border-right-color: ${this.cor};
'></div>`;
  }
}

class Circulo {
  raio;
  cor;
  constructor(raio, cor) {
    this.raio = raio;
    this.cor = cor;
  }
  imprimirCirculo() {
    return `<div style='
      height: ${this.raio}px; 
      width: ${this.raio}px; 
      background-color:${this.cor}; 
      border-radius:${this.raio / 2}px;
      '></div>`;
  }
  calcularAreaCirculo() {
    return Math.PI * this.raio ** 2;
  }
}

const q1 = new Quadrado(100, "blue");
document.write(q1.imprimirQuadrado());
console.log(q1.calcularAreaQuadrado());

const t1 = new Triangulo(100, 100, "green");
document.write(t1.imprimirTriangulo());
console.log(t1.calcularAreaTriangulo());

const c1 = new Circulo(100, "yellow");
document.write(c1.imprimirCirculo());
console.log(c1.calcularAreaCirculo());
