export interface AppTabsItem<T extends string = string> {
  id: T;
  label?: string;
  active: boolean;
  disabled?: boolean;
  align?: 'left' | 'right';
}

export interface AppTabsSlots {
  [key: string]: [value: string];
}
