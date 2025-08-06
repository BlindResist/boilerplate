import type { Props } from 'tippy.js';

export interface AppTooltipActions {
  close?: (() => void);
}

export interface AppTooltipProps {
  title?: string;
  visible?: boolean;
  placement?: Props['placement'];
}

export type AppTooltipTippyProps = Pick<
  Props,
  'placement'
  | 'offset'
  | 'interactive'
  | 'appendTo'
  | 'trigger'
>;

export interface AppTooltipSlots {
  activator: [];
  default: [value: Function];
}
