import { NumericFormat } from 'react-number-format';

export function InputCurrency() {
  return (
    <NumericFormat
      className='outline-none w-full font-bold text-[32px] text-gray-800 tracking-[-1px]'
      thousandSeparator='.'
      decimalSeparator=','
      defaultValue='0,00'
    />
  );
}
