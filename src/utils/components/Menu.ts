import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
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
        console.log("                                                     ");

        console.log("Digite o numero da opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco NUBRASIL. Simples, digital e do seu jeito!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre contas\n\n");

                break;
            default:
                console.log("\nOpção inválida!\n");

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

main();