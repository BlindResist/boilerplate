<script lang="ts" setup>
import Velocity from 'velocity-animate';
import { computed } from 'vue';
import { DEFAULT_DURATION } from '@/common/constants';
import type { HTMLElementClass } from '@/common/types';

interface Props {
  overlay?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  overlay: false,
});

const active = defineModel<boolean>('active', {
  required: false,
});

const elementClass = computed<HTMLElementClass>(() => {
  return {
    'app-spinner--overlay': props.overlay,
  };
});

function appearAnimationEnter(el: Element, done: Function): void {
  Velocity(
    el,
    {
      opacity: 1,
    },
    {
      duration: DEFAULT_DURATION,
    },
    {
      complete: done,
    },
  );
}

function appearAnimationLeave(el: Element, done: Function): void {
  Velocity(
    el,
    {
      opacity: 0,
    },
    {
      duration: DEFAULT_DURATION,
    },
  );
  Velocity(
    el,
    {
      display: 'none',
    },
    {
      complete: done,
    },
  );
}
</script>

<template>
  <transition
    @enter="appearAnimationEnter"
    @leave="appearAnimationLeave"
  >
    <div
      v-if="active"
      class="app-spinner"
      :class="elementClass"
    >
      <div class="app-spinner__inner" />
    </div>
  </transition>
</template>

<style lang="scss">
.app-spinner {
  $minWidth: 6rem;
  $minHeight: 6rem;

  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;
  width: auto;
  height: auto;
  min-width: $minWidth;
  min-height: $minHeight;
  position: relative;
  z-index: 999;

  &__inner {
    width: $minWidth;
    height: $minHeight;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('./assets/app-spinner.svg');
  }

  &--overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(var(--color-white), .7);
    user-select: none;
  }
}
</style>
