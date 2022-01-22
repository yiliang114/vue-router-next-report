<template>
  <div id="pageContainer"></div>
</template>
<script>
import { loadMicroApp } from "qiankun";
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
} from "vue";
import { apps } from "./index";
const QiankunWrapper = defineComponent({
  name: "QiankunWrapper",
  props: {
    name: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    let microApp = null;
    let propName = ref("");

    const loadQiankunApp = async () => {
      // find app to load
      const app = apps.filter((item) => item.name === props.name)[0];
      if (app) {
        console.log(`[${app.name}] will load`);
        microApp = await loadMicroApp({
          ...app,
          props: {
            ...app.props,
          },
          // fetch(url, ...args) {
          //   return window.fetch(url, {
          //     ...args,
          //     mode: 'cors',
          //     credentials: 'include',
          //   });
          // },
        });
        propName.value = props.name;
        console.log(`[${app.name}] was loaded`);
      }
      // qiankun.emmitGlobalStateChange({
      //   authority: {},
      //   layout: {},
      //   menu: {},
      // });
    };

    const unloadQiankunApp = async () => {
      if (microApp) {
        console.log(`[${propName.value}] was unloaded`);
        return microApp.mountPromise.then(
          () => {
            microApp.unmount();
            microApp = null;
          },
          () => {
            microApp.unmount();
            microApp = null;
          }
        );
      }
      return Promise.resolve("no app can be unload.");
    };

    onMounted(async () => {
      await loadQiankunApp();
    });

    onUpdated(async () => {
      if (propName.value !== props.name) {
        console.log(`[${propName.value}] was updated`);
        await unloadQiankunApp();
        await loadQiankunApp();
        propName.value = props.name;
      }
    });

    onBeforeUnmount(async () => {
      // something here
      await unloadQiankunApp();
    });

    return {};
  },
});

export default QiankunWrapper;
</script>
