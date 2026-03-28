<script setup lang="ts">
import { ref } from 'vue'

import Tabs from '@/components/Tabs.vue'

const contentAreaRef = ref<HTMLElement | null>(null)

function setTransitioning(value: boolean) {
  const el = contentAreaRef.value
  if (!el)
    return
  el.classList.toggle('is-transitioning', value)
}
</script>

<template>
  <div class="layout-shell">
    <header class="tabs-header">
      <Tabs />
    </header>
    <div ref="contentAreaRef" class="content-area">
      <router-view v-slot="{ Component, route }">
        <transition
          name="drawer"
          mode="out-in"
          @before-enter="() => setTransitioning(true)"
          @after-enter="() => setTransitioning(false)"
          @before-leave="() => setTransitioning(true)"
          @after-leave="() => setTransitioning(false)"
        >
          <div :key="route.fullPath" class="route-shell">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
  will-change: transform, opacity;
}

.drawer-enter-from {
  transform: translateY(-18px);
  opacity: 0;
}

.drawer-leave-to {
  transform: translateY(18px);
  opacity: 0;
}

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

.content-area.is-transitioning {
  --uno: overflow-hidden;
}
</style>
