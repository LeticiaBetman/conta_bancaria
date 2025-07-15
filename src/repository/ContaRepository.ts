import { Conta } from "../model/Conta";

export interface ContaRepository {
  // Métodos CRUD
  procurarPorNumero(numero: number): void;
  listarTodas(): void;
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  excluir(numero: number): void;

  // Métodos de operação
  sacar(numero: number, valor: number): void;
  depositar(numero: number, valor: number): void;
  transferir(numerorigem: number, numeroDestino: number, valor: number): void;
}
