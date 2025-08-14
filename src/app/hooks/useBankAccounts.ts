import { useQuery } from '@tanstack/react-query';
import { bankAccountsService } from '../services/bankAccountsService';

export function useBankAccounts() {
  const { data, isFetching: isLoadingAccounts } = useQuery({
    queryKey: ['bank-accounts'],
    queryFn: bankAccountsService.getAll,
  });

  return { accounts: data ?? [], isLoadingAccounts };
}
