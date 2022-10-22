import { MultiplyType } from './types';

export const multiply = (input : MultiplyType.IMultiply, field : MultiplyType.MultiplyBy) => {
  return input.price * field;
};
