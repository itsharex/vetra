<script setup lang="ts">
import { darkTheme } from 'naive-ui'

import { appThemeOverrides } from '@/config/theme'
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="appThemeOverrides">
    <RouterView />
  </n-config-provider>
</template>
