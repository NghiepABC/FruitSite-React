import React from 'react'
const style = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    zIndex: 5
}
const PageNotFound = () => {
  return (
    <h1 style={{...style}}>404 Page Not Found!</h1>
  )
}

export default PageNotFound