import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import authRoutes from "@/views/auth/authRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: "AuthenticatedLayout",
      },
    },
    ...authRoutes,
  ],
});

export default router;
