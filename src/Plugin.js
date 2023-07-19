import { ReactGrid/*, Stores */} from "./components";
//import { createPinia } from 'pinia'
export default {
  install: (app ) => {
    app.component("ReactGrid", ReactGrid); 
    //app.use(createPinia());
    //app.provide('$gridStore', Stores);
  },
};

export { ReactGrid/*, Stores */};
