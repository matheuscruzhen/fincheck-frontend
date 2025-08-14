import type { TransactionType } from '../../types/TransactionType';
import { httpClient } from '../httpClient';

export interface CreateTransactionParams {
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: string;
  type: TransactionType;
}

export async function create(params: CreateTransactionParams) {
  const { data } = await httpClient.post('/transactions', params);
  return data;
}
