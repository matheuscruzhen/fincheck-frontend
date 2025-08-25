import z from 'zod';
import toast from 'react-hot-toast';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDashboard } from '../../components/DashboardContext/useDashboard';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBankAccounts } from '../../../../../app/hooks/useBankAccounts';
import { useCategories } from '../../../../../app/hooks/useCategories';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { transactionsService } from '../../../../../app/services/transactionsService';
import { currencyStringToNumber } from '../../../../../app/utils/currencyStringToNumber';
import type { CreateTransactionParams } from '../../../../../app/services/transactionsService/create';

const schema = z.object({
  value: z.string().nonempty('Valor é obrigatório.'),
  name: z.string().nonempty('Nome é obrigatório.'),
  categoryId: z.string().nonempty('Categoria é obrigatória.'),
  bankAccountId: z.string().nonempty('Conta é obrigatória.'),
  date: z.date(),
});

type FormData = z.infer<typeof schema>;

export function useNewTransactionModalController() {
  const { accounts, isLoadingAccounts } = useBankAccounts();
  const { categories: categoriesList, isLoadingCategories } = useCategories();

  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();

  const categories = useMemo(() => {
    return categoriesList.filter(
      (category) => category.type === newTransactionType
    );
  }, [categoriesList, newTransactionType]);

  const {
    reset,
    control,
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: new Date(),
    },
  });

  const queryClient = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        value: currencyStringToNumber(data.value),
        type: newTransactionType!,
        date: data.date.toISOString(),
      });
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
      queryClient.invalidateQueries({ queryKey: ['bank-accounts'] });
      toast.success(
        newTransactionType === 'EXPENSE'
          ? 'Despesa cadastrada com successo.'
          : 'Receita cadastrada com successo.'
      );
      closeNewTransactionModal();
      reset();
    } catch (error) {
      toast.error(
        newTransactionType === 'EXPENSE'
          ? 'Erro ao cadastrar a despesa!'
          : 'Erro ao cadastrar a receita!'
      );
    }
  });

  const { isPending: isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: CreateTransactionParams) => {
      return await transactionsService.create(data);
    },
  });

  return {
    newTransactionType,
    isNewTransactionModalOpen,
    errors,
    control,
    accounts,
    categories,

    isLoading,
    isLoadingAccounts,
    isLoadingCategories,
    register,
    handleSubmit,
    closeNewTransactionModal,
  };
}
