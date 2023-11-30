export default {
  path: "/dataprocess",
  meta: {
    title: "数据处理"
  },
  redirect: "/dataprocess/import",
  children: [
    {
      // 数据导入
      path: "/dataprocess/import",
      name: "Import",
      component: () => import("@/views/dataProcess/dataImport.vue"),
      meta: {
        title: "数据导入"
      }
    },
    {
      // 数据预处理
      path: "/dataprocess/preprocess",
      name: "Preprocess",
      component: () => import("@/views/dataProcess/dataPreprocess.vue"),
      meta: {
        title: "数据预处理"
      }
    }
  ]
};
