<template>
  <div class="flex overflow-hidden ">
    <div class="h-screen bg-[#262d47] text-white w-[250px]">
      <Sidebar :all-components="allComponents" />
    </div>
    <div class="w-full p-2">
      <h2 class="text-lg mb-3 font-bold">
        Component Description
      </h2>
      <p>
        The <span class="text-[#262d47] font-bold mb-5">DepositButton</span> component is a styled wrapper for a clickable button-like area. It uses a default <slot /> to allow custom content to be injected into the button. The component provides consistent styling for buttons used in deposit-related actions.

        It is primarily used to maintain a consistent look and feel across the application for deposit buttons, including padding, font styling, shadows, and disabled states.
      </p>
      <div>
        <div>
          <h2 class="text-lg mt-3 font-bold">
            Usage
          </h2>
          <pre class="bg-[#80808082]"><code>
    &lt;DepositButton&gt;
      Deposit Now
    &lt;/DepositButton&gt;
  </code></pre>
        </div>
        <div>
          <h2 class="text-lg mt-3 font-bold">
            Preview
          </h2>
          <div class="w-[200px]">
            <CasinoButton>
              Deposit Now
            </CasinoButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'

const allComponents = ref([])
const components = import.meta.glob('../src/runtime/components/**/*.vue')
for (const path in components) {
  if (path) {
    const name = path.split('/').pop()
      .replace(/\.\w+$/, '')

    const componentInfo = {
      name: name,
    }
    allComponents.value.push(componentInfo)
  }
};
</script>

 <style>
 body {
   margin: 0;
   padding: 0;
 }
 </style>
