import styled from "styled-components"
import { LogoComp, ItemComp, LanguageComp, LoginComp, ShippingComp, MailComp, SocialNetworks } from "./CommonComps"
import { Categories } from "./Categories"

const Container = styled.div`
    transform: translateX(-300px);
    position: fixed;
    width: 300px;
    max-width: 300px;
    top: 0;
    bottom: 0;
    padding: 50px 30px 30px;
    background-color: white;
    transition: all .5s ease;
    z-index: 1000;

    @media (min-width: 992px) {
      transform: translateX(-300px) !important; 
    }

    @media (max-width: 374px) {
      width: 270px;
      overflow: auto;
    }
`

const SbItemComp = styled(ItemComp)`  
  padding-top: 14px;
  justify-content: start;
`

const SbSecondComp = styled.div`
  display: flex;
`

const SbLanguageComp = styled(LanguageComp)`
  padding: 20px 0 20px 0;
  & > div{
    padding: 0;
    border: none;
  }
`

const SbCateComp = styled(Categories)`
  flex-direction: column;
  align-items: start;
  & div{
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #ddd; 
  }

  & div ul{
    width: 100%;
    z-index: 2;
    padding-left: 0;
    background-color: white;
  } 

  & ul li{
    padding-left: 0;
    padding-right: 0;
  } 
`

const SbSocialNetworks = styled(SocialNetworks)`
  justify-content: left;
  padding-top: 38px;
  padding-bottom: 46px;

  & i:first-child{
    padding-left: 0;
  }
`

const SbMailComp = styled(MailComp)`
  border: none;
`

const SbShippingComp = styled(ShippingComp)`
  padding-left: 0;
`

const Sidebar = ({className="sideBar"}) => {
  return (
    <Container className={className}>
      <LogoComp/>
      <SbItemComp/>
      <SbSecondComp>
        <SbLanguageComp/>
        <LoginComp/>
      </SbSecondComp>
      <SbCateComp/>
      <SbSocialNetworks/>
      <SbMailComp/>
      <SbShippingComp/>
    </Container>
  )
}

export default Sidebar