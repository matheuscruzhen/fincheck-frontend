import type { BankAccountType } from '../../types/BankAccountType';
import { httpClient } from '../httpClient';

export interface BankAccountParams {
  name: string;
  initialBalance: number;
  color: string;
  type: BankAccountType;
}

interface BankAccountResponse {
  id: string;
  name: string;
  initialBalance: number;
  type: BankAccountType;
  color: string;
  currentBalance: number;
}

export async function create(params: BankAccountParams) {
  const { data } = await httpClient.post<BankAccountResponse>(
    '/bank-accounts',
    params
  );
  return data;
}
