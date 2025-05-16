import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import SignUp from "../components/SignUp";
import Users from "../components/Users";
import SignIn from "../components/SignIn";

export const router =createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,Component:Home,
                loader:()=>fetch('https://coffee-store-server-nine-liard.vercel.app/coffees')
            },
            {
                path:'/addCoffee',
                Component:AddCoffee
            },
            {
                path:'/update/:id',
                loader:({params})=>fetch(`https://coffee-store-server-nine-liard.vercel.app/coffees/${params.id}`),
                Component:UpdateCoffee
            },
            {
                path:'/details/:id',
                Component:CoffeeDetails,
                loader:({params})=>fetch(`https://coffee-store-server-nine-liard.vercel.app/coffees/${params.id}`)
            },
            {
                path:'/signUp',
                Component:SignUp
            },
            {
                path:'/signIn',
                Component:SignIn
            },
            {
                path:'/users',
                loader:()=>fetch('https://coffee-store-server-nine-liard.vercel.app/users'),
                Component:Users
            }
        ]
    }
])