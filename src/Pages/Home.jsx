import styled from "styled-components"
import ProductsSlider from "../Components/ProductsSlider"
import FeaturedProduct from "../Components/FeaturedProduct"
import Banner from "../Components/Banner"
import TypicalSliders from "../Components/TypicalSliders"
import HomeBlog from "../Components/HomeBlog"

export const Wrapper = styled.div`
    max-width: 1170px;
    padding: 0 15px;
    margin: auto;
    
    @media (min-width: 992px) and ( max-width: 1200px){
      max-width: 960px;
    }

    @media (max-width: 991px){
      max-width: 720px;
    }

    @media (max-width: 576px){
      max-width: 540px;
    }
`

const Home = () => {
  return (
    <div>
      <ProductsSlider/>
      <FeaturedProduct/>
      <Banner/>
      <TypicalSliders/>
      <HomeBlog/>
    </div>
  )
}

export default Home