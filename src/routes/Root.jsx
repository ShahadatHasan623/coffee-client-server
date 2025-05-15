import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import SignUp from "../components/SignUp";

export const router =createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,Component:Home,
                loader:()=>fetch('http://localhost:3000/coffees')
            },
            {
                path:'/addCoffee',
                Component:AddCoffee
            },
            {
                path:'/update/:id',
                loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
                Component:UpdateCoffee
            },
            {
                path:'/details/:id',
                Component:CoffeeDetails,
                loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
            },
            {
                path:'/signUp',
                Component:SignUp
            }
        ]
    }
])