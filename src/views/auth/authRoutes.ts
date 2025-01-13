const SignInView = () => import("./SignInView.vue");

const authRoutes = [
  {
    name: "SignIn",
    path: "/signin",
    component: SignInView,
    meta: {
      layout: "DefaultLayout",
    },
  },
];

export default authRoutes;
