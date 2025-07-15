export  abstract class Conta {
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  public get numero() {
    return this._numero;
  }

  public set numero(numero: number) {
    this._numero = numero;
  }

  public get agencia() {
    return this._agencia;
  }

  public set agencia(agencia: number) {
    this._agencia = agencia;
  }

  public get tipo() {
    return this._tipo;
  }

  public set tipo(tipo: number) {
    this._tipo = tipo;
  }

  public get titular() {
    return this._titular;
  }

  public set titular(titular: string) {
    this._titular = titular;
  }

  public get saldo() {
    return this._saldo;
  }

  public set saldo(saldo: number) {
    this._saldo = saldo;
  }

  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("\nSaldo insuficiente para saque!");
      return false;
    }

    this._saldo = this._saldo - valor;
    return true;
  }

  public depositar(valor: number): void {
    this._saldo = this._saldo + valor;
  }

  public visualizar(): void {
    let tipoConta: string = "";

    switch (this._tipo) {
      case 1:
        tipoConta = "Conta Corrente";
        break;
      case 2:
        tipoConta = "Conta Poupança";
        break;
    }

    console.log("\n\n****************************");
    console.log("Dados da Conta:");
    console.log("****************************");
    console.log(`Número da Conta: ${this._numero}`);
    console.log(`Agência: ${this._agencia}`);
    console.log(`Tipo da Conta: ${tipoConta}`);
    console.log(`Titular: ${this._titular}`);
    console.log(`Saldo: R$ ${this._saldo.toFixed(2)}`);
  }
}
