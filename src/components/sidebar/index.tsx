import RouteList from "@/router";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const sidebar = () => {
    console.log(RouteList)
    const navigateList = RouteList.filter(item => item.name).map((item) => {
            const {name, path} = item
            return (
                <NavLink to={path}>{name}</NavLink>
            )
        }
    )
    return (
        <div>
            {navigateList.map((item, index) => (
                <SidebarItemStyle key={index}>
                    {item}
                </SidebarItemStyle>
            ))}
        </div>
    )
}

const SidebarItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;

  a {
    text-decoration: none;
  }

  &:hover {
    background-color: #F2F3F5;
  }
`

export default sidebar