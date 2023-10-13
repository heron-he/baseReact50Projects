import RouteList from "@/router";
import {NavLink} from "react-router-dom";

const sidebar = () => {
    const navigateList = RouteList.filter(item => item.name).map((item) => {
            const {name, path} = item
            return (
                <NavLink className={'flex items-center justify-center py-15 hover:bg-slate-100'} to={path}>{name}</NavLink>
            )
        }
    )
    return (
        <div>
            <div>
                {navigateList.map((item, index) => (
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default sidebar