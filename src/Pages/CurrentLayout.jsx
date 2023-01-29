import { BrowserRouter, Route, Routes } from "react-router-dom"
import Headers from "../Components/Headers"
import Home from "./Home"
import Contact from "./Contact"
import Footer from "../Components/Footer"
import PageNotFound from "./PageNotFound"

const CurrentLayout = () => {
  return (
    <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Headers/>} >
                    <Route index element={<Home/>} />
                    <Route path="Contact" element={<Contact/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  )
}

export default CurrentLayout