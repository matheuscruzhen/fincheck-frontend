import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import Modal from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { DatePickerInput } from '../../../../components/DatePickerInput';
import { useNewTransactionModalController } from './useNewTransactionModalController';
import { Button } from '../../../../components/Button';

export function NewTransactionModal() {
  const {
    newTransactionType,
    isNewTransactionModalOpen,
    closeNewTransactionModal,
  } = useNewTransactionModalController();
  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}>
      <form>
        <div>
          <span className='text-gray-600 text-sm tracking-[-0.5px]'>
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600 text-lg tracking-[-0.5px]'>R$</span>
            <InputCurrency />
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-10'>
          <Input
            type='text'
            name='name'
            placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
          />
          <Select
            placeholder='Categoria'
            options={[
              { value: 'CHECKING', label: 'Conta Corrente' },
              { value: 'CASH', label: 'Dinheiro Físico' },
              { value: 'INVESTMENT', label: 'Investimentos' },
            ]}
          />
          <Select
            placeholder={isExpense ? 'Pagar com' : 'Receber na Conta'}
            options={[
              { value: 'CHECKING', label: 'Conta Corrente' },
              { value: 'CASH', label: 'Dinheiro Físico' },
              { value: 'INVESTMENT', label: 'Investimentos' },
            ]}
          />
          <ColorsDropdownInput />
          <DatePickerInput />
          <Button>Criar</Button>
        </div>
      </form>
    </Modal>
  );
}
