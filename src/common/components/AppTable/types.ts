export interface AppTableHeader<T> {
  id: string;
  name: keyof T;
  label: string;
  width?: string;
}

export interface AppTableRow<T> {
  id: string;
  data: T;
}

export interface AppTableProps<T> {
  headers: AppTableHeader<T>[];
  rows: AppTableRow<T>[];
  showHeader?: boolean;
  padding?: boolean;
}

export type AppTableSlotPrefix = 'td' | 'th';

export interface AppTableSlots<T> {
  [key: `${AppTableSlotPrefix}-${string}`]: [data: T | AppTableHeader<T>];
}
