<template>
  <div>
    <router-link to="/home" style="margin-right: 10px">home</router-link>
    <router-link to="/main" style="margin-right: 10px">main</router-link>
    <router-link to="/xxx" style="margin-right: 10px"
      >qiankuan: xxx</router-link
    >
    <router-link to="/yyy" style="margin-right: 10px"
      >qiankuan: yyy</router-link
    >
    <router-view v-slot="{ Component, route }">
      <div style="margin: 8px">
        <component
          v-if="route.meta.isMicro"
          :is="QiankunWrapper"
          :name="route.meta.name"
        />
        <component v-else :is="Component" />
      </div>
    </router-view>
  </div>
</template>
<script>
import QiankunWrapper from "@/qiankun/QiankunWrapper.vue";
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onUnmounted,
  ref,
} from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "BasicLayout",
  setup() {
    const router = useRouter();

    let removeRouterAfterEach = ref(null);

    onBeforeMount(async () => {
      // something here
    });

    onMounted(() => {
      // something here
      // add one after guard
      if (!removeRouterAfterEach.value) {
        removeRouterAfterEach.value = router.afterEach((to, from) => {
          console.log("BasicLayout:afterEach", from, to.fullPath);
        });
      }
    });

    onUnmounted(() => {
      // 移除后置路由守卫
      if (removeRouterAfterEach.value) {
        removeRouterAfterEach.value();
        removeRouterAfterEach.value = null;
        console.log("BasicLayout: remove after guard");
      }
    });

    return {
      QiankunWrapper,
    };
  },
});
</script>

<style>
.trigger {
  font-size: 18px;
  line-height: 45px;
  padding: 3px 14px 0;
  cursor: pointer;
  transition: color 0.3s;
}

.header-left-fold {
  flex: none;
}
.header-content {
  flex: auto;
  width: calc(100% - 46px);
}
</style>
