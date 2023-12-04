class Animal {
  nome;
  idade;
  especie;

  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  imprimirDados() {
    return this.nome + " " + this.idade + " " + this.especie;
  }
  emitirSom() {
    console.log("Som genérico");
  }
}

class Cachorro extends Animal {
  tamanho;

  constructor(nome, idade, especie, tamanho) {
    super(nome, idade, especie);
    this.tamanho = tamanho;
  }
  imprimirDados() {
    return (
      this.nome + " " + this.idade + " " + this.especie + " " + this.tamanho
    );
  }
  emitirSom() {
    console.log("Au! Au! Au!");
  }
}

class Gato extends Animal {
  cor;

  constructor(nome, idade, especie, cor) {
    super(nome, idade, especie);
    this.cor = cor;
  }
  emitirSom() {
    console.log("Miau! Miau!");
  }
}

const c1 = new Cachorro("Pingo", 7, "Vira-Lata", "M");
console.log(c1.imprimirDados());
c1.emitirSom();

const g1 = new Gato("Garfield", 5, "Siames", "Branco");
console.log(g1.imprimirDados());
g1.emitirSom();
