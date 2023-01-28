import Slider from "react-slick"
import styled from "styled-components"
import { storeProducts } from "../data/general_data";
import { Wrapper } from '../Pages/Home'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import freshFruit from "../Resource/fresh-fruit.avif"
import driedFruit from "../Resource/dried-fruit.avif"
import Juice from "../Resource/juice.avif"
import Vegetable from "../Resource/vegetable.avif"
import OrganicMeal from "../Resource/organic-meal.avif"

var productsImg = [freshFruit, driedFruit, Juice, Vegetable, OrganicMeal]

const Container = styled.div`
    margin-top: 50px;
    padding-bottom: 100px;
`

const SliderRow = styled.div`
    margin-left: -15px;
    margin-right: -15px;
`

const settings = {
    dots: false,
    infinite: "true",
    autoplay: true,
    autoplayspeed: 3000,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                fade: true,
                autoplaySpeed: 4000,
                speed: 1000
            }
        }
    ]
};

const childSettings = {
    infinite: "true",
    autoPlay: true,
    autoplayspeed: 3000,
    speed: 700
}

const ProductsSlider = () => {
  return (
    <Container>
        <Wrapper>
            <SliderRow>
                <Slider {...settings}>
                    {
                        storeProducts.map((product, index) => (
                            <div className="product-item" key={product.id} {...childSettings}>
                                <div style={{
                                    position: "relative",
                                    background: `url(${productsImg[index]})`, 
                                    width: "100%", 
                                    height: "270px", 
                                    padding: "0 15px",
                                    backgroundSize: "cover",
                                    backgroundPosition: "top/center",
                                    backgroundClip: "content-box"}}>
                                    <p style={{
                                        position: "absolute",
                                        top: "70%",
                                        left: "50%",
                                        width: "80%",
                                        padding: "20px 15px", 
                                        textAlign: "center", 
                                        fontWeight: "900", 
                                        color: "#fff",
                                        background: "#9cb96f",
                                        backgroundClip: "content-box",
                                        transform: "TranslateX(-50%)"
                                        }}>
                                        {product.name}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </SliderRow>
        </Wrapper>
    </Container>
  )
}

export default ProductsSlider