import { useState } from 'react';
import { number } from 'zod';

export function useFiltersModal() {
  const [selectBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? null : bankAccountId
    );
  }

  function handleChangeYear(step: number) {
    setSelectedYear((prevState) => prevState + step);
  }

  return {
    selectedYear,
    selectBankAccountId,
    handleChangeYear,
    handleSelectBankAccount,
  };
}
