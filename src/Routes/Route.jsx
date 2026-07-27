import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Shop from "../Pages/Shop";



const router = createBrowserRouter([
    { path : "/", element : <Home/> },
    { path:"/cart", element : <Cart/> },
    { path :"/shop", element : <Shop/> }
]);


export default router;