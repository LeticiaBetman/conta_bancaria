import readlinesync = require("readline-sync");
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors } from "./src/util/Colors";
import { ContaController } from "./src/controller/ContaController";

export function main() {
  let contas: ContaController = new ContaController();

  let opcao,
    numero,
    agencia,
    tipo,
    saldo,
    limite,
    aniversario,
    valor,
    numeroDestino: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta Poupanca"];

  console.log("\nCriar Contas\n");

  let cc1: ContaCorrente = new ContaCorrente(
    contas.gerarNumeroConta(),
    123,
    1,
    "José dos Santos",
    1000,
    100.0
  );
  contas.cadastrar(cc1);

  let cc2: ContaCorrente = new ContaCorrente(
    contas.gerarNumeroConta(),
    456,
    1,
    "Maria Eduarda Soares",
    2000,
    200.0
  );
  contas.cadastrar(cc2);

  let cp1: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumeroConta(),
    178,
    2,
    "Joana da Silva",
    5000,
    12
  );
  contas.cadastrar(cp1);

  let cp2: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumeroConta(),
    125,
    2,
    "Lucas Pereira",
    7000,
    18
  );
  contas.cadastrar(cp2);

  contas.listarTodas();
  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.yellow,

      "*****************************************************"
    );
    console.log("                                                     ");
    console.log("                BANCO NUBRASIL                       ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as contas               ");
    console.log("            3 - Buscar conta por numero              ");
    console.log("            4 - Atualizar dados da conta             ");
    console.log("            5 - Apagar conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log(
      "                                                     ",
      colors.reset
    );

    console.log("Digite o numero da opcao desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log(
        colors.fg.greenstrong,
        "\nBanco NUBRASIL. Simples, digital e do seu jeito!"
      );
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar conta\n\n", colors.reset);

        console.log("Digite o numero da agencia: ");
        agencia = readlinesync.questionInt("");

        console.log("Digite o nome do titular da conta: ");
        titular = readlinesync.question("");

        console.log("\nDigite o tipo da conta: ");
        tipo =
          readlinesync.keyInSelect(tiposContas, "", {
            cancel: false,
          }) + 1;

        console.log("\nDigite o saldo da conta (R$): ");
        saldo = readlinesync.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("Digite o limite da conta (R$): ");
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumeroConta(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );
            break;
          case 2:
            console.log("Digite o dia do aniversario da conta poupança: ");
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumeroConta(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;
        }
        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as contas\n\n",
          colors.reset
        );

        contas.listarTodas();

        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da conta - por numero\n\n",
          colors.reset
        );

        console.log("Digite o numero da conta: ");
        numero = readlinesync.questionInt("");
        contas.procurarPorNumero(numero);

        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da conta\n\n",
          colors.reset
        );

        console.log("Digite o numero da conta: ");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log("Digite o numero da agencia: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o nome do titular da conta: ");
          titular = readlinesync.question("");

          tipo = conta.tipo;

          console.log("\nDigite o saldo da conta (R$): ");
          saldo = readlinesync.questionFloat("");

          switch (tipo) {
            case 1:
              console.log("Digite o limite da conta (R$): ");
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;
            case 2:
              console.log("Digite o dia do aniversario da conta poupança: ");
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log(
            colors.fg.red,
            "\nA Conta de numero " + numero + " nao foi encontrada!\n",
            colors.reset
          );
        }

        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar uma conta\n\n",
          colors.reset
        );

        console.log("Digite o numero da conta: ");
        numero = readlinesync.questionInt("");
        contas.excluir(numero);

        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

        console.log("Digite o numero da conta: ");
        numero = readlinesync.questionInt("");

        console.log("\nDigite o valor do saque (R$): ");
        valor = readlinesync.questionFloat("");

        contas.sacar(numero, valor);

        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDeposito\n\n", colors.reset);

        console.log("Digite o numero da conta: ");
        numero = readlinesync.questionInt("");

        console.log("\nDigite o valor do deposito (R$): ");
        valor = readlinesync.questionFloat("");

        contas.depositar(numero, valor);

        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferencia entre contas\n\n",
          colors.reset
        );

        console.log("Digite o numero da conta de origem: ");
        numero = readlinesync.questionInt("");

        console.log("Digite o numero da conta de destino: ");
        numeroDestino = readlinesync.questionInt("");

        console.log("\nDigite o valor da transferencia (R$): ");
        valor = readlinesync.questionFloat("");

        contas.transferir(numero, numeroDestino, valor);

        keyPress();
        break;
      default:
        console.log(colors.fg.redstrong, "\nOpção invalida!\n", colors.reset);

        keyPress();
        break;
    }
  }
}

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Letícia Betman ");
  console.log("Leticia Rodrigues Betman - leticiarodriguesbetman@gmail.com");
  console.log("github.com/LeticiaBetman");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
