<script setup lang="ts">
import Tabs from '@/layouts/components/Tabs.vue'
</script>

<template>
  <div class="layout-shell">
    <header class="tabs-header">
      <Tabs />
    </header>
    <div class="content-area">
      <div class="route-shell">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.route-shell {
  --uno: h-full flex flex-col;
}

.layout-shell {
  --uno: h-screen overflow-hidden;
}

.tabs-header {
  --uno: fixed left-0 right-0 top-0 z-20 px-3 py-2;
}

.content-area {
  --uno: mt-14 box-border h-[calc(100vh-56px)] overflow-auto p-3;
}
</style>
