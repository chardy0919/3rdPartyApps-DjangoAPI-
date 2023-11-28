import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/HomePage";
import { DogPage } from "./pages/DogPage"
import { FoxPage } from "./pages/FoxPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                index:true,
                element: <HomePage />,
            },
            {
                path: "dogs/",
                element: <DogPage/>
            },
            {
                path: "fox/",
                element: <FoxPage />
            }
        ]
    }
])

export default router;