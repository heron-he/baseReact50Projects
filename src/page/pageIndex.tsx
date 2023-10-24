import Sidebar from "@/components/sidebar";
import RouteList from "@/router";
import {useRoutes} from "react-router-dom";
import {useState} from "react";

const Page = () => {
    const RouteElement = useRoutes(RouteList)
    const [isReduce, setIsReduce] = useState(false)
    return (
        <>
            <div className={'flex min-h-screen w-screen'}>
                <div
                    className={`transition-[width] ease-in-out duration-75  ${isReduce ? 'w-[200px]' : 'w-0'}`}>
                    <div className={isReduce ? '' : 'hidden'}>
                        <Sidebar/>
                    </div>
                </div>
                <div className={'min-h-screen w-full'}>
                    <div className={'fixed ml-4 mt-4 opacity-40'}>
                        <button
                            className={'w-7 h-7 rounded-full bg-rose-100 hover:bg-rose-300'}
                            onClick={() => setIsReduce(!isReduce)}>
                            {isReduce ? '<' : '>'}
                        </button>
                    </div>
                    <div className={'w-full h-full'}>
                        {RouteElement}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
