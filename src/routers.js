import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import AddRest from "./components/Add.vue";
import UpdateRest from "./components/Update.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: "Home",
        component: HomePage,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: "LogIn",
        component: LogIn,
        path: "/log-in"
    },
    {
        name: "Add",
        component: AddRest,
        path: "/add"
    },
    {
        name: "Update",
        component: UpdateRest,
        path: "/update/:id"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;