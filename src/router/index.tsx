import {createBrowserRouter} from 'react-router-dom';
import Home from '@/page/common/home.tsx';
import ErrPage from "@/page/common/errPage.tsx";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <ErrPage/>
    },
]);

export default Router
