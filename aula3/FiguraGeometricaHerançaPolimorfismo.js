class FiguraGeometrica {
  constructor(cor = "Blue") {
    this.cor = cor;
  }

  imprimirFigura() {
    return "Figura não especificada";
  }

  calcularArea() {
    return "Área não calculada";
  }
}

class FiguraComAresta extends FiguraGeometrica {
  constructor(aresta, cor) {
    super(cor);
    this.aresta = aresta;
  }
}

class Quadrado extends FiguraComAresta {
  constructor(lado, cor) {
    super(lado, cor);
  }

  imprimirFigura() {
    return `<div style='
      height: ${this.aresta}px; 
      width: ${this.aresta}px; 
      background-color:${this.cor};
    '></div>`;
  }

  calcularArea() {
    return this.aresta * this.aresta;
  }
}

class Triangulo extends FiguraComAresta {
  constructor(base, altura, cor) {
    super(base, cor);
    this.altura = altura;
  }

  calcularArea() {
    return (this.aresta * this.altura) / 2;
  }

  imprimirFigura() {
    return `<div style='
      width: 0;
      height: 0;
      border-top-width: ${this.aresta}px;
      border-top-style: solid;
      border-top-color: transparent;
      border-right-width: ${this.altura}px;
      border-right-style: solid;
      border-right-color: ${this.cor};
    '></div>`;
  }
}

class Circulo extends FiguraGeometrica {
  constructor(raio, cor) {
    super(cor);
    this.raio = raio;
  }

  imprimirFigura() {
    return `<div style='
      height: ${this.raio}px; 
      width: ${this.raio}px; 
      background-color:${this.cor}; 
      border-radius:${this.raio / 2}px;
    '></div>`;
  }

  calcularArea() {
    return Math.PI * this.raio ** 2;
  }
}

const q1 = new Quadrado(10, "blue");
document.write(q1.imprimirFigura());
console.log(q1.calcularArea());

const t1 = new Triangulo(10, 10, "green");
document.write(t1.imprimirFigura());
console.log(t1.calcularArea());

const c1 = new Circulo(10, "yellow");
document.write(c1.imprimirFigura());
console.log(c1.calcularArea());
