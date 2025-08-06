<script lang="ts" setup>
import { AppListItem } from './components';
import type {
  AppListItemType,
  AppListProps,
  AppListSlots,
} from './types';
import { slotName } from '@/common/helpers';

const props = withDefaults(defineProps<AppListProps>(), {
  tag: 'ul',
  items: () => [],
  noMarkers: false,
});

defineSlots<AppListSlots>();
</script>

<template>
  <Component
    :is="tag"
    class="list"
  >
    <AppListItem
      v-for="item in items"
      :key="item.id"
      :tag="props.tag"
      :no-markers="props.noMarkers"
    >
      <slot :name="slotName<AppListItemType['id']>('list-item', item.id)">
        {{ item.label }}
      </slot>
    </AppListItem>
  </Component>
</template>
