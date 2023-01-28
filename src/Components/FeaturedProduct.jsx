import axios from "../axios"
import { useLayoutEffect, useRef, useState } from 'react'
import { useEffect } from "react";
import styled from "styled-components"
import { css } from "styled-components";
import { Wrapper } from "../Pages/Home";
import { Row } from "./CommonComps";
import { Heading } from "./CommonComps";
import { Favorite, Refresh, ShoppingCart } from "@mui/icons-material";

const BaseURL = "https://api.predic8.de:443";

const Appearance = css`
    animation: appearance 1s ease 0s 1 forwards;

    @keyframes appearance {
        from{
            transform: scale(0);
        }
        to{
            transform: scale(1);
        }
    }
`

const Container = styled.div``

const FeaturedHeader = styled.div`
    flex: 1;
    text-align: center;
`

const FeaturedBody = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
`

const Title = `Featured Product`

const FeaturedCateBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 42px;
`

const FeaturedCateItem = styled.div`
    margin-right: 18px;
    cursor: pointer;
    border-bottom: 3px solid #fff;
`

const ProductItem = styled.div`
    flex: 0 0 25%;
    padding: 0 15px;
    margin-top: 50px;

    ${Appearance}

    @media screen and (max-width: 991px) {
        flex: 0 0 33.33333333%;
    }

    @media screen and (max-width: 767px) {
        flex: 0 0 50%;
    }

    @media screen and (max-width: 575px) {
        flex: 0 0 100%;
    }
`

const ProductName = styled.p`
    text-align: center;
    ${Appearance}
`

const ProductPrice = styled.p`
    text-align: center;
    font-weight: 900;
    ${Appearance}
`

const Options = styled.ul`
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    transition: bottom .45s ease;
`

const Option = styled.li`
    margin-right: 8px;
    border-radius: 50%;
    padding: 8px 12px 0 12px; 
    background-color: #fff;

    &:hover{
        background-color: #7fad39; 
    }

    &:hover > svg{
        color: white !important;
        transform: rotate(360deg);
    }
`

const ProductImage = styled.div`
    position: relative;
    overflow: hidden;
    transition: all .5s ease;

    &:hover ${Options} {
        bottom: 20px;
    }
`

const ItemStyle = {
    width: "18",
    color: "#aaa5a5",
    transition: "transform .3s ease"
}

const FeaturedProduct = () => {
    const fetchUrl = "shop/categories/"
    const [featuredCates, setFeaturedCate] = useState([]);
    const [chosenCate, setChosenCate] = useState(null)
    const [cateData, setCateData] = useState([])
    const [products, setProduct] = useState([])
    //can we use useRef here?
    const oldCate = useRef(null)
    // const CateItemList = document.querySelector(".cate-item-list")

    useEffect(() => {
        async function fetchCates(){
            const request = await axios.get(fetchUrl);
            setFeaturedCate(request.data.categories);
        }
        fetchCates()
    }, [fetchUrl])
    
    useLayoutEffect(() => {
        if(document.querySelector(".cate-item-list").childNodes.length){
            setChosenCate(document.querySelector(".cate-item-list").childNodes[0])
            if(!document.querySelector(".cate-item-list").querySelector("[style]")){
                document.querySelector(".cate-item-list").childNodes[0].style.borderBottom = "3px solid #7fad39"
            }
        }
    }, [featuredCates])

    useEffect(() => {
        oldCate.current = document.querySelector(".cate-item-list").querySelector("[style]")
        async function fetchCateData(){
            if(chosenCate){
                const request = await axios.get(fetchUrl + chosenCate.innerText).catch(() => {
                    console.log("nothing fetched")
                })
                if(request?.data?.products){
                    setCateData(request.data.products)
                    chosenCate.style.borderBottom = "3px solid #7fad39" 
                    if(oldCate.current !== chosenCate)
                        oldCate.current.removeAttribute("style") 
                }
                else{
                    setChosenCate(oldCate.current)
                }
            }
        }
        fetchCateData()
        // eslint-disable-next-line
    }, [chosenCate])
    
    useEffect(() => {
        const productArray = [];  
        async function fetchItemData(){
            const promises = await Promise.all(cateData.map( item =>
                fetch(BaseURL + item.product_url)
                    .then(res => res.json())
                    .then(data => {
                        if(data?.photo_url){
                            // const imgCheck = new Image()
                            // imgCheck.src = BaseURL + data.photo_url
                            // imgCheck.onerror = () => {
                            //     return false
                            // }
                            productArray.push(data)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                ))
            // console.log(productArray)
            setProduct(productArray)
            return promises
        }
        fetchItemData()
    }, [cateData])

    // console.log(oldCate.current, chosenCate)
  return (
    <Container>
        <Wrapper>
            <Row>
                <FeaturedHeader>
                    <Heading>
                        {Title}
                    </Heading>
                    <FeaturedCateBox className="cate-item-list">
                        {featuredCates.map((category) => (
                            <FeaturedCateItem className="cate-item" key={category.name}
                                onClick={(e) => {
                                    setChosenCate(e.target)
                                }}>
                                {category.name}
                            </FeaturedCateItem>
                        ))}
                    </FeaturedCateBox>
                </FeaturedHeader>
            </Row>
            <Row>
                <FeaturedBody>
                    {
                        products.map((product) => (
                            <ProductItem key={product.name}>
                                <ProductImage style={{backgroundImage: `url(${BaseURL}${product.photo_url})`, 
                                    backgroundPosition: 'top/center', 
                                    backgroundSize: 'cover', 
                                    backgroundRepeat: 'no-repeat',
                                    height: "270px"}}>
                                    <Options>
                                        <Option>
                                            <Favorite style={{...ItemStyle}}/>
                                        </Option>
                                        <Option>
                                            <Refresh style={{...ItemStyle}}/>
                                        </Option>
                                        <Option>
                                            <ShoppingCart style={{...ItemStyle}}/>
                                        </Option>
                                    </Options>
                                </ProductImage>
                                <ProductName>{product.name}</ProductName>
                                <ProductPrice>${product.price}</ProductPrice>
                            </ProductItem>
                        ))
                    }
                </FeaturedBody>
            </Row>
        </Wrapper>
    </Container>
  )
}

export default FeaturedProduct