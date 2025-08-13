import type { BankAccountType } from '../../types/BankAccountType';
import { httpClient } from '../httpClient';

export interface UpdateBankAccountParams {
  id: string;
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

export async function update({ id, ...params }: UpdateBankAccountParams) {
  const { data } = await httpClient.put<BankAccountResponse>(
    `/bank-accounts/${id}`,
    params
  );
  return data;
}
