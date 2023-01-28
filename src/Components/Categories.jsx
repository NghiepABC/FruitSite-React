import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { categories } from "../data/general_data"
import { PageContext } from "./Headers"

const CategoriesList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
`

const Pages = styled.ul`
    position: absolute;
    top: 100%;
    overflow: hidden;
    width: max-content;
    padding-left: 10px;
    line-height: 0px;
    transition: line-height .5s ease;
    z-index: 2;
    background-color: #f5f5f5;
`

const Category = styled.div`
    line-height: 46px;
    position: relative;
    flex: 1;
    text-align: center;
    cursor: pointer;
    &:hover {
        color: #7fad39;
    }

    &:hover > ${Pages}{
        color: #000;
        line-height: 46px;
    }

`

const Page = styled.li`
    list-style-type: none;
    text-align: left;
    padding: 0 10px;
    &:hover {
        background-color: #f5f5f5;
        color: #7fad39;
    }
`

export const Categories = ({className="CateComp"}) => {
    const pageCxt = useContext(PageContext)
    console.log(pageCxt.pageId)
    const [cateId, setCateId] = useState(pageCxt.pageId)

    return (
        <CategoriesList className={className}>
            {categories.map(category => (
                <Category 
                    key={category.id} 
                    onClick={() => {
                        if(category.id === 1 || category.id === 5){
                            setCateId(category.id)
                            pageCxt.changeToPage(window.location.pathname, category.id)
                        }
                    }}>
                    <Link 
                        style={{
                            display: "block", 
                            textDecoration: "none", 
                            textAlign: "left", 
                            color: cateId === category.id ? "#7fad39" : "#000", 
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            fontSize: 14,
                            fontWeight: 900
                        }} 
                        to={category.name === "Home" ? "/" : "/" + category.name}>
                        {category.name}
                    </Link>
                    {category.name === "Pages" && 
                        <Pages>
                            {
                                category.subPages.map((subPage) => (
                                    <Page key={subPage}>{subPage}</Page>
                                ))
                            }
                        </Pages>
                    }

                </Category>
            ))}
        </CategoriesList>
    )
}