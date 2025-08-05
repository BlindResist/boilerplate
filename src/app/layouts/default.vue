<script setup lang="ts">
import {
  AppContent,
  AppFooter,
  AppHeader,
} from './components';
</script>

<template>
  <AppHeader />
  <AppContent />
  <AppFooter />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;

  @include breakpoint(tablet) {
    font-size: 14px;
  }

  @include breakpoint(v-mobile) {
    font-size: 10px;
  }
}

::selection {
  color: var(--color-white);
  background: var(--color-black);
  text-shadow: none;
}

::-moz-selection {
  color: var(--color-white);
  background: var(--color-black);
  text-shadow: none;
}

body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 20rem;
  width: 100%;
  color: var(--color-black);
  font-weight: 400;
  font-family: 'jb', Arial, Helvetica, sans-serif;
  background-color: var(--color-white);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

a {
  color: var(--color-black);
  text-decoration: none;

  &:visited,
  &:focus,
  &:active {
    outline: 0 none;
    text-decoration: none;
  }
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.container {
  max-width: 77.5rem;
  min-height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: auto;

  @include breakpoint(tablet) {
    max-width: none;
    width: 100%;
  }
}

p {
  margin: 0;
}

p+p {
  margin: 1rem 0 0;
}
</style>
