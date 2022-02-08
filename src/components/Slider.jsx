import react, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {Customizer}  from 'my-library-core'

const Wrapper = styled.div`
    //default
    ${({widthColumn, gap, widthGrid, width})=>Customizer ({
      w: width, m: '5px auto', d: 'flex', anItems:'center',boxSizing: 'border-box',
      '.container':{
          w: '100%', ofX: 'scroll', ofY:'visible', scrollBehavior: 'smooth',
          '::-webkit-scrollbar':{d:'none'},
    
          '.subContainer': {
            d: 'grid', w: widthGrid + 'px',  gridGap: gap + 'px', 
            gtc: 'repeat(auto-fill, ' + widthColumn + 'px )',
          }, 
      }
    })}

    //custom
    ${({myStyle}) => myStyle && Customizer (myStyle)}
`

const Slider = ({
    elements,
    widthColumn = "200", 
    gap="5",
    columns="4",
    width="100%",
    myStyle={},
    myRef
  }) => {

  gap = parseInt(gap)
  widthColumn = parseInt(widthColumn)
  columns = parseInt(columns)

  let widthGrid = (widthColumn + gap) * columns
  // let ident = id()
  

  const refCard = useRef(null)
  const refContainer = useRef(null)
  const widthContainer = useRef(0)
  
const toLeft = () => refContainer.current.scroll(refContainer.current.scrollLeft - (widthColumn + gap), 0)
const toRight = () => refContainer.current.scroll(refContainer.current.scrollLeft + (widthColumn + gap), 0)
const isTouchDevice = () => typeof window.ontouchstart !== 'undefined'
    
    return (
        <Wrapper 
          widthColumn={widthColumn} 
          gap={gap}
          columns={columns}
          width={width}
          widthGrid={widthGrid}
          myStyle={myStyle}
          ref={myRef}
        >
          {
            !isTouchDevice() && <IoIosArrowBack 
            color="#555555" fontSize="1.5rem" 
            onClick={toLeft} 
            />
          }

          <div ref={refContainer} className="container" >
            <div className="subContainer">{elements}</div>
          </div>
          {
            !isTouchDevice() &&  <IoIosArrowForward 
            color="#555555" fontSize="1.5rem" 
            onClick={toRight} 
            />
          }
        </Wrapper>
    )
    
}
export default Slider