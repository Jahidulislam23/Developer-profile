import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../Components/Home/About";
import Skills from "../Components/Skills/Skills";
import Education from "../Components/Education/Education";
import Projects from "../Components/ProjectSection/ProjectSection";
import Contact from "../Components/ContactSection/ContactSection";

const router = createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/skill',
            element:<Skills></Skills>
        },
        {
            path:'/education',
            element:<Education></Education>
        },
        {
            path:'/project',
            element:<Projects></Projects>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        }
    ]
}

])

export default router;