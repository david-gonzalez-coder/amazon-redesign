//------------------IMPORTS-------------------------
  import {useRef} from "react";
  import {Layout} from "../components"
  import GoToTop from "../components/GoToTop";
  //components
    import { Slider, Poster, Product, Navigation } from "../components";
    import {posterData, cardsData, heroImagesData  } from '../testData'
    import { 
      Box as Wrapper, 
      Box as Main,
      Box as Products,
      Box 
  } from 'my-library-core'
  import useDimensions from '../hooks/useDimensions'


//---------------END_IMPORTS-------------------------



 const heroElements = heroImagesData.map((url)=> 
  <li key={url}>
    <Box myStyle={{
      aspectRatio: '2.5/1',
      'img':{
          br: '5px',
          objectFit: 'cover',
          w: '100%',
          h:'100%',
      }
    }}>
      <img src={url} alt="" />
    </Box>
  </li>
)
 const productsElements = cardsData.map((element, idx) => {
    return (<li key={idx}><Product 
      id={element.id}
      title={element.title}
      price={element.price}
      image={element.image}
      rating={element.rating}
    /></li>)
})
 
const posterElements = posterData.map((element, idx) => {
  return (<li key={idx}><Poster 
    title={element.title}
    image={element.image}
    linkName="View more"
    linkTo="#"
  /></li>)
  })
 
///----------------COMPONENT-------------------
const Home = () => {
  const refContainer = useRef(null)
  const {width} = useDimensions(refContainer, true)

  return (
    <> 
      <Layout gap="10px">
        <Navigation />
        <Box></Box>
          <Main grid main myStyle={{mxW: '1200px', p: '0 30px' }} >
              
              <Slider 
              myRef={refContainer}
              widthColumn={width -46}
                elements={heroElements} 
                columns="5"
                myStyle={{gc: '1 / -1'}}
                />

              <h2 myStyle={{m: '15px'}} >Recomended for you</h2>
              <Products 
               y="stretch"
               span="1 / -1"
               p="1rem"
               gap="5px"
               grid
               cols="repeat(auto-fill, minmax(210px, 1fr))" 
              >
                {productsElements}
              </Products>

              <h2 myStyle={{m: '15px'}}>Departments</h2>
              <Slider 
                elements={posterElements} 
                columns={"5"} 
                widthColumn="250" 
                myStyle={{gc: '1 / -1'}}/>

              <h2 myStyle={{m: '15px'}}>Recomended for you</h2>
              <Slider 
                elements={productsElements} 
                columns="10" 
                widthColumn="220" 
                myStyle={{gc: '1 / -1'}}/>


              <h2 myStyle={{m: '15px'}}>Recomended for you</h2>
              <Products
                 y="stretch"
                 span="1 / -1"
                 p="1rem"
                 gap="5px"
                 grid
                 cols="repeat(auto-fill, minmax(210px, 1fr))" 
              >
                {productsElements}
              </Products>
            
          </Main>
          <GoToTop />
      </Layout>
    </>
  );
};
export default Home;
