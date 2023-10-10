import RouteList from "@/router";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

interface sidebarProps {
    isReduce: boolean,
    switchShow: () => any
}

const sidebar = ({ isReduce, switchShow }: sidebarProps) => {
    const navigateList = RouteList.filter(item => item.name).map((item) => {
            const {name, path} = item
            return (
                <NavLink to={path}>{name}</NavLink>
            )
        }
    )
    return (
        <div>
            <div>
                {navigateList.map((item, index) => (
                    <SidebarItemStyle key={index}>
                        {item}
                    </SidebarItemStyle>
                ))}
            </div>
            <div>
                <ButtonStyle onClick={switchShow}>
                    {isReduce ? '<' : '>'}
                </ButtonStyle>
            </div>

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
const ButtonStyle = styled.button`
  position: fixed;
  top: 10%;
  left: 19%;
`

export default sidebar