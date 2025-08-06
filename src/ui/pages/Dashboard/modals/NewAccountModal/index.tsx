import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import Modal from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { useNewAccountModalController } from './useNewAccountModalController';

export function NewAccountModal() {
  const { closeNewAccountModal, isNewAccountModalOpen } =
    useNewAccountModalController();

  return (
    <Modal
      title='Nova Conta'
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}>
      <form>
        <div>
          <span className='text-gray-600 text-sm tracking-[-0.5px]'>Saldo</span>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600 text-lg tracking-[-0.5px]'>R$</span>
            <InputCurrency />
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-10'>
          <Input type='text' name='name' placeholder='Nome da Conta' />
          <Select
            placeholder='Tipo'
            options={[
              { value: 'CHECKING', label: 'Conta Corrente' },
              { value: 'CASH', label: 'Dinheiro Físico' },
              { value: 'INVESTMENT', label: 'Investimentos' },
            ]}
          />
          <ColorsDropdownInput />
        </div>
      </form>
    </Modal>
  );
}
