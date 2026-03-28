<script setup lang="ts">
import { openUrl } from '@tauri-apps/plugin-opener'

function toUrl(url: string) {
  openUrl(url)
}
</script>

<template>
  <div>
    <n-card title="简介">
      这是一个面向 Windows 的桌面应用起步模板，基于 Vue 3 与 Tauri 2 构建，组件库采用Naive UI。
    </n-card>
    <n-card title="组件展示" class="mt-2">
      <template #header-extra>
        <div
          class="text-stone-400 flex gap-1 cursor-default items-center hover:text-stone-300"
          @click="toUrl('https://www.naiveui.com/')"
        >
          参考 Naive UI
          <div class="i-mdi-link-variant" />
        </div>
      </template>
      <div class="flex flex-col gap-4">
        <div class="flex gap-2">
          <n-button>Default</n-button>
          <n-button type="tertiary">
            Tertiary
          </n-button>
          <n-button type="primary">
            Primary
          </n-button>
        </div>
        <div class="flex gap-2">
          <n-tag> 爱在西元前 </n-tag>
          <n-tag type="success">
            不该
          </n-tag>
          <n-tag type="warning">
            超人不会飞
          </n-tag>
          <n-tag type="error">
            手写的从前
          </n-tag>
        </div>
        <n-input type="text" placeholder="基本的 Input" />
        <n-input type="textarea" placeholder="基本的 Textarea" />
      </div>
    </n-card>
  </div>
</template>
