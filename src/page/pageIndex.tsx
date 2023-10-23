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
                <div className={`transition-[width] ease-in-out duration-300  ${isReduce?'w-[200px]':'w-0'}`}>
                    <Sidebar/>
                </div>
                <div className={'min-h-screen w-full flex '}>
                    <div>
                        <button className={'bg-sky-200 hover:bg-sky-300 animate-[propel-5s-infinite]'} onClick={() => setIsReduce(!isReduce)}>
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
