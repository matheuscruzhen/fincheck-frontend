import type { TransactionType } from '../types/TransactionType';

export interface Category {
  id: string;
  name: string;
  icons: string;
  type: TransactionType;
}
