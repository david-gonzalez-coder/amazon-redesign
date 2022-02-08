import {useState, useEffect} from 'react'

const useDimensions = (myRef, resize, scroll) => {
    const [dimensions, setDimensions] = useState(
        { bottom: 0, height: 0,left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 }
    )
    const getDimensions = () => myRef.current.getBoundingClientRect() 
    
    useEffect(() => {
        myRef.current && setDimensions(getDimensions())
        
        const handleResize = () => { setDimensions(getDimensions())}
        const handleScroll = () => { setDimensions(getDimensions())}
        
        resize === true && window.addEventListener("resize", handleResize)
        scroll === true && window.addEventListener("scroll", handleScroll)
  
      return () => {
        resize === true && window.removeEventListener("resize", handleResize)
        scroll === true && window.removeEventListener("scroll", handleScroll)
      }
    }, [myRef])
  
    return dimensions;
  };
  export default useDimensions