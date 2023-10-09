import Sidebar from "@/components/sidebar";
import styled from "styled-components";
import RouteList from "@/router";
import {useRoutes} from "react-router-dom";

const Page = () => {
    const RouteElement = useRoutes(RouteList)
    return (
        <>
            <RootStyle>
                <SidebarStyle>
                    <Sidebar/>
                </SidebarStyle>
                <MainStyle>
                    {RouteElement}
                </MainStyle>
            </RootStyle>
        </>
    )
}

const RootStyle = styled.div`
  display: flex;
`
const SidebarStyle = styled.div`
  width: 20%;
  min-height: 100vh;
`
const MainStyle = styled.div`
  width: 80%;
  min-height: 100vh;
`

export default Page
