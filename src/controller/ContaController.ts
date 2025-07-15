import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      buscaConta.visualizar();
    } else {
      console.log(
        colors.fg.red,
        "\nA Conta de numero " + numero + " nao foi encontrada!\n",
        colors.reset
      );
    }
  }

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(
      colors.fg.green,
      "\nA conta de numero " + conta.numero + " foi criada com sucesso!\n",
      colors.reset
    );
  }
  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta != null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(
        colors.fg.green,
        "\nA conta de numero " +
          conta.numero +
          " foi atualizada com sucesso!\n",
        colors.reset
      );
    } else {
      console.log(
        colors.fg.red,
        "\nA Conta de numero " + conta.numero + " nao foi encontrada!\n",
        colors.reset
      );
    }
  }
  excluir(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(
        colors.fg.green,
        "\nA conta de numero " + numero + " foi excluida com sucesso!\n",
        colors.reset
      );
    } else {
      console.log(
        colors.fg.red,
        "\nA conta de numero " + numero + " nao foi encontrada!\n",
        colors.reset
      );
    }
  }
  public sacar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      if (conta.sacar(valor) == true) {
        console.log(
          colors.fg.green,
          "\nO saque na conta de numero " +
            numero +
            " foi realizado com sucesso!\n",
          colors.reset
        );
      } else {
        console.log(
          colors.fg.red,
          "\nA conta de numero " + numero + "nao foi encontrada!\n",
          colors.reset
        );
      }
    }
  }
  public depositar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      conta.depositar(valor);
      console.log(
        colors.fg.green,
        "\nDeposito na conta de numero " + numero + " realizado com sucesso!\n",
        colors.reset
      );
    } else {
      console.log(
        colors.fg.red,
        "\nA conta numero " + numero + " nao foi encontrada!\n",
        colors.reset
      );
    }
  }
  public transferir(
    numeroOrigem: number,
    numeroDestino: number,
    valor: number
  ): void {
    let contaOrigem = this.buscarNoArray(numeroOrigem);
    let contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem != null && contaDestino != null) {
      if (contaOrigem.sacar(valor) == true) {
        contaDestino.depositar(valor);
        console.log(
          colors.fg.green,
          "\nTransferencia da conta de numero " +
            numeroOrigem +
            " para conta de numero " +
            numeroDestino +
            " foi realizada com sucesso!\n",
          colors.reset
        );
      }
    } else {
      console.log(
        colors.fg.red,
        "\nA conta de numero " +
          numeroOrigem +
          "e/ou a conta de numero " +
          numeroDestino +
          " nao foram encontradas!\n",
        colors.reset
      );
    }
  }

  /*Métodos adicionais para manipulação de contas*/

  /*Gerar Número da Conta*/
  public gerarNumeroConta(): number {
    return ++this.numero;
  }

  /*Buscar Conta pelo Número*/
  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  }
}
