import { defineStore } from 'pinia'

export const useGridStore = defineStore('grid', {
  state: () => {
    return {
      GridData: [],
      GridColumns: [],
      IsSearch: false
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    //   increment() {
    //   this.count++
    // },
  },
})