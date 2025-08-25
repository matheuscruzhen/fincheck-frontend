import z from 'zod';
import toast from 'react-hot-toast';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBankAccounts } from '../../../../../app/hooks/useBankAccounts';
import { useCategories } from '../../../../../app/hooks/useCategories';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { transactionsService } from '../../../../../app/services/transactionsService';
import { currencyStringToNumber } from '../../../../../app/utils/currencyStringToNumber';
import type { Transaction } from '../../../../../app/entities/Transaction';
import type { UpdateTransactionParams } from '../../../../../app/services/transactionsService/update';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório.'),
  value: z.union([z.string().nonempty('Valor é obrigatório.'), z.number()]),
  categoryId: z.string().nonempty('Categoria é obrigatória.'),
  bankAccountId: z.string().nonempty('Conta é obrigatória.'),
  date: z.date(),
});

type FormData = z.infer<typeof schema>;

export function useEditTransactionModalController(
  transaction: Transaction | null,
  onClose: () => void
) {
  const { accounts, isLoadingAccounts } = useBankAccounts();
  const { categories: categoriesList, isLoadingCategories } = useCategories();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: transaction?.name,
      value: transaction?.value,
      categoryId: transaction?.categoryId,
      bankAccountId: transaction?.bankAccountId,
      date: transaction ? new Date(transaction?.date) : new Date(),
    },
  });

  const { isPending: isLoading, mutateAsync: updateTransaction } = useMutation({
    mutationFn: async (data: UpdateTransactionParams) => {
      return await transactionsService.update(data);
    },
  });

  const { isPending: isLoadingDelete, mutateAsync: deleteTransaction } =
    useMutation({
      mutationFn: async (transactionId: string) => {
        return await transactionsService.remove(transactionId);
      },
    });

  const categories = useMemo(() => {
    return categoriesList.filter(
      (category) => category.type === transaction?.type
    );
  }, [categoriesList]);

  const queryClient = useQueryClient();

  async function handleDeleteTransaction() {
    try {
      await deleteTransaction(transaction!.id);
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
      queryClient.invalidateQueries({ queryKey: ['bank-accounts'] });
      transaction!.type === 'EXPENSE'
        ? toast.success('Despesa excluída com successo.')
        : toast.success('Receita excluída com successo.');
      close;
      onClose();
    } catch (error) {
      transaction!.type === 'EXPENSE'
        ? toast.error('Erro ao excluir a despesa.')
        : toast.error('Erro ao excluir a receita.');
    }
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await updateTransaction({
        ...data,
        id: transaction!.id,
        value: currencyStringToNumber(data.value),
        type: transaction!.type,
        date: data.date.toISOString(),
      });
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
      queryClient.invalidateQueries({ queryKey: ['bank-accounts'] });
      toast.success(
        transaction!.type === 'EXPENSE'
          ? 'Despesa alterada com successo.'
          : 'Receita alterada com successo.'
      );
      onClose();
    } catch (error) {
      toast.error(
        transaction!.type === 'EXPENSE'
          ? 'Erro ao alterar a despesa!'
          : 'Erro ao alterar a receita!'
      );
    }
  });

  return {
    errors,
    control,
    accounts,
    categories,
    isLoading,
    isLoadingDelete,
    isLoadingAccounts,
    isLoadingCategories,
    isDeleteModalOpen,
    register,
    handleSubmit,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteTransaction,
  };
}
