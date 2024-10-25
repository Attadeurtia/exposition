import App from './App.vue'
import NewPage from './components/NewPage.vue'

export const routes = [
    {path: '/', component: App},
    {path: '/newpage', component: NewPage, name: 'newpage'},
    {path: "/:pathMatch(.*)*", redirect: '/'},
    
];