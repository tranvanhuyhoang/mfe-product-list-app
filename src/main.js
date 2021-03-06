import "./set-public-path"
import { h, createApp } from "vue"
import singleSpaVue from "single-spa-vue"
import router from "./router"
import App from "./App.vue"

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    el: "#product-relate",
    render() {
      return h(App, {
        mountParcel: this.mountParcel,
        otherProp: this.otherProp,
      })
    },
  },
  handleInstance: (app) => {
    app.use(router)
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
