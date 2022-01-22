import QiankunPlugin from "@/qiankun/index";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
// 启动qiankun
app.use(QiankunPlugin);
app.mount("#app");
