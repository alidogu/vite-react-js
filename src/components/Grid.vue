<script setup>
import {  onMounted , onBeforeUnmount,/* onUnmounted, */ ref/* , inject  */ } from 'vue'
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

const GridStore = /*$gridStore.*/useGridStore()

const { GridData, IsSearch /* , GridColumns */ } = storeToRefs(GridStore)


//const gridRefVue = ref()

onMounted(() => {
  document.addEventListener('keypress', searchKeyBinding, true);
})

onBeforeUnmount(() => {
  document.removeEventListener('keypress', searchKeyBinding, true);
})

const searchKeyBinding = ({ keyCode }) => {
  console.log('searchKeyBinding',keyCode)
  if (keyCode === 102) {
    IsSearch.value = !IsSearch.value
  }
};
 

function updatedata(data) {
  GridData.value = data
}

function search(data) {
  IsSearch.value = data
}

defineExpose({ updatedata, search })
</script>
  
<template>
  <ProviderInVuePure>
    <Grid :columns="columns" :update="update" :theme="theme" :clicked="clicked" 
      :headerclicked="headerclicked" :selected="selected" :settings="settings" :themeoverride="themeoverride" />
  </ProviderInVuePure>
</template>
   