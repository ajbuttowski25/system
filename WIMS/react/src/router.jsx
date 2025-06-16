import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login.jsx";

const router = createBrowserRouter([
{
    path: '/login',
    element: <Login/> 
},
])

export default router;