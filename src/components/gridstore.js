import { useGridStore } from '../store/index' 
import {createCrossingProviderForPureReactInVue} from 'veaury'

const [useVueHooksInReact, ProviderInVuePure] = createCrossingProviderForPureReactInVue(function() {
  return {
      gridStore: useGridStore() 
  }
})

export {
  useVueHooksInReact,
  ProviderInVuePure
}

// import { createReactMissVue } from 'veaury'
// import { defineStore, createPinia } from 'pinia'
// import { useGridStore } from '../store/index'

// let [useReactMissVue, ReactMissVue] = createReactMissVue({
//   useVueInjection() {
//     // This object can be obtained by using useReactMissVue in the react component
//     return {
//       gridStore: useGridStore()
//     }
//   }, 
// })

// export {
//   useReactMissVue,
//   ReactMissVue
// }
