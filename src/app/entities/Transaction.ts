import type { TransactionType } from '../types/TransactionType';

export interface Transaction {
  id: string;
  name: string;
  value: number;
  date: string;
  categoryId: string;
  bankAccountId: string;
  type: TransactionType;
  category?: {
    id: string;
    name: string;
    icon: string;
  };
}
