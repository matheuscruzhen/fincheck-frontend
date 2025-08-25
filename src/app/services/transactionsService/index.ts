import { create } from './create';
import { getAll } from './getAll';
import { update } from './update';
import { remove } from './remove';

export const transactionsService = {
  getAll,
  create,
  update,
  remove,
};
