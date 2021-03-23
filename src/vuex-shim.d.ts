import { BaseStore } from "./store";

declare module "@vue/runtime-core" {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: BaseStore;
  }
}
