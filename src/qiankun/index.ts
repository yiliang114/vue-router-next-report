import router, { history } from "@/router";
import { microApps } from "@/router/qiankunRouter";
import type { ObjectType, RegistrableApp } from "qiankun";
import type { App } from "vue";
import { ref } from "vue";

let installed = false;

// 子应用加载状态
const loadingMicroApp = ref<boolean>(false);
export { loadingMicroApp };

// 构建需要加载的子应用
export const apps: RegistrableApp<ObjectType>[] = microApps.map((app) => ({
  ...app,
  props: {
    fromMain: true,
    history: { ...history },
    router,
  },
  container: "#pageContainer",
  activeRule: (location) => location.pathname.startsWith(`/${app.name}/`),
  loader: (loading) => {
    loadingMicroApp.value = loading;
  },
}));

const qiankunPlugin = {
  install(app: App): void {
    if (installed) {
      return;
    }
    installed = true;
    // 卸载时关闭监听
    const unmountApp = app.unmount;
    app.unmount = () => {
      unmountApp();
    };
  },
};

export default qiankunPlugin;
