export interface IUser {
  id: string;
  email: string;
}

export enum TransactionEnum {
  expense = 'expense',
  income = 'income',
}
