import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Signin from './components/Signin.vue';
export default [
    {path:'/',component:Home},
    {path:'/signup',component:Signup},
    {path:'/signin',component:Signin},
]
// we are exporting an array of objects