const SignInView = () => import("./SignInView.vue");
const SignUpView = () => import("./SignUpView.vue");
const SignOutView = () => import("./SignOutView.vue");

const authRoutes = [
  {
    name: "SignIn",
    path: "/signin",
    component: SignInView,
    meta: {
      layout: "DefaultLayout",
    },
  },

  {
    name: "SignUp",
    path: "/signup",
    component: SignUpView,
    meta: {
      layout: "DefaultLayout",
    },
  },

  {
    name: "SignOut",
    path: "/signout",
    component: SignOutView,
    meta: {
      layout: "DefaultLayout",
    },
  },
];

export default authRoutes;
