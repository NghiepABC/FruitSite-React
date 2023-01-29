import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"
import Introduction from "./Introduction"
import { Outlet } from "react-router-dom"
import { createContext } from "react"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { useRef } from "react"

const PageContext = createContext()

const Headers = () => {
  const PageID = useRef(null)

  const windowPathname = window.location.pathname

  switch(windowPathname) {
    case "/FruitSite-React/":
      PageID.current = 1
      break
    case "/FruitSite-React/Contact":
      PageID.current = 5
      break
    default:
      break
  }

  const [Page, SetPage] = useState(window.location.pathname)

  function setNewPage(setPage, pageId){
    PageID.current = pageId
    SetPage(setPage)
  }

  const resource = {
    page: Page,
    changeToPage: setNewPage,
    pageId: PageID.current
  }

  return (
    <PageContext.Provider value={resource}>
        <HeaderTop/>
        <HeaderBottom/>
        <Introduction/>
        <Sidebar/>
        <Outlet/>
    </PageContext.Provider>
  )
}

export default Headers
export {PageContext}
