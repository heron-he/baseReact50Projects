import Home from '@/page/common/home.tsx';
import ErrPage from "@/page/common/errPage.tsx";
import Project1 from "@/page/project1/index.tsx";

const RouteList = [
    {path: '*', element: <ErrPage/>},
    {
        path: '/',
        name: 'Home',
        element: <Home/>,
    },
    {
        path: '/project1',
        name: 'Project1',
        element: <Project1/>
    }
];


export default RouteList