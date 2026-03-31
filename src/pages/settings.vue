<route lang="json5">
{
  name: 'Settings',
  meta: {
    layout: 'settings',
  },
}
</route>

<script setup lang="ts">
import { openUrl } from '@tauri-apps/plugin-opener'
import { ref } from 'vue'

import { appConfig } from '@/config/app'

const isAutoStart = ref(false)
const isUpdate = ref(false)

async function openAuthorSite(url: string) {
  await openUrl(url)
}
</script>

<template>
  <div class="flex flex-1 flex-col min-h-0">
    <div class="flex flex-col gap-2">
      <n-card>
        <div class="flex items-center justify-between">
          <span>开机自启</span>
          <n-switch v-model:value="isAutoStart" />
        </div>
      </n-card>

      <n-card>
        <div class="flex items-center justify-between">
          <span>自动更新</span>
          <n-switch v-model:value="isUpdate" />
        </div>
      </n-card>
      <n-card>
        <div class="flex items-center justify-between">
          <span>版本信息</span>
          <div>
            {{ appConfig.version }}
          </div>
        </div>
      </n-card>
    </div>

    <footer class="text-xs text-white/55 mt-auto pt-4 flex items-center justify-between">
      <span class="inline-flex gap-1 items-center">
        Built with
        <button class="link" type="button" @click="openAuthorSite(appConfig.projectTemplateUrl)">
          {{ appConfig.projectTemplate }}
        </button>
      </span>
      <span class="inline-flex gap-1 items-center">
        ©2026
        <button class="link" type="button" @click="openAuthorSite(appConfig.authorUrl)">
          {{ appConfig.authorName }}
        </button>
      </span>
    </footer>
  </div>
</template>

<style scoped>
.link {
  --uno: 'ml-1 cursor-pointer text-white/80 transition hover:text-white'
}
</style>
