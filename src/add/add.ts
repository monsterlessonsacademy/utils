import { AddType } from './types';

export const add = (element : AddType.IAdd, field : AddType.Quantity) => {
  return element.age + field;
};
