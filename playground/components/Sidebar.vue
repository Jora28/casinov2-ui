<template>
  <div class="w-full pt-2">
    <div class="m-0 w-full max-w-md rounded-2xl">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between bg-transparent px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span class="uppercase">Components</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-white"
          />
        </DisclosureButton>
        <DisclosurePanel
          v-for="component in allComponents"
          :key="component.name"
          class="hover:bg-gray-600 px-4 pb-2 pt-4 text-sm cursor-pointer text-gray-800"
          :class="{ 'text-red-600': component.name === isActiveComponent }"
          @click="changeStatus(component)"
        >
          {{ component.name }}
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

interface ComponentType {
  name: string
}

const { allComponents } = defineProps<{
  allComponents: ComponentType[]
}>()

const isActiveComponent = ref(allComponents[1].name ?? '')

function changeStatus(component: ComponentType) {
  isActiveComponent.value = component.name
}
</script>
