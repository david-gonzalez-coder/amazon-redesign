import React, {useState} from 'react'
import { cardsData} from '../testData'
import {MyColors as Colors, Box, Box as Wrapper, Box as Products} from 'my-library-core'
import {BsSearch} from 'react-icons/bs'
import { Product, Layout, GoToTop } from '../components'

const products = cardsData.map((element) => {
    return (<Product 
      key={element.id}
      id={element.id}
      title={element.title}
      price={element.price}
      image={element.image}
      rating={element.rating}
    />)
    })

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    return(
        <Layout
        myStyle={{
            gg: '0',
            '.search_input':{h: '60px', w: '100%', b: 'none', outline: 'none'},
            '.search_group':{
                bg: '#fff', c: Colors.dark500, h: '60px',
                p: '1.25rem 2rem', gc: '1 / -1', m: '0',
                mxW: '500px', pt: 'relative', t: '30px'
            },
            '.search_wrapper':{
                w: '100%', bgSz: '100%', h: '200px', mBm: '50px',
                bgImg: "url('https://i.pinimg.com/564x/4c/76/fb/4c76fb78f9cc06658b5d906d73548358.jpg')",
                br: '0 0 20px 20px', 
                bgSz: '100%', 
                
            },
            '@media (max-width: 550px)': {gtc: '1fr'}
        }}>
           <Box></Box>
           <Box>
           <Box
                flex
                x="center"
                y="flex-end"
                className="search_wrapper"
            >
                <Box flex rounded  y="center" className="search_group" > 
                        <BsSearch style={{fontSize: '1.25rem', marginRight: '15px'}}/>
                        <input 
                            type="text"
                            className="search_input" 
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}

                        />
                </Box>
            </Box>
            <Box grid myStyle={{ w: '95%', mxW: '1200px' }}>
               
                    

                <Products
                    grid
                    y="stretch"
                    span="1 / -1"
                    p="1rem"
                    gap="5px"
                    cols="repeat(auto-fill, minmax(200px, 1fr))" 
                >
                    {products}
                </Products>
            </Box>
           </Box>
           <GoToTop />
        </Layout>
    )
}
export default Search