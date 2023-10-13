import Sidebar from "@/components/sidebar";
import RouteList from "@/router";
import {useRoutes} from "react-router-dom";
import {useState} from "react";

const Page = () => {
    const RouteElement = useRoutes(RouteList)
    const [isReduce, setIsReduce] = useState(false)
    return (
        <>
            <div className={'flex min-h-screen'}>
                <div className={`${isReduce ? 'transition   duration-150  w-9/12':''}`}>
                    <Sidebar/>
                </div>
                <div className={'min-h-screen '}>
                    <div>
                        <button className={'fixed top-0 '} onClick={() => setIsReduce(!isReduce)}>
                            {isReduce ? '<' : '>'}
                        </button>
                    </div>
                    {RouteElement}
                </div>
            </div>
        </>
    )
}

export default Page
