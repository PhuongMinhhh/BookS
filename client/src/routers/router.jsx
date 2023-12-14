import {
    createBrowserRouter,
    
} from "react-router-dom"
import App from "../App"
import Home from "../home/Home"
import About from "../components/About"
import Blog from "../components/Blog"
import Shop from "../shop/Shop"
import SingleBook  from "../shop/SingleBook"
import DashBoardLayout from "../dashboard/DashBoardLayout"
import Dashboard from "../dashboard/Dashboard"
import UploadBook from "../dashboard/UploadBook"
import ManagerBook from "../dashboard/ManagerBook"
import EditBook from "../dashboard/EditBook"
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/blog",
                element: <Blog/>,
            },
            {
                path: "/shop",
                element: <Shop/>,
            },
            {
                path: "/book/:id",
                element: <SingleBook/>,
                loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)

            }
            
             
        ],
    },
    {
        path: "/admin/dashboard",
        element: <DashBoardLayout/>,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard/>,
            },
            {
                path: "/admin/dashboard/manager",
                element: <ManagerBook/>,
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element: <EditBook/>,
            },
            {
                path: "/admin/dashboard/Upload",
                element: <UploadBook/>,
                loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
            }
        ],
    }
    
    
]);
export default router;