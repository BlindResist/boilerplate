export type AppTableSlotPrefix = 'td' | 'th';

export type AppTableHeaderWidth = `${string}${'px' | '%'}`;

export interface AppTableHeader<T> {
  id: string;
  name: keyof T;
  label: string;
  width?: AppTableHeaderWidth;
}

export interface AppTableRow<T> {
  id: string;
  data: T;
}

export interface AppTableProps<T> {
  headers: AppTableHeader<T>[];
  rows: AppTableRow<T>[];
  hideHeader?: boolean;
}

export interface AppTableSlots<T> {
  [key: `${AppTableSlotPrefix}-${string}`]: [data: T | AppTableHeader<T>];
}
