import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import z from 'zod';
import { useDashboard } from '../../components/DashboardContext/useDashboard';
import { bankAccountsService } from '../../../../../app/services/bankAccountsService';
import { currencyStringToNumber } from '../../../../../app/utils/currencyStringToNumber';
import type { UpdateBankAccountParams } from '../../../../../app/services/bankAccountsService/update';

const schema = z.object({
  initialBalance: z.union([
    z
      .string({ required_error: 'Saldo inicial é obrigatório' })
      .nonempty('Saldo inicial é obrigatório'),
    z.number(),
  ]),
  name: z.string().nonempty('Nome da conta é obrigatório'),
  type: z.enum(['CHECKING', 'CASH', 'INVESTMENT']),
  color: z.string().nonempty('Cor é obrigatória'),
});

type FormData = z.infer<typeof schema>;

export function useEditAccountModalController() {
  const { isEditAccountModalOpen, closeEditAccountModal, accountEdited } =
    useDashboard();

  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      initialBalance: accountEdited?.initialBalance,
      name: accountEdited?.name,
      type: accountEdited?.type,
      color: accountEdited?.color,
    },
  });

  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState<boolean>(false);

  const { isPending: isLoadingUpdate, mutateAsync: updateAccount } =
    useMutation({
      mutationFn: async (data: UpdateBankAccountParams) => {
        return await bankAccountsService.update(data);
      },
    });

  const { isPending: isLoadingDelete, mutateAsync: deleteAccount } =
    useMutation({
      mutationFn: async (bankAccountId: string) => {
        return await bankAccountsService.remove(bankAccountId);
      },
    });

  const queryClient = useQueryClient();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await updateAccount({
        ...data,
        id: accountEdited!.id,
        initialBalance: currencyStringToNumber(data.initialBalance),
      });
      queryClient.invalidateQueries({
        queryKey: ['bank-accounts'],
      });
      toast.success('Conta atualizada com successo.');
      closeEditAccountModal();
    } catch (error) {
      toast.error('Erro ao salvar a conta.');
    }
  });

  function handleOpenDeleteModal() {
    setIsDeleteAccountModalOpen(true);
  }
  function handleCloseDeleteModal() {
    setIsDeleteAccountModalOpen(false);
  }

  async function handleDeleteAccount() {
    try {
      await deleteAccount(accountEdited!.id);
      queryClient.invalidateQueries({
        queryKey: ['bank-accounts'],
      });
      toast.success('Conta excluída com successo.');
      close;
      closeEditAccountModal();
    } catch (error) {
      toast.error('Erro ao excluir a conta.');
    }
  }

  return {
    errors,
    control,
    isLoadingUpdate,
    isLoadingDelete,
    isEditAccountModalOpen,
    isDeleteAccountModalOpen,
    register,
    handleSubmit,
    closeEditAccountModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount,
  };
}
