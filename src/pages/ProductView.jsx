//--------------IMPORTS---------------------------
import React, { useState } from 'react'
//dependencies
import styled from 'styled-components'
//components
import { Slider, Star, Comment, Product, Layout, GoToTop } from '../components'
import { MyBtn, Customizer, Box, Modal } from 'my-library-core'
//icons
import { GiExpand } from 'react-icons/gi'
//other
import { useStateValue } from '../store/StateProvider'
import { commentsData, cardsData, imagesProduct } from '../testData'
import { Link } from 'react-router-dom'

//--------------END_IMPORTS--------------------------
const StyledLink = styled(Link)`
 border-radius: 5px;
 background: rgb(48, 48, 48);
 color: #fff;
display: inline-block;
padding: 10px;
margin: 10px;
font-size: 14px;
`

// const elements = imagesProduct.map((element) => <ImageProductView url={element}/>)
const elements = imagesProduct.map((url) => (
  <li key={url}>
    <Box
      myStyle={{
        aspectRatio: '1.25/1',
        img: {
          br: '5px',
          objectFit: 'cover',
          w: '100%',
          h: '100%',
        },
      }}
    >
      <img src={url} alt='' />
    </Box>
  </li>
))
const products = cardsData.map((element) => {
  return (
    <Product
      key={element.id}
      title={element.title}
      price={element.price}
      image={element.image}
    />
  )
})
const comments = commentsData.map((element) => {
  return (
    <Comment
      userName={element.userName}
      title={element.title}
      rating={element.rating}
      abstract={element.abstract}
    />
  )
})
//----------STYLED-COMPONENTS-----------

const View = styled.div`
  ${Customizer({
    h: '100vh',
    pt: 'sticky',
    t: '0',
    fxDit: 'column',
    '.view_menu': { mBm: '5rem', w: '100%', jc: 'center' },
    break: {
      medium: { gc: '1 / -1', pt: 'static' },
    },
    '@media (max-width: 900px)': {
      pt: 'relative',
    },
  })}
`
const Info = styled.div`
  ${Customizer({
    p: '4rem',
    '.info_info': {
      mBm: '20px',
      '.price': { fs: '1.25rem', fw: '500', c: '#888888' },
    },
    '.abstract': {
      c: '#252a2b',
      lnH: '25px',
      ul: { p: '1.5rem', li: { m: '5px 0' } },
    },
    '.info_menu': {
      w: '100%',
      z: '10',
      pt: 'sticky',
      bm: '0',
      bg: '#fff',
      p: '1rem',
      fxWrap: 'wrap',
      '@media (max-width: 600px)': {
        bm: '80px',
        z: '1',
      },

      "input[type='number']": {
        w: '50px',
        h: '35px',
        b: '1px solid #ccc',
        br: '3px',
        p: '2px 5px',
        outline: 'none',
      },
    },
    break: {
      medium: { gc: '1 / -1' },
    },
  })}
`

function ProductView() {
  const [{ currentProduct, basket }, dispatch] = useStateValue()

  const [numberItems, setNumberItems] = useState(1)
  const [stateModal, setStateModal] = useState(false)

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: currentProduct.id,
        title: currentProduct.title,
        image: currentProduct.image,
        price: currentProduct.price,
        rating: currentProduct.rating,
        numberItems: numberItems,
      },
    })
  }

  return (
    <>
      <Layout bg='#fff'>
        <Box></Box>
        <Box
          bg='#fff'
          grid
          myStyle={{
            mxW: '1200px',
            '.mX': { m: '0 10px' },
            '.flex': { d: 'flex' },
            '.center': { jc: 'center', ai: 'center' },
            '.end': { jc: 'flex-end', ai: 'center' },
            '.free': { c: '#1aa331' },
          }}
        >
          <Box
            grid
            span='1 / -1'
            myStyle={{ '@media (max-width: 900px)': { gtc: '1fr' } }}
          >
            <View className='flex center'>
              <Box grid>
                <Slider
                  elements={elements}
                  columns='10'
                  widthColumn='550'
                  myStyle={{ gc: '1 / -1' }}
                />
              </Box>

            </View>
            <Info>
              <h1>{currentProduct.title}</h1>
              <div className='info_info flex end'>
                <div className='price mX'>${currentProduct.price}</div>
                <div className='rating mX flex'>
                  {Array(currentProduct.rating)
                    .fill()
                    .map((_, i) => (
                      <Star />
                    ))}
                </div>
                <p className='free mX'>free shipping</p>
              </div>
              <div className='abstract'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam ipsum saepe explicabo illum quia odio rem ex aliquam
                  asperiores, iusto nostrum culpa ipsam maiores, aperiam
                  incidunt repudiandae fuga, laborum
                </p>{' '}
                <br /> <br />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam ipsum saepe explicabo illum quia odio rem ex aliquam
                  asperiores, iusto nostrum culpa ipsam maiores, aperiam
                  incidunt repudiandae fuga, laborum
                </p>{' '}
                <br /> <br />
                <p> Product features:</p> <br />
                <ul>
                  <li>Lorem ipsum, dolor sit amet consectetur</li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>ipsum, </li>
                  <li>ipsum, dolor sit amet</li>
                  <li>met consectetur adipisicing</li>
                </ul>{' '}
                <br /> <br />
                <p>Returns and refunds:</p>
                <br />
                <ul>
                  <li>
                    orem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quibusdam ipsum saepe explicabo illum quia odio rem ex
                    aliquam asperiores, iusto{' '}
                  </li>
                  <li>
                    orem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quibusdam ipsum saepe explicabo illum quia odio rem ex
                    aliquam asperiores, iustoorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Quibusdam ipsum saepe
                    explicabo illum quia odio rem ex aliquam asperiores, iusto
                  </li>
                </ul>{' '}
                <br />
              </div>
              <div className='info_menu flex end'>
                <input
                  type='number'
                  value={numberItems}
                  onChange={(e) => setNumberItems(e.target.value)}
                />

                <StyledLink onClick={() => addToBasket()} to='/checkout'>
                  Add to cart
                </StyledLink>
              </div>
            </Info>
          </Box>
          {/* related products */}
          <h2>Products you may be interested in</h2>
          <Box grid span='1 / -1'>
            <Slider
              elements={products}
              columns='10'
              widthColumn='240px'
              myStyle={{ gc: '1 / -1' }}
            />
          </Box>
          {/* opinions */}
          <Box grid cols='1fr 1fr 1fr' span='1/ -1' myStyle={{ mT: '30px' }}>
            <Box
              grid
              center
              myStyle={{
                h: '100vh',
                gtc: '1fr',
                '@media (max-width: 900px)': { h: '200px', gc: 'span 3' },
              }}
            >
              <h2>CUSTOMER REVIEWS</h2>
            </Box>

            <Box
              grid
              myStyle={{
                h: '100vh',
                ofY: 'scroll',
                gc: 'span 2',
                '::-webkit-scrollbar': { d: 'none' },
                '@media (max-width: 900px)': { gc: 'span 3' },
              }}
            >
              {comments}
            </Box>
          </Box>
        </Box>
      </Layout>
      <GoToTop />
    </>
  )
}

export default ProductView
