class Conta {
  #numeroConta;
  #nomeTitular;
  #saldo = 0;

  constructor(numeroConta, nomeTitular) {
    this.#numeroConta = numeroConta;
    this.#nomeTitular = nomeTitular;
  }

  #validar(valor) {
    if (this.#saldo - valor >= 0) {
      return true;
    }
    return false;
  }

  deposito(valor) {
    this.#saldo += valor;
  }

  saque(valor) {
    if (this.#validar(valor) == false) {
      return "Saque não permitido, saldo insuficiente";
    }
    this.#saldo -= valor;
    console.log(`Saque realizado! Saldo atual: ${this.#saldo}`);
  }

  getSaldo() {
    return this.#saldo;
  }
}

const c1 = new Conta(4078, "Pedro");
c1.deposito(500);
c1.saque(1000);
c1.saque(400);
c1.getSaldo();
