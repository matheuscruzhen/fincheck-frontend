import { Controller } from 'react-hook-form';
import { Button } from '../../../../components/Button';
import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { useEditAccountModalController } from './useEditAccountModalController';
import { TrashIcon } from '../../../../components/icons/TrashIcon';
import { DeleteConfirmationModal } from '../../../../components/DeleteConfirmationModal';

export function EditAccountModal() {
  const {
    control,
    errors,
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
  } = useEditAccountModalController();

  if (isDeleteAccountModalOpen) {
    return (
      <DeleteConfirmationModal
        title='Tem certeza que deseja excluir essa conta?'
        description='Ao excluir a conta, também serão excluídos todos os registros de
        receita e despesas relacionados.'
        isLoading={isLoadingDelete}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteAccount}
      />
    );
  }

  return (
    <Modal
      title='Editar Conta'
      open={isEditAccountModalOpen}
      onClose={closeEditAccountModal}
      rightAction={
        <button onClick={handleOpenDeleteModal}>
          <TrashIcon className='w-6 h-6 text-red-900' />
        </button>
      }>
      <form onSubmit={handleSubmit}>
        <div>
          <span className='text-gray-600 text-sm tracking-[-0.5px]'>
            Saldo Inicial
          </span>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600 text-lg tracking-[-0.5px]'>R$</span>
            <Controller
              control={control}
              name='initialBalance'
              defaultValue='0'
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.initialBalance?.message}
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
            placeholder='Nome da Conta'
            error={errors.name?.message}
            {...register('name')}
          />

          <Controller
            control={control}
            name='type'
            defaultValue='CHECKING'
            render={({ field: { onChange, value } }) => (
              <Select
                value={value}
                onChange={onChange}
                placeholder='Tipo'
                options={[
                  { value: 'CHECKING', label: 'Conta Corrente' },
                  { value: 'CASH', label: 'Dinheiro Físico' },
                  { value: 'INVESTMENT', label: 'Investimentos' },
                ]}
                error={errors.type?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='color'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                onChange={onChange}
                value={value}
                error={errors.color?.message}
              />
            )}
          />

          <Button
            type='submit'
            className='mt-6 w-full'
            isLoading={isLoadingUpdate}>
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
