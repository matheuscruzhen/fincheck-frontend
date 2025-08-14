import { useNewTransactionModalController } from './useNewTransactionModalController';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { DatePickerInput } from '../../../../components/DatePickerInput';
import { Button } from '../../../../components/Button';
import { Controller } from 'react-hook-form';

export function NewTransactionModal() {
  const {
    accounts,
    categories,
    errors,
    control,
    newTransactionType,
    isLoading,
    isNewTransactionModalOpen,
    register,
    handleSubmit,
    closeNewTransactionModal,
  } = useNewTransactionModalController();
  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}>
      <form onSubmit={handleSubmit}>
        <div>
          <span className='text-gray-600 text-sm tracking-[-0.5px]'>
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600 text-lg tracking-[-0.5px]'>R$</span>
            <Controller
              control={control}
              name='value'
              defaultValue='0'
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.value?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-10'>
          <Input
            type='text'
            {...register('name')}
            error={errors.name?.message}
            placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
          />
          <Controller
            control={control}
            name='categoryId'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder='Categoria'
                value={value}
                onChange={onChange}
                error={errors.categoryId?.message}
                options={categories.map((category) => ({
                  value: category.id,
                  label: category.name,
                }))}
              />
            )}
          />
          <Controller
            control={control}
            name='bankAccountId'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder={isExpense ? 'Pagar com' : 'Receber na Conta'}
                value={value}
                onChange={onChange}
                error={errors.bankAccountId?.message}
                options={accounts.map((account) => ({
                  value: account.id,
                  label: account.name,
                }))}
              />
            )}
          />
          <Controller
            control={control}
            name='date'
            defaultValue={new Date()}
            render={({ field: { value, onChange } }) => (
              <DatePickerInput
                value={value}
                onChange={onChange}
                error={errors.date?.message}
              />
            )}
          />
          <Button isLoading={isLoading} type='submit' className='mt-6 w-full'>
            Criar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
