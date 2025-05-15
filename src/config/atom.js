import { atom } from 'jotai';

export const inputImageAtom = atom(null);
export const isLoadingAtom = atom(false);
export const evaluationResultAtom = atom(null);
export const errorStateAtom = atom({
  isError: false,
  message: '',
  statusCode: null
});
