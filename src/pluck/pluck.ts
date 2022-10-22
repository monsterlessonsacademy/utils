import { PluckType } from './types';

export const pluck = (element : PluckType.IElement, field : PluckType.Field) => {
  return element[field] ?? 'unknown';
};
