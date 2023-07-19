<script setup>
import { /* onMounted, onUnmounted, */ ref/* , inject  */ } from 'vue'
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

const { GridData/* , GridColumns */ } = storeToRefs(GridStore)


const gridRefVue = ref()


//onMounted(async () => {
//console.log('onMounted gridRefVue', gridRefVue.value)
/*console.log('gridRef keys', Object.keys(gridRef.value)); */
//console.log('gridRef GridStore', GridStore);
// gridRef.value._value.props.passedProps
// })
// const localdata = ref(JSON.parse(JSON.stringify(props.data)))
//})


function updatedata(data) {
  GridData.value = data
}

defineExpose({ updatedata })
</script>
  
<template>
  <ProviderInVuePure>
    <Grid ref="gridRefVue" :columns="columns" :update="update" :theme="theme" :clicked="clicked"
      :headerclicked="headerclicked" :selected="selected" :settings="settings" :themeoverride="themeoverride" />
  </ProviderInVuePure>
</template>
   