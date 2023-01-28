import { Menu } from '@mui/icons-material'
import styled from 'styled-components'
import { Wrapper } from '../Pages/Home'
import { Row } from './CommonComps'
import {LogoComp, ItemComp} from './CommonComps'
import { Categories } from './Categories'

const Left = styled.div`
    flex: 0 0 25%;
    padding: 0 15px;
`

const Center = styled.div`
    flex: 0 0 50%;
    padding: 0 15px;
    @media (max-width: 991px) {
        display: none;
    }
`

const HbItemComp = styled(ItemComp)`
    flex: 0 0 25%;
    padding: 0 15px;
`

const MenuComp = styled.div`
    flex: 1 0 25%;
    padding: 0 15px;
    align-self: center;
    text-align: right;
`

const Container = styled.div`
    margin-top: 16px;
    @media (max-width: 991px) {
        & ${HbItemComp} {
            justify-content: center;
            order: 1;
            flex: 1 0 100%;
            padding-top: 30px;
        }
    }

    @media (min-width: 991px) {
        & .sideBarSwitch{
            display: none;
        }
    }
`

const LogoComponent = () => {
    return (
        <Left>
            <LogoComp/>
        </Left>
    )
}

const CateComponent = () => {
    return (
        <Center>
            <Categories/>
        </Center>
    )
}

const HeaderBottom = () => {
  function handleMenuClick(){
    const sideBar = document.querySelector(".sideBar");
    const modal = document.querySelector(".modal");
    if(!sideBar.style.transform){
        sideBar.style.transform = "translateX(0px)";
        modal.style.cssText = `
            display: block;
            opacity: 1;
        `;
    }
    else{
        sideBar.removeAttribute("style");
    }
  }
  return (
    <Container>
        <Wrapper>
            <Row>
                <LogoComponent/>
                <CateComponent/>
                <HbItemComp></HbItemComp>
                <MenuComp>
                    <Menu className="sideBarSwitch" 
                            style={{
                                cursor: "pointer", 
                                width: "40", 
                                height: "40",
                                border: "1px solid black"
                            }}
                            onClick={handleMenuClick}
                            />
                </MenuComp>
            </Row>
        </Wrapper>
    </Container>
  )
}

export default HeaderBottom