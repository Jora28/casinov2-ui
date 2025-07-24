<template>
  <div class="h-full">
    <UAccordion :items="items">
      <template #content>
        <p
          v-for="component in allComponents"
          class="px-8 py-4 hover:bg-[#4f5a82] cursor-pointer"
        >
          {{ component }}
        </p>
      </template>
    </UAccordion>
  </div>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const allComponents = ref([])
const components = import.meta.glob('../../src/runtime/components/**/*.vue')

for (const path in components) {
  if (path) {
    const name = path.split('/').pop()
      .replace(/\.\w+$/, '')

    allComponents.value.push(name)
  }
}

const items = ref<AccordionItem[]>([
  {
    label: 'Components',
    icon: 'i-lucide-box',
  },
])
</script>
