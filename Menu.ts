import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let opcao: number;

  const conta: Conta = new Conta(1, 123, 1, "Letícia Betman", 10000);
  conta.visualizar();
  conta.sacar(10500);
  conta.visualizar();
  conta.depositar(5000);
  conta.visualizar();

  const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "João da Silva", 15000, 1000);
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Maria Oliveira", 20000, 10);
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

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

    console.log("Digite o numero da opção desejada: ");
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

        keyPress();
        break;
      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as contas\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da conta - por número\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da conta\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar uma conta\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre contas\n\n",
          colors.reset
        );

        keyPress();
        break;
      default:
        console.log(colors.fg.redstrong, "\nOpção inválida!\n", colors.reset);

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
