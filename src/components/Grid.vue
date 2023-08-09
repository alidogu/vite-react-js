<script setup>
import { /* onMounted , onBeforeUnmount, onUnmounted, */ ref/* , inject  */ } from 'vue'
import { storeToRefs } from 'pinia'
import { /* createReactMissVue, */ applyPureReactInVue } from 'veaury'
//const Grid = lazyPureReactInVue(() => import('./react_app/Grid'))
import { useGridStore } from '../store/index'
import GridReact from './react_app/Grid.jsx'
import { ProviderInVuePure } from "./gridstore";

const Grid = applyPureReactInVue(GridReact)

const props = defineProps({
  data: Object,
  columns: Object,
  update: Function,
  clicked: Function,
  headerclicked: Function,
  selected: Function,
  themeoverride: Function,
  theme: Object,
  width: Object,
  settings: Object
})

//const $gridStore = inject('$gridStore')

const GridStore = useGridStore()

const { GridData } = storeToRefs(GridStore)



// onMounted(() => {
//   //
// })

function updatedata(data) {
  GridData.value = data
}
 

defineExpose({ updatedata })
</script>
  
<template>
  <ProviderInVuePure>
    <Grid :columns="columns" :update="update" :theme="theme" :clicked="clicked" 
      :headerclicked="headerclicked" :selected="selected" :settings="settings" :themeoverride="themeoverride" />
  </ProviderInVuePure>
</template>
   