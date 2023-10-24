import Home from '@/page/common/home.tsx';
import ErrPage from "@/page/common/errPage.tsx";
import {routes} from "@/router/routeList.tsx";

const RouteList = [
    {path: '*', element: <ErrPage/>},
    {
        path: '/',
        name: 'Home',
        element: <Home/>,
    },
    ...routes
];


export default RouteList