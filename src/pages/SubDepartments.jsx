import {Poster} from '../components'
import {subDepartmentsData  } from '../testData'
import {Layout, GoToTop} from '../components'
import {Box, Box as Products, Box as Main} from 'my-library-core'

const departments = subDepartmentsData.map((element) => {
    return (<Poster myStyle={{h: '150px'}}
      title={element.title}
      image={element.image}
      linkName="View more"
      linkTo="/department"
    />)
    })

const SubDepartments = () => {
    return (
        <Layout>
        <Box></Box>
        <Main grid  myStyle={{w: '95%', mxW: '1200px' }}>
            <Products 
                 y="stretch"
                 span="1 / -1"
                 p="1rem"
                 gap="5px"
                 grid
                 cols="repeat(auto-fill, minmax(300px, 1fr))" 
            >
                {departments}
            </Products>
        </Main>
        <GoToTop />
    </Layout>
    )
}
export default SubDepartments