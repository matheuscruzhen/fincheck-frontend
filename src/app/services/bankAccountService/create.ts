import type { BankAccountType } from '../../types/BankAccountType';
import { httpClient } from '../httpClient';

export interface BankAccountParams {
  name: string;
  initialBalance: number;
  color: string;
  type: BankAccountType;
}

interface BankAccountResponse {
  accessToken: string;
}

export async function create(params: BankAccountParams) {
  const { data } = await httpClient.post<BankAccountResponse>(
    '/bank-accounts',
    params
  );
  return data;
}
