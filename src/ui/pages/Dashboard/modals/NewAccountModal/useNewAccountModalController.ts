import z from 'zod';
import { useDashboard } from '../../components/DashboardContext/useDashboard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { bankAccountsService } from '../../../../../app/services/bankAccountService';
import type { BankAccountParams } from '../../../../../app/services/bankAccountService/create';
import { currencyStringToNumber } from '../../../../../app/utils/currencyStringToNumber';

const schema = z.object({
  initialBalance: z
    .string({ required_error: 'Saldo inicial é obrigatório' })
    .nonempty('Saldo inicial é obrigatório'),
  name: z.string().nonempty('Nome da conta é obrigatório'),
  type: z.enum(['CHECKING', 'CASH', 'INVESTMENT']),
  color: z.string().nonempty('Cor é obrigatória'),
});

type FormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();

  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending: isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: BankAccountParams) => {
      return await bankAccountsService.create(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      console.log(Number(data.initialBalance));
      await mutateAsync({
        ...data,
        initialBalance: Number(data.initialBalance),
      });

      toast.success('Conta cadastrada com successo.');
      closeNewAccountModal();
      reset();
    } catch (error) {
      toast.error('Erro ao cadastrar a conta.');
    }
  });

  return {
    errors,
    control,
    isLoading,
    isNewAccountModalOpen,
    register,
    handleSubmit,
    closeNewAccountModal,
  };
}
