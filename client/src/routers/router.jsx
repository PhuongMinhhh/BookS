import {
    createBrowserRouter,
    
} from "react-router-dom"
import App from "../App"
import Home from "../home/Home"
import About from "../components/About"
import Blog from "../components/Blog"
import SingleBook from "../components/SingleBook"
import Shop from "../shop/Shop"
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
                path: "/singlebook",
                element: <SingleBook/>,
            },
            {
                path: "/shop",
                element: <Shop/>,
            }
             
        ],
    },
    
    
]);
export default router;