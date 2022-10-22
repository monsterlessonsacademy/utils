import { DivideType } from './types';

export const divide = (element : DivideType.IDivide, divisor : DivideType.Divisor) => {
  const _divisor = Number(divisor);
  return element.amount / _divisor;
};
