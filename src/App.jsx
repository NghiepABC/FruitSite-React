import styled from "styled-components"
import CurrentLayout from "./Pages/CurrentLayout";

const Modal = styled.div`
  z-index: 6;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  display: none;
  transition: opacity .5s ease;
`

const handleModalClick = (e) => {
  const sideBar = document.querySelector(".sideBar");
  e.target.style.opacity = 0;
  sideBar.removeAttribute("style");
  setTimeout(() => {
    e.target.style.display = "none";
  }, 500)
}

let check = true;
window.addEventListener("resize", () => {
  const modal = document.querySelector(".modal")
  if(window.innerWidth < 992 && check){
    modal.style.cssText = `
      display: block;
      opacity: 1;`
    
    setTimeout(() => {
      modal.removeAttribute("style")
    }, 300)
    check = false
  }
  else if(window.innerWidth > 992 && !check){
    check = true
  }
})

const App = () => {
  return (
    <div>
      <CurrentLayout/>
      <Modal className="modal" onClick={handleModalClick}></Modal>
    </div>
  )
};

export default App;